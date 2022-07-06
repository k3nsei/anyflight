import { useTheme as useEmotionTheme } from '@emotion/react';

import type { Theme } from '../providers';

export const useTheme = (): Theme => useEmotionTheme();
