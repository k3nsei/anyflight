import { useContext } from 'react';

import { DarkModeContext } from '../providers/dark-mode/dark-mode.context';

export const useDarkMode = () => {
  const { isEnabled: isDarkModeEnabled, isForced: isDarkModeForced, setUserPreference } = useContext(DarkModeContext);

  return {
    isDarkModeEnabled,
    isDarkModeForced,
    setDarkModeUserPreference: (value?: 'dark' | 'light' | null) => setUserPreference(value),
  } as const;
};
