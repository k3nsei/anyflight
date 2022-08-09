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
    neutral: {
      0: '#000000',
      10: '#1b1b23',
      20: '#303038',
      30: '#46464f',
      40: '#5e5d67',
      50: '#777680',
      60: '#91909a',
      70: '#abaab4',
      80: '#c7c5d0',
      90: '#e3e1ec',
      95: '#f2effa',
      99: '#fffbff',
      100: '#ffffff',
    },
    primary: {
      0: '#000000',
      10: '#000767',
      20: '#0011a1',
      30: '#1d2dc7',
      40: '#3c4bde',
      50: '#5766f8',
      60: '#7985ff',
      70: '#9ba4ff',
      80: '#bdc2ff',
      90: '#dfe0ff',
      95: '#f1efff',
      99: '#fffbff',
      100: '#ffffff',
    },
    secondary: {
      0: '#000000',
      10: '#00201b',
      20: '#00382f',
      30: '#005045',
      40: '#006b5c',
      50: '#008675',
      60: '#00a38e',
      70: '#00c1a8',
      80: '#40ddc3',
      90: '#65fadf',
      95: '#b6ffee',
      99: '#f3fffa',
      100: '#ffffff',
    },
    tertiary: {
      0: '#000000',
      10: '#22005d',
      20: '#3a0092',
      30: '#5311c4',
      40: '#6c39dc',
      50: '#8556f7',
      60: '#9e79ff',
      70: '#b69bff',
      80: '#cfbcff',
      90: '#e9ddff',
      95: '#f6eeff',
      99: '#fffbff',
      100: '#ffffff',
    },
    danger: {
      0: 'rgb(0, 0, 0)',
      10: 'rgb(65, 0, 2)',
      20: 'rgb(105, 0, 5)',
      30: 'rgb(147, 0, 10)',
      40: 'rgb(186, 26, 26)',
      50: 'rgb(222, 55, 48)',
      60: 'rgb(255, 84, 73)',
      70: 'rgb(255, 137, 125)',
      80: 'rgb(255, 180, 171)',
      90: 'rgb(255, 218, 214)',
      95: 'rgb(255, 237, 234)',
      99: 'rgb(255, 251, 255)',
      100: 'rgb(255, 255, 255)',
    },
    success: {
      0: 'rgb(0, 0, 0)',
      10: 'rgb(1, 34, 0)',
      20: 'rgb(4, 57, 0)',
      30: 'rgb(8, 83, 0)',
      40: 'rgb(13, 110, 0)',
      50: 'rgb(19, 138, 0)',
      60: 'rgb(25, 168, 0)',
      70: 'rgb(61, 196, 38)',
      80: 'rgb(92, 225, 66)',
      90: 'rgb(121, 255, 93)',
      95: 'rgb(203, 255, 183)',
      99: 'rgb(247, 255, 238)',
      100: 'rgb(255, 255, 255)',
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