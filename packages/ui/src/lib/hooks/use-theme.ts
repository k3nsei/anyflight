import { useTheme } from '@emotion/react';

import type { AnyflightTheme } from '../providers';
import { defaultTheme } from '../themes';

export const useAnyflightTheme = (): AnyflightTheme => {
  const theme = useTheme();

  return Object.keys(theme ?? {}).length ? theme : defaultTheme;
};
