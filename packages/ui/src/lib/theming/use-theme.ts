import { useTheme as useEmotionTheme } from '@emotion/react';

import type { Theme } from './theme';

export const useTheme = (): Theme => useEmotionTheme();
