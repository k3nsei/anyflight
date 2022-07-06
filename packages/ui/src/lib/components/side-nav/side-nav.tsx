/** @jsxImportSource @emotion/react */
import classnames from 'classnames';
import { Children, ComponentProps, HTMLAttributes, ReactElement, ReactNode, cloneElement } from 'react';

import { isObject } from '@anyflight/utils';

import { AnyflightUiDarkModeProvider } from '../../providers';
import { SideNavItem } from './side-nav-item';
import { sideNavStyles } from './side-nav.styles';

interface SideNavProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  collapsed?: boolean;
}

const isSideNavItem = (node: ReactNode): node is ReactElement<ComponentProps<typeof SideNavItem>, typeof SideNavItem> =>
  isObject(node) && 'type' in node && node.type === SideNavItem;

export const SideNav = ({ collapsed = false, className, children }: SideNavProps) => {
  const classNames = classnames('side-nav', { 'side-nav--collapsed': collapsed }, className);

  return (
    <AnyflightUiDarkModeProvider force={true}>
      <nav className={classNames} css={sideNavStyles}>
        <ul className="side-nav-list">
          {Children.map(children, (child) => {
            if (!isSideNavItem(child)) return null;

            const { active = false, className } = child.props || {};

            const classNames = classnames('side-nav-list-item', { 'side-nav-list-item--active': active }, className);

            return <li className={classNames}>{cloneElement(child, { collapsed })}</li>;
          })}
        </ul>
      </nav>
    </AnyflightUiDarkModeProvider>
  );
};
