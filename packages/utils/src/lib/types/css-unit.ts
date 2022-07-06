type AbsoluteUnits = 'px' | 'cm' | 'mm' | 'Q' | 'in' | 'pc' | 'pt';

type RelativeUnits = '%' | 'rem' | 'em' | 'vw' | 'vh' | 'vmin' | 'vmax';

export type CSSUnit =
  | number
  | `${number}${AbsoluteUnits}`
  | `.${number}${AbsoluteUnits}`
  | `${number}.${number}${AbsoluteUnits}`
  | `${number}${RelativeUnits}`
  | `.${number}${RelativeUnits}`
  | `${number}.${number}${RelativeUnits}`;
