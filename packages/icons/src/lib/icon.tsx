import type { FC, SVGProps } from 'react';
import { LazyExoticComponent, Suspense, lazy } from 'react';

export enum Icon {
  BETAFLIGHT = 'betaflight',
  CONFIG = 'config',
  FIRMWARE_FLASHER = 'firmware-flasher',
  HELP = 'help',
  SCROLL = 'scroll',
}

export type AnyflightIconIconType = `${Icon}`;

export type AnyflightIconComponent = FC<SVGProps<SVGSVGElement> & { title?: string | undefined }>;

const iconComponentFactoryList = [
  [Icon.BETAFLIGHT, () => import('./icons/cf_icon_betaflight.svg').then((m) => m.ReactComponent)],
  [Icon.CONFIG, () => import('./icons/cf_icon_config.svg').then((m) => m.ReactComponent)],
  [Icon.FIRMWARE_FLASHER, () => import('./icons/cf_icon_flasher.svg').then((m) => m.ReactComponent)],
  [Icon.HELP, () => import('./icons/cf_icon_help.svg').then((m) => m.ReactComponent)],
  [Icon.SCROLL, () => import('./icons/scroll.svg').then((m) => m.ReactComponent)],
] as const;

const iconComponentList = new Map<AnyflightIconIconType, LazyExoticComponent<AnyflightIconComponent>>(
  iconComponentFactoryList.map(([iconName, iconComponentFactory]) => [
    iconName,
    lazy(() => iconComponentFactory().then((iconComponent) => ({ default: iconComponent }))),
  ]),
);

export interface AnyflightIconProps {
  type: AnyflightIconIconType;
  size?: [number, number] | number;
  title?: string;
  ariaLabel?: string;
  ariaHidden?: boolean;
}

export const AnyflightIcon = ({ type, size, title, ariaLabel, ariaHidden }: AnyflightIconProps) => {
  const IconComponent = iconComponentList.get(type as Icon);

  const [width, height] = Array.isArray(size) ? size : [size, size];

  ariaLabel = ariaLabel ?? title;
  ariaHidden = ariaHidden ?? !ariaLabel;

  return IconComponent ? (
    <Suspense fallback={<i className="icon visually-hidden">{ariaLabel ?? type}</i>}>
      <IconComponent width={width} height={height} title={title} aria-label={ariaLabel} aria-hidden={ariaHidden} />
    </Suspense>
  ) : null;
};
