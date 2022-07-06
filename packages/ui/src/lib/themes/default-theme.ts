import type { AnyflightUiTheme } from '../providers';

export const defaultTheme: AnyflightUiTheme = {
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  colors: {
    inherit: 'inherit',
    current: 'currentColor',
    transparent: 'transparent',
    black: 'hsl(0 0% 0%)',
    white: 'hsl(0 0% 100%)',
    primary: {
      50: 'hsl(252 100% 97%)',
      100: 'hsl(257 100% 93%)',
      200: 'hsl(256 100% 87%)',
      300: 'hsl(255 94% 79%)',
      400: 'hsl(255 93% 72%)',
      500: 'hsl(255 91% 67%)',
      600: 'hsl(255 86% 63%)',
      700: 'hsl(255 78% 60%)',
      800: 'hsl(255 67% 55%)',
      900: 'hsl(255 53% 50%)',
    },
    accent: {
      50: 'hsl(223 100% 96%)',
      100: 'hsl(225 100% 93%)',
      200: 'hsl(228 100% 86%)',
      300: 'hsl(228 100% 78%)',
      400: 'hsl(228 96% 72%)',
      500: 'hsl(228 94% 67%)',
      600: 'hsl(228 89% 63%)',
      700: 'hsl(228 81% 59%)',
      800: 'hsl(228 69% 55%)',
      900: 'hsl(230 57% 50%)',
    },
    gray: {
      50: 'hsl(210 17% 98%)',
      100: 'hsl(210 17% 95%)',
      200: 'hsl(210 16% 93%)',
      300: 'hsl(210 14% 89%)',
      400: 'hsl(210 14% 83%)',
      500: 'hsl(210 11% 71%)',
      600: 'hsl(210 7% 56%)',
      700: 'hsl(210 9% 31%)',
      800: 'hsl(210 10% 23%)',
      900: 'hsl(210 11% 15%)',
    },
    red: {
      50: 'hsl(0 100% 98%)',
      100: 'hsl(0 100% 95%)',
      200: 'hsl(0 100% 89%)',
      300: 'hsl(0 100% 83%)',
      400: 'hsl(0 100% 76%)',
      500: 'hsl(0 100% 71%)',
      600: 'hsl(0 94% 65%)',
      700: 'hsl(0 86% 59%)',
      800: 'hsl(0 74% 54%)',
      900: 'hsl(0 65% 48%)',
    },
    pink: {
      50: 'hsl(336 100% 97%)',
      100: 'hsl(336 100% 94%)',
      200: 'hsl(338 91% 87%)',
      300: 'hsl(339 90% 81%)',
      400: 'hsl(339 88% 74%)',
      500: 'hsl(339 82% 67%)',
      600: 'hsl(339 76% 59%)',
      700: 'hsl(339 67% 52%)',
      800: 'hsl(339 68% 45%)',
      900: 'hsl(339 69% 38%)',
    },
    grape: {
      50: 'hsl(280 67% 96%)',
      100: 'hsl(287 77% 92%)',
      200: 'hsl(288 86% 86%)',
      300: 'hsl(289 85% 78%)',
      400: 'hsl(288 83% 71%)',
      500: 'hsl(288 75% 64%)',
      600: 'hsl(288 67% 58%)',
      700: 'hsl(288 56% 52%)',
      800: 'hsl(288 54% 46%)',
      900: 'hsl(288 54% 40%)',
    },
    violet: {
      50: 'hsl(252 100% 97%)',
      100: 'hsl(257 100% 93%)',
      200: 'hsl(256 100% 87%)',
      300: 'hsl(255 94% 79%)',
      400: 'hsl(255 93% 72%)',
      500: 'hsl(255 91% 67%)',
      600: 'hsl(255 86% 63%)',
      700: 'hsl(255 78% 60%)',
      800: 'hsl(255 67% 55%)',
      900: 'hsl(255 53% 50%)',
    },
    indigo: {
      50: 'hsl(223 100% 96%)',
      100: 'hsl(225 100% 93%)',
      200: 'hsl(228 100% 86%)',
      300: 'hsl(228 100% 78%)',
      400: 'hsl(228 96% 72%)',
      500: 'hsl(228 94% 67%)',
      600: 'hsl(228 89% 63%)',
      700: 'hsl(228 81% 59%)',
      800: 'hsl(228 69% 55%)',
      900: 'hsl(230 57% 50%)',
    },
    blue: {
      50: 'hsl(205 100% 95%)',
      100: 'hsl(206 100% 91%)',
      200: 'hsl(206 100% 82%)',
      300: 'hsl(206 96% 72%)',
      400: 'hsl(207 91% 64%)',
      500: 'hsl(207 86% 57%)',
      600: 'hsl(208 80% 52%)',
      700: 'hsl(208 77% 47%)',
      800: 'hsl(209 77% 43%)',
      900: 'hsl(209 75% 38%)',
    },
    cyan: {
      50: 'hsl(185 81% 94%)',
      100: 'hsl(185 84% 88%)',
      200: 'hsl(186 77% 77%)',
      300: 'hsl(187 74% 65%)',
      400: 'hsl(187 69% 55%)',
      500: 'hsl(188 72% 47%)',
      600: 'hsl(187 80% 42%)',
      700: 'hsl(188 83% 37%)',
      800: 'hsl(189 85% 32%)',
      900: 'hsl(189 85% 28%)',
    },
    teal: {
      50: 'hsl(161 79% 95%)',
      100: 'hsl(160 85% 87%)',
      200: 'hsl(162 78% 77%)',
      300: 'hsl(162 72% 65%)',
      400: 'hsl(162 68% 54%)',
      500: 'hsl(162 73% 46%)',
      600: 'hsl(162 82% 40%)',
      700: 'hsl(162 87% 35%)',
      800: 'hsl(162 88% 30%)',
      900: 'hsl(162 88% 26%)',
    },
    green: {
      50: 'hsl(131 67% 95%)',
      100: 'hsl(128 76% 90%)',
      200: 'hsl(128 71% 82%)',
      300: 'hsl(129 68% 73%)',
      400: 'hsl(130 61% 64%)',
      500: 'hsl(130 57% 56%)',
      600: 'hsl(131 50% 50%)',
      700: 'hsl(131 53% 46%)',
      800: 'hsl(131 54% 40%)',
      900: 'hsl(132 52% 35%)',
    },
    lime: {
      50: 'hsl(79 81% 94%)',
      100: 'hsl(80 83% 88%)',
      200: 'hsl(81 81% 80%)',
      300: 'hsl(82 75% 69%)',
      400: 'hsl(83 73% 59%)',
      500: 'hsl(84 69% 51%)',
      600: 'hsl(85 74% 45%)',
      700: 'hsl(85 79% 40%)',
      800: 'hsl(86 84% 36%)',
      900: 'hsl(85 84% 32%)',
    },
    yellow: {
      50: 'hsl(50 100% 93%)',
      100: 'hsl(49 100% 87%)',
      200: 'hsl(49 100% 80%)',
      300: 'hsl(48 100% 70%)',
      400: 'hsl(47 100% 62%)',
      500: 'hsl(45 97% 54%)',
      600: 'hsl(42 96% 50%)',
      700: 'hsl(39 100% 48%)',
      800: 'hsl(35 100% 47%)',
      900: 'hsl(31 100% 45%)',
    },
    orange: {
      50: 'hsl(34 100% 95%)',
      100: 'hsl(33 100% 90%)',
      200: 'hsl(33 100% 83%)',
      300: 'hsl(32 100% 74%)',
      400: 'hsl(31 100% 65%)',
      500: 'hsl(29 100% 58%)',
      600: 'hsl(27 98% 54%)',
      700: 'hsl(24 94% 50%)',
      800: 'hsl(21 90% 48%)',
      900: 'hsl(17 87% 45%)',
    },
  },
  spacing: {
    px: '1px',
    0: '0px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    11: '2.75rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
  },
  fontFamily: {
    sans: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    serif: 'ui-serif Georgia Cambria "Times New Roman" Times serif',
    mono: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  fontSize: {
    xs: {
      size: '0.75rem',
      lineHeight: '1rem',
    },
    sm: {
      size: '0.875rem',
      lineHeight: '1.25rem',
    },
    base: {
      size: '1rem',
      lineHeight: '1.5rem',
    },
    lg: {
      size: '1.125rem',
      lineHeight: '1.75rem',
    },
    xl: {
      size: '1.25rem',
      lineHeight: '1.75rem',
    },
    '2xl': {
      size: '1.5rem',
      lineHeight: '2rem',
    },
    '3xl': {
      size: '1.875rem',
      lineHeight: '2.25rem',
    },
    '4xl': {
      size: '2.25rem',
      lineHeight: '2.5rem',
    },
    '5xl': {
      size: '3rem',
      lineHeight: '1',
    },
    '6xl': {
      size: '3.75rem',
      lineHeight: '1',
    },
    '7xl': {
      size: '4.5rem',
      lineHeight: '1',
    },
    '8xl': {
      size: '6rem',
      lineHeight: '1',
    },
    '9xl': {
      size: '8rem',
      lineHeight: '1',
    },
  },
  fontWeight: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
};
