import { css } from '@emotion/react';
import classnames from 'classnames';
import type { FC, HTMLAttributes, SVGProps } from 'react';
import { LazyExoticComponent, Suspense, lazy } from 'react';

import { CSSUnit, isNil, toCssUnit } from '@anyflight/utils';

export enum AnyflightIcon {
  BETAFLIGHT = 'betaflight',
  CONFIG = 'config',
  FIRMWARE_FLASHER = 'firmware-flasher',
  HELP = 'help',
  SCROLL = 'scroll',
}

const FACTORIES = [
  [AnyflightIcon.BETAFLIGHT, () => import('../assets/cf_icon_betaflight.svg').then((m) => m.ReactComponent)],
  [AnyflightIcon.CONFIG, () => import('../assets/cf_icon_config.svg').then((m) => m.ReactComponent)],
  [AnyflightIcon.FIRMWARE_FLASHER, () => import('../assets/cf_icon_flasher.svg').then((m) => m.ReactComponent)],
  [AnyflightIcon.HELP, () => import('../assets/cf_icon_help.svg').then((m) => m.ReactComponent)],
  [AnyflightIcon.SCROLL, () => import('../assets/scroll.svg').then((m) => m.ReactComponent)],
] as const;

const COMPONENTS = new Map<
  `${AnyflightIcon}`,
  LazyExoticComponent<FC<SVGProps<SVGSVGElement> & { title?: string | undefined }>>
>(
  FACTORIES.map(([iconName, factory]) => [
    iconName,
    lazy(() => factory().then((Component) => ({ default: Component }))),
  ]),
);

export interface IconPlaceholderProps {
  children: string;
  prefix?: string;
}

export const IconPlaceholder = ({ prefix, children }: IconPlaceholderProps) => {
  return (
    <span
      className={`${prefix ? `${prefix}-` : ''}icon__placeholder`}
      css={css`
        inline-size: 1px;
        block-size: 1px;
        margin: -1px;
        padding: 0;
        position: absolute;
        overflow: hidden;
        border: 0;
        white-space: nowrap;
        clip: rect(0, 0, 0, 0);
      `}
      children={children}
    />
  );
};

export interface AnyflightIconProps extends HTMLAttributes<HTMLElement> {
  type: `${AnyflightIcon}`;
  size?: [CSSUnit, CSSUnit] | CSSUnit;
  prefix?: string;
}

export const Icon = ({
  type,
  size,
  prefix,
  title,
  className,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}: AnyflightIconProps) => {
  const Component = COMPONENTS.get(type as AnyflightIcon);

  const isSquare = !Array.isArray(size);
  const [width, height] = isSquare ? [size, size] : size;

  const classNames = classnames(`${prefix ? `${prefix}-` : ''}icon`, className);

  ariaLabel = ariaLabel ?? title;
  ariaHidden = ariaHidden ?? !ariaLabel;

  return Component ? (
    <i
      className={classNames}
      css={css`
        inline-size: ${!isSquare && !isNil(width) ? toCssUnit(width as CSSUnit) : 'auto'};
        block-size: ${!isSquare || !isNil(height) ? toCssUnit(height as CSSUnit) : '1rem'};
        aspect-ratio: ${isSquare ? '1/1' : 'unset'};
        margin: 0;
        padding: 0;
        overflow: hidden;
        display: inline-flex;
        align-content: center;
        justify-content: center;
      `}
    >
      <Suspense fallback={<IconPlaceholder prefix={prefix} children={ariaLabel ?? type} />}>
        <Component title={title} aria-label={ariaLabel} aria-hidden={ariaHidden} />
      </Suspense>
    </i>
  ) : null;
};
