import { useContext } from 'react';

import { AnyflightUiDarkModeContext } from '../internals';

export const useAnyflightUiDarkMode = () => {
  const {
    isEnabled: isDarkModeEnabled,
    isForced: isDarkModeForced,
    setUserPreference,
  } = useContext(AnyflightUiDarkModeContext);

  return {
    isDarkModeEnabled,
    isDarkModeForced,
    setDarkModeUserPreference: (value?: 'dark' | 'light' | null) => setUserPreference(value),
  } as const;
};
