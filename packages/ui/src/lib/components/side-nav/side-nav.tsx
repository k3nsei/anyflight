import { css } from '@emotion/react';
import classnames from 'classnames';
import { Children, ComponentProps, HTMLAttributes, ReactElement, ReactNode, cloneElement } from 'react';

import { isObject } from '@anyflight/utils';

import { useAnyflightUiConfig, useAnyflightUiTheme } from '../../hooks';
import { AnyflightUiDarkModeProvider } from '../../providers';
import { SideNavItem } from './side-nav-item';

interface SideNavProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  expanded?: boolean;
}

const isSideNavItem = (node: ReactNode): node is ReactElement<ComponentProps<typeof SideNavItem>, typeof SideNavItem> =>
  isObject(node) && 'type' in node && node.type === SideNavItem;

export const SideNav = ({ expanded = true, className, children }: SideNavProps) => {
  const { prefix } = useAnyflightUiConfig();
  const theme = useAnyflightUiTheme();

  const classNames = classnames('side-nav', { 'is-expanded': expanded, 'is-collapsed': !expanded }, className);

  return (
    <AnyflightUiDarkModeProvider force={true}>
      <nav
        className={classNames}
        css={css`
          &:where(.side-nav) {
            --${prefix}-side-nav-bg: #2e2e2e;
            --${prefix}-side-nav-hover-bg: rgba(128, 128, 128, 0.5);
            --${prefix}-side-nav-box-shadow-start: inset 0 1px 0 0 #393939;
            --${prefix}-side-nav-box-shadow-end: inset 0 -1px 0 0 #202020;
            --${prefix}-side-nav-box-shadow: var(--${prefix}-side-nav-box-shadow-start), var(--${prefix}-side-nav-box-shadow-end);
            --${prefix}-side-nav-color: #999;
            --${prefix}-side-nav-hover-color: #fff;

            inline-size: var(--${prefix}-side-nav-inline-size, clamp(2.25rem, 100%, 12.5rem));
            block-size: 100%;
            margin: 0;
            padding: 0;
            overflow: hidden auto;
            display: block;
            background-color: var(--${prefix}-side-nav-bg);
            border-right: 4px solid #ffbb00;
            font-family: var(--${prefix}-side-nav-font-family, ${theme.fontFamily.sans});
            font-size: var(--${prefix}-side-nav-font-size, 0.8125rem);
            font-weight: var(--${prefix}-side-nav-font-weight, ${theme.fontWeight.normal});
            transition: inline-size 0.2s;
            isolation: isolate;
          }

          &:where(.side-nav:is(.is-collapsed)) {
            inline-size: var(--${prefix}-side-nav-collapsed-inline-size, 2.25rem);
          }
        `}
      >
        <ul
          className="side-nav-list"
          css={css`
            &:where(.side-nav-list) {
              margin: 0;
              padding: 0;
              display: flex;
              flex-flow: column nowrap;
              list-style: none;
            }
          `}
        >
          {Children.map(children, (child) => {
            if (!isSideNavItem(child)) return null;

            const { active = false, className } = child.props || {};

            const classNames = classnames('side-nav-list-item', { 'is-active': active }, className);

            return (
              <li
                className={classNames}
                css={css`
                  &:where(.side-nav-list-item) {
                    display: block;
                    flex: 1 1 auto;
                  }

                  &:where(.side-nav-list-item:is(:first-of-type)) {
                    --${prefix}-side-nav-box-shadow: var(--${prefix}-side-nav-box-shadow-end);
                  }

                  &:where(.side-nav-list-item:is(:last-of-type)) {
                    --${prefix}-side-nav-box-shadow: var(--${prefix}-side-nav-box-shadow-start);
                  }

                  &:where(.side-nav-list-item:is(:first-of-type:last-of-type)) {
                    --${prefix}-side-nav-box-shadow: none;
                  }

                  &:where(.side-nav-list-item:is(.is-active)) {
                    --${prefix}-side-nav-bg: #ffbb00;
                    --${prefix}-side-nav-hover-bg: #ffd500;
                    --${prefix}-side-nav-box-shadow: none;
                    --${prefix}-side-nav-color: ${theme.colors.black};
                    --${prefix}-side-nav-hover-color: ${theme.colors.black};
                  }
                `}
              >
                {cloneElement(child, { expanded })}
              </li>
            );
          })}
        </ul>
      </nav>
    </AnyflightUiDarkModeProvider>
  );
};
