import { TinyColor } from '@ctrl/tinycolor';
import { addons } from '@storybook/addons';
import { addDecorator } from '@storybook/react';
import { ReactNode, useEffect } from 'react';

import { DarkModeProvider, ThemeProvider, defaultTheme, useDarkModeUserPreference, useIsDarkMode } from '../src';
import './preview.scss';

const withDarkMode = (storyFn: () => ReactNode) => {
  return <DarkModeProvider children={storyFn()} />;
};

const channel = addons.getChannel();

let darkModeEnabled = false;

interface ThemedApp {
  children: ReactNode;
}

const ThemedStory = ({ children }: ThemedApp) => {
  const isDarkMode = useIsDarkMode();
  const [userPreference, setUserPreference] = useDarkModeUserPreference();

  const updateUserPreference = () => {
    if (userPreference !== darkModeEnabled) {
      setUserPreference(darkModeEnabled);
    }
  };

  useEffect(
    () => {
      setUserPreference(false);
    },
    // This effect is expected to be run once
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useEffect(() => {
    const callback = (event: any) => {
      const color = event?.globals?.backgrounds?.value ?? 'transparent';

      darkModeEnabled = color !== 'transparent' && new TinyColor(color).isDark();

      updateUserPreference();
    };

    channel.on('globalsUpdated', callback);

    return () => channel.off('globalsUpdated', callback);
  });

  return <ThemeProvider theme={isDarkMode ? defaultTheme : defaultTheme} children={children} />;
};

const withTheme = (storyFn: () => ReactNode) => <ThemedStory children={storyFn()} />;

addDecorator(withTheme);
addDecorator(withDarkMode);
