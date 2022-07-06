import { useContext } from 'react';

import { AnyflightUiDarkModeContext } from '../internals';

export const useAnyflightUiDarkMode = () => {
  const {
    isEnabled: darkModeEnabled,
    isForced: darkModeForced,
    setUserPreference,
  } = useContext(AnyflightUiDarkModeContext);

  return {
    darkModeEnabled,
    darkModeForced,
    setDarkModeUserPreference: (value?: 'dark' | 'light' | null) => setUserPreference(value),
  } as const;
};
