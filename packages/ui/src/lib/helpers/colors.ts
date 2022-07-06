import { TinyColor } from '@ctrl/tinycolor';

export const getColor = (variableName: string, color: string, alpha?: number): string => {
  const { h, s, l, a = 1 } = new TinyColor(color).toHsl();
  const hue = h.toFixed();
  const saturation = (s * 100).toFixed();
  const lightness = (l * 100).toFixed();
  const opacity = (alpha ?? a).toPrecision(2);

  return `
    --${variableName}-opacity: ${opacity};
    --${variableName}: hsl(${hue}deg ${saturation}% ${lightness}% / var(--${variableName}-opacity));
  `;
};
