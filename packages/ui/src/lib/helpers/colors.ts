import { TinyColor } from '@ctrl/tinycolor';
import { css } from '@emotion/react';

const getColor = (
  property: 'background-color' | 'color',
  variableName: 'af-bg-opacity' | 'af-text-opacity',
  color: string,
  alpha?: number,
) => {
  const { h, s, l, a = 1 } = new TinyColor(color).toHsl();

  return css`
    --${variableName}: ${alpha ?? a};
    ${property}: hsl(${h}deg ${s}% ${l}% / var(--${variableName}));
  `;
};

export const getBackgroundColor = (color: string, alpha?: number) =>
  getColor('background-color', 'af-bg-opacity', color, alpha);

export const getTextColor = (color: string, alpha?: number) => getColor('color', 'af-text-opacity', color, alpha);
