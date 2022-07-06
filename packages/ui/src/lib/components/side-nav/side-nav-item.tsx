/** @jsxImportSource @emotion/react */
import { AnchorHTMLAttributes, MouseEvent, MouseEventHandler } from 'react';

import { AnyflightIcon, AnyflightIconIconType } from '@anyflight/icons';
import { isFunction } from '@anyflight/utils';

type SideNavItemProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'href' | 'onClick'> & {
  children: string;
  icon: AnyflightIconIconType;
  iconLabel?: string;
  active?: boolean;
  collapsed?: boolean;
} & ({ href: string; onClick?: never } | { href?: never; onClick: MouseEventHandler });

export const SideNavItem = ({
  children: label,
  href,
  onClick,
  icon,
  active = false,
  collapsed = false,
  className,
  ...props
}: SideNavItemProps) => {
  const clickHandler = isFunction(onClick)
    ? (event: MouseEvent) => {
        event.preventDefault();
        return onClick(event);
      }
    : undefined;

  return (
    <a className="side-nav-list-item-link" href={href} onClick={clickHandler} title={label} {...props}>
      <span className="side-nav-list-item-link__icon">
        <AnyflightIcon type={icon} title={collapsed ? label : undefined} />
      </span>
      {!collapsed && <span className="side-nav-list-item-link__label">{label}</span>}
    </a>
  );
};
