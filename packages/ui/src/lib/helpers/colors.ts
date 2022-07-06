import { TinyColor } from '@ctrl/tinycolor';

export const toRgbValuesString = (color: string) => {
  const { r, g, b } = new TinyColor(color).toRgb();
  return `${r}, ${g}, ${b}`;
};
