import { useContext } from 'react';

import { DarkModeContext } from './dark-mode-provider';

export const useDarkModeUserPreference = () => {
  const { userPreference, setUserPreference } = useContext(DarkModeContext);

  return [userPreference, setUserPreference] as const;
};
