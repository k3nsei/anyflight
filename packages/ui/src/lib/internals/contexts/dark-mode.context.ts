import { createContext } from 'react';

import { AnyflightUiDarkMode, DarkModeUserPreference } from '../../providers';

const userPreference = DarkModeUserPreference.getInstance();

export const AnyflightUiDarkModeContext = createContext<AnyflightUiDarkMode>({
  isEnabled: false,
  isForced: userPreference.value,
  setUserPreference: (value) => userPreference.next(value),
});

AnyflightUiDarkModeContext.displayName = 'AnyflightUiDarkModeContext';
