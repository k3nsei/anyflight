import type { FC, SVGProps } from 'react';

import { ReactComponent as BetaflightIcon } from './icons/cf_icon_betaflight.svg';
import { ReactComponent as ConfigIcon } from './icons/cf_icon_config.svg';
import { ReactComponent as FirmwareFlasherIcon } from './icons/cf_icon_flasher.svg';
import { ReactComponent as HelpIcon } from './icons/cf_icon_help.svg';
import { ReactComponent as ScrollIcon } from './icons/scroll.svg';

export enum Icons {
  BETAFLIGHT = 'betaflight',
  CONFIG = 'config',
  FIRMWARE_FLASHER = 'firmware-flasher',
  HELP = 'help',
  SCROLL = 'scroll',
}

export type IconType = `${Icons}`;

const iconsList = new Map<IconType, FC<SVGProps<SVGSVGElement> & { title?: string | undefined }>>([
  [Icons.BETAFLIGHT, BetaflightIcon],
  [Icons.CONFIG, ConfigIcon],
  [Icons.FIRMWARE_FLASHER, FirmwareFlasherIcon],
  [Icons.HELP, HelpIcon],
  [Icons.SCROLL, ScrollIcon],
]);

interface IconProps {
  type: IconType;
  size?: [number, number] | number;
  title?: string;
  ariaLabel?: string;
  ariaHidden?: boolean;
}

export const Icon = ({ type, size, title, ariaLabel, ariaHidden }: IconProps) => {
  const IconComponent = iconsList.get(type as Icons);

  const [width, height] = Array.isArray(size) ? size : [size, size];

  ariaLabel = ariaLabel ?? title;
  ariaHidden = ariaHidden ?? !ariaLabel;

  return IconComponent ? (
    <IconComponent width={width} height={height} title={title} aria-label={ariaLabel} aria-hidden={ariaHidden} />
  ) : null;
};
