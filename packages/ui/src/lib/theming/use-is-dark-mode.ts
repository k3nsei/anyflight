import { useContext } from 'react';

import { DarkModeContext } from './dark-mode-provider';

export const useIsDarkMode = () => useContext(DarkModeContext).isDarkMode;
