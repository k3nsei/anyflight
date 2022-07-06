import { TinyColor } from '@ctrl/tinycolor';
import { addons } from '@storybook/addons';
import { DecoratorFn } from '@storybook/react';
import { useEffect } from 'react';

import { AnyflightUiDarkModeProvider, AnyflightUiThemeProvider, defaultTheme, useAnyflightUiDarkMode } from '../src';
import './preview.scss';

const channel = addons.getChannel();

let theme: 'light' | 'dark' = 'light';

export const decorators: DecoratorFn[] = [
  (Story) => {
    const { isDarkModeEnabled, isDarkModeForced, setDarkModeUserPreference } = useAnyflightUiDarkMode();

    const updateUserPreference = () => {
      if (isDarkModeForced !== (theme === 'dark')) {
        setDarkModeUserPreference(theme);
      }
    };

    useEffect(
      () => {
        const requestRef = requestAnimationFrame(() => setDarkModeUserPreference(theme));

        return () => cancelAnimationFrame(requestRef);
      },
      // This effect is expected to be run once
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [],
    );

    useEffect(() => {
      const callback = (event: any) => {
        const color = event?.globals?.backgrounds?.value ?? 'transparent';

        theme = color !== 'transparent' && new TinyColor(color).isDark() ? 'dark' : 'light';

        updateUserPreference();
      };

      channel.on('globalsUpdated', callback);

      return () => channel.off('globalsUpdated', callback);
    });

    return <AnyflightUiThemeProvider theme={isDarkModeEnabled ? defaultTheme : defaultTheme} children={<Story />} />;
  },
  (Story) => <AnyflightUiDarkModeProvider children={<Story />} />,
];
