import { useContext } from 'react';

import { AnyflightThemeNestLevelContext } from '../providers/theme/theme.context';

/** @internal */
export const useAnyflightThemeNestLevel = () => useContext(AnyflightThemeNestLevelContext);
