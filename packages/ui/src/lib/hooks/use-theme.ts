import { useTheme } from '@emotion/react';

import type { AnyflightUiTheme } from '../providers';
import { defaultTheme } from '../themes';

export const useAnyflightUiTheme = (): AnyflightUiTheme => {
  const theme = useTheme();

  return Object.keys(theme ?? {}).length ? theme : defaultTheme;
};
