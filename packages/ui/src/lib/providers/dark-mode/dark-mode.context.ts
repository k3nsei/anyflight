import { createContext } from 'react';

import { DarkModeUserPreference } from './dark-mode-user-preference';

const userPreference = DarkModeUserPreference.getInstance();

interface DarkModeType {
  isEnabled: boolean;
  isForced?: boolean;
  setUserPreference: (value?: 'dark' | 'light' | null) => void;
}

/** @internal */
export const DarkModeContext = createContext<DarkModeType>({
  isEnabled: false,
  isForced: userPreference.value,
  setUserPreference: (value) => userPreference.next(value),
});

DarkModeContext.displayName = 'DarkModeContext';
