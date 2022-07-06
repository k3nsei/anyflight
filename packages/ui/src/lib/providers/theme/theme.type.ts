export interface AnyflightUiViewport {
  screens: {
    sm: `${number}px`;
    md: `${number}px`;
    lg: `${number}px`;
    xl: `${number}px`;
    '2xl': `${number}px`;
  };
}

export interface AnyflightUiFontSize {
  size: string;
  lineHeight: string;
}

export interface AnyflightUiTypography {
  fontFamily: {
    sans: string;
    serif: string;
    mono: string;
    [fontFamily: string]: string;
  };
  fontSize: {
    xs: AnyflightUiFontSize;
    sm: AnyflightUiFontSize;
    base: AnyflightUiFontSize;
    lg: AnyflightUiFontSize;
    xl: AnyflightUiFontSize;
    '2xl': AnyflightUiFontSize;
    '3xl': AnyflightUiFontSize;
    '4xl': AnyflightUiFontSize;
    '5xl': AnyflightUiFontSize;
    '6xl': AnyflightUiFontSize;
    '7xl': AnyflightUiFontSize;
    '8xl': AnyflightUiFontSize;
    '9xl': AnyflightUiFontSize;
    [fontSize: string]: AnyflightUiFontSize;
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

export interface AnyflightUiThemeColor {
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

export interface AnyflightUiColorSystem {
  colors: {
    inherit: 'inherit';
    current: 'currentColor';
    transparent: 'transparent';
    black: string;
    white: string;
    neutral: AnyflightUiThemeColor;
    primary: AnyflightUiThemeColor;
    secondary: AnyflightUiThemeColor;
    tertiary: AnyflightUiThemeColor;
    danger: AnyflightUiThemeColor;
    success: AnyflightUiThemeColor;
    [color: string]: string | AnyflightUiThemeColor;
  };
}

export type __Theme__ = AnyflightUiViewport &
  AnyflightUiTypography &
  AnyflightUiColorSystem & {
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
