import { ReactNode } from 'react';

import { AnyflightUiThemeNestLevelContext } from '../contexts';

interface AnyflightUiThemeNestLevelProviderProps {
  nestLevel: number;
  children?: ReactNode;
}

export const AnyflightUiThemeNestLevelProvider = ({ nestLevel, children }: AnyflightUiThemeNestLevelProviderProps) => {
  return <AnyflightUiThemeNestLevelContext.Provider value={nestLevel} children={children} />;
};

AnyflightUiThemeNestLevelProvider.displayName = 'AnyflightUiThemeNestLevelProvider';
