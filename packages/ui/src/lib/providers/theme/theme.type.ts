interface Viewport {
  screens: {
    sm: `${number}px`;
    md: `${number}px`;
    lg: `${number}px`;
    xl: `${number}px`;
    '2xl': `${number}px`;
  };
}

interface FontSize {
  size: string;
  lineHeight: string;
}

interface Typography {
  fontFamily: {
    sans: string;
    serif: string;
    mono: string;
    [fontFamily: string]: string;
  };
  fontSize: {
    xs: FontSize;
    sm: FontSize;
    base: FontSize;
    lg: FontSize;
    xl: FontSize;
    '2xl': FontSize;
    '3xl': FontSize;
    '4xl': FontSize;
    '5xl': FontSize;
    '6xl': FontSize;
    '7xl': FontSize;
    '8xl': FontSize;
    '9xl': FontSize;
    [fontSize: string]: FontSize;
  };
  fontWeight: {
    thin: number;
    extralight: number;
    light: number;
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
    extrabold: number;
    black: number;
    [fontWeight: string]: number;
  };
}

export interface ThemeColor {
  0: string;
  10: string;
  20: string;
  30: string;
  40: string;
  50: string;
  60: string;
  70: string;
  80: string;
  90: string;
  95: string;
  99: string;
  100: string;
}

interface ColorSystem {
  colors: {
    inherit: 'inherit';
    current: 'currentColor';
    transparent: 'transparent';
    black: string;
    white: string;
    neutral: ThemeColor;
    primary: ThemeColor;
    secondary: ThemeColor;
    tertiary: ThemeColor;
    danger: ThemeColor;
    success: ThemeColor;
    [color: string]: string | ThemeColor;
  };
}

type __Theme__ = Viewport &
  Typography &
  ColorSystem & {
    spacing: {
      px: '1px';
      0: '0px';
      0.5: string;
      1: string;
      1.5: string;
      2: string;
      2.5: string;
      3: string;
      3.5: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
      10: string;
      11: string;
      12: string;
      14: string;
      16: string;
      20: string;
      24: string;
      28: string;
      32: string;
      36: string;
      40: string;
      44: string;
      48: string;
      52: string;
      56: string;
      60: string;
      64: string;
      72: string;
      80: string;
      96: string;
      [space: string]: string;
    };
  };

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends __Theme__ {}
}

export type AnyflightUiTheme = import('@emotion/react').Theme;
