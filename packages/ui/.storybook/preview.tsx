import { TinyColor } from '@ctrl/tinycolor';
import { addons } from '@storybook/addons';
import { addDecorator } from '@storybook/react';
import { ReactNode, useEffect } from 'react';

import { DarkModeProvider, ThemeProvider, defaultTheme, useDarkMode } from '../src';
import './preview.scss';

const withDarkMode = (storyFn: () => ReactNode) => {
  return <DarkModeProvider children={storyFn()} />;
};

const channel = addons.getChannel();

let theme: 'light' | 'dark' = 'light';

interface ThemedApp {
  children: ReactNode;
}

const ThemedStory = ({ children }: ThemedApp) => {
  const { isDarkModeEnabled, isDarkModeForced, setDarkModeUserPreference } = useDarkMode();

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

  return <ThemeProvider theme={isDarkModeEnabled ? defaultTheme : defaultTheme} children={children} />;
};

const withTheme = (storyFn: () => ReactNode) => <ThemedStory children={storyFn()} />;

addDecorator(withTheme);
addDecorator(withDarkMode);
