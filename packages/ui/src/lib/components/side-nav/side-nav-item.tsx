import { css } from '@emotion/react';
import { AnchorHTMLAttributes, MouseEvent, MouseEventHandler } from 'react';

import { AnyflightIcon, Icon } from '@anyflight/icons';
import { CSSUnit, isFunction } from '@anyflight/utils';

import { useAnyflightUiConfig, useAnyflightUiTheme } from '../../hooks';

type SideNavItemProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'href' | 'onClick'> & {
  children: string;
  icon: `${AnyflightIcon}`;
  iconSize?: [CSSUnit, CSSUnit] | CSSUnit;
  iconLabel?: string;
  active?: boolean;
  expanded?: boolean;
} & ({ href: string; onClick?: never } | { href?: never; onClick: MouseEventHandler });

export const SideNavItem = ({
  children: label,
  href,
  onClick,
  icon,
  iconSize = 16,
  iconLabel,
  active = false,
  expanded = true,
  className,
  ...props
}: SideNavItemProps) => {
  const { prefix } = useAnyflightUiConfig();
  const theme = useAnyflightUiTheme();

  const clickHandler = isFunction(onClick)
    ? (event: MouseEvent) => {
        event.preventDefault();
        return onClick(event);
      }
    : undefined;

  return (
    <a
      className="side-nav-list-item-link"
      css={css`
        :where(.side-nav-list-item-link) {
          inline-size: 100%;
          block-size: 2rem;
          padding-inline: 0.375rem;
          padding-block: 0.125rem;
          display: inline-flex;
          gap: 0.375rem;
          justify-content: flex-start;
          align-items: center;
          background-color: var(--${prefix}-side-nav-bg);
          box-shadow: var(--${prefix}-side-nav-box-shadow);
          font-size: var(--${prefix}-side-nav-font-size);
          font-weight: var(--${prefix}-side-nav-font-weight);
          text-decoration: none;
          text-shadow: 0 1px rgba(0, 0, 0, 0.45);
          color: var(--${prefix}-side-nav-color);
          user-select: none;
          cursor: pointer;
        }

        :where(.side-nav-list-item-link:is(:focus-visible)) {
          --${prefix}-side-nav-bg: var(--${prefix}-side-nav-hover-bg, --${prefix}-side-nav-bg);
          --${prefix}-side-nav-color: var(--${prefix}-side-nav-hover-color, --${prefix}-side-nav-color);
          outline: 0;
        }

        :where(.side-nav-list-item-link:is(:hover)) {
          --${prefix}-side-nav-bg: var(--${prefix}-side-nav-hover-bg, --${prefix}-side-nav-bg);
          --${prefix}-side-nav-color: var(--${prefix}-side-nav-hover-color, --${prefix}-side-nav-color);
        }


      `}
      href={href}
      onClick={clickHandler}
      title={label}
      {...props}
    >
      <span
        className="side-nav-list-item-link__icon"
        css={css`
          .side-nav-list-item-link__icon {
            display: inline-flex;
            justify-content: center;
            align-items: center;
          }
        `}
      >
        <Icon type={icon} title={!expanded ? label : undefined} />
      </span>

      {expanded && (
        <span
          className="side-nav-list-item-link__label"
          css={css`
            :where(.side-nav-list-item-link__label) {
              block-size: 1rem;
              overflow: hidden visible;
              line-height: 1;
              text-overflow: ellipsis;
              white-space: nowrap;
              vertical-align: baseline;
            }
          `}
        >
          {label}
        </span>
      )}
    </a>
  );
};
