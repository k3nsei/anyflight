import { css } from '@emotion/react';
import classnames from 'classnames';
import { HTMLAttributes, MouseEvent, ReactNode, forwardRef, useCallback } from 'react';

import { isFunction } from '@anyflight/utils';

import { getColor } from '../../helpers';
import { useAnyflightUiConfig, useAnyflightUiDarkMode, useAnyflightUiTheme } from '../../hooks';
import { ButtonSize, ButtonStyle, ButtonVariant } from './button.constants';

export interface BaseButtonProps {
  /**
   * The variant of the button.
   */
  variant?: `${ButtonVariant}`;

  /**
   * The style of the button.
   */
  style?: `${ButtonStyle}`;

  /**
   * The size of the button.
   */
  size?: `${ButtonSize}`;

  /**
   * The content of the button.
   */
  children: ReactNode;
}

export const BaseButton = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  BaseButtonProps & Omit<HTMLAttributes<HTMLElement>, 'children'> & { component?: 'a' | 'button' }
>(
  (
    {
      component: Component = 'button',
      className,
      variant = ButtonVariant.DEFAULT,
      style = ButtonStyle.FILL,
      size = ButtonSize.MEDIUM,
      onClick,
      children,
      ...props
    },
    ref,
  ) => {
    const { prefix } = useAnyflightUiConfig();
    const { darkModeEnabled } = useAnyflightUiDarkMode();
    const theme = useAnyflightUiTheme();

    const classNames = classnames('button', `variant-${variant}`, `style-${style}`, `size-${size}`, className);

    const handleClick = useCallback(
      (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
        if (isFunction(onClick)) {
          onClick(event);
        }
      },
      [onClick],
    );

    return (
      <Component
        ref={ref as any}
        className={classNames}
        onClick={handleClick}
        css={css`
          &:where(.button) {
            --${prefix}-button-margin-x: ${theme.spacing['0']};
            --${prefix}-button-margin-y: ${theme.spacing['0']};

            display: inline-block;
            margin-inline: var(--${prefix}-button-margin-x);
            margin-block: var(--${prefix}-button-margin-y);
            padding-inline: var(--${prefix}-button-padding-x);
            padding-block: var(--${prefix}-button-padding-y);
            background-color: var(--${prefix}-button-background-color);
            border: 2px solid var(--${prefix}-button-border-color);
            border-radius: 100vmax;
            text-decoration: none;
            color: var(--${prefix}-button-color);
            user-select: none;
            cursor: pointer;
          }

          &:where(.button:is(:hover, :focus-visible)) {
            background-color: var(--${prefix}-button-hover-background-color);
            border-color: var(--${prefix}-button-hover-border-color);
            color: var(--${prefix}-button-hover-color);
          }

          &:where(.button:is(:active)) {
            background-color: var(--${prefix}-button-active-background-color);
            border-color: var(--${prefix}-button-active-border-color);
            color: var(--${prefix}-button-active-color);
          }

          &:where(.button:is(:focus)) {
            outline: 0;
          }

          &:where(.button:is(:focus-visible)) {
            border-color: ${darkModeEnabled ? theme.colors.black : theme.colors.white};
            box-shadow: 0 0 0 2px ${darkModeEnabled ? theme.colors.white : theme.colors.black};
          }

          &:where(.button:is(:disabled)) {
            opacity: 0.5;
            pointer-events: none;
            cursor: default;
          }

          &:where(.button-link:is(.style-${ButtonStyle.TEXT})) {
            text-decoration: underline;
          }

          ${Object.values(ButtonVariant).map((variant) => {
            const { colors } = theme;
            const { transparent, neutral, [variant]: color = neutral } = colors;

            return css`
                &:where(.button:is(.variant-${variant})) {
                  --${prefix}-button-background-color: ${darkModeEnabled ? color['80'] : color['40']};
                  --${prefix}-button-border-color: ${darkModeEnabled ? color['80'] : color['40']};
                  --${prefix}-button-color: ${darkModeEnabled ? color['0'] : color['100']};

                  --${prefix}-button-hover-background-color: ${darkModeEnabled ? color['70'] : color['30']};
                  --${prefix}-button-hover-border-color: ${darkModeEnabled ? color['70'] : color['30']};
                  --${prefix}-button-hover-color: ${darkModeEnabled ? color['0'] : color['100']};

                  --${prefix}-button-active-background-color: ${darkModeEnabled ? color['60'] : color['20']};
                  --${prefix}-button-active-border-color: ${darkModeEnabled ? color['60'] : color['20']};
                  --${prefix}-button-active-color: ${darkModeEnabled ? color['0'] : color['100']};
                }

                &:where(.button:is(.variant-${variant}.style-${ButtonStyle.OUTLINE})) {
                  --${prefix}-button-background-color: ${transparent};
                  --${prefix}-button-border-color: ${darkModeEnabled ? color['80'] : color['40']};
                  --${prefix}-button-color: ${darkModeEnabled ? color['80'] : color['40']};

                  ${getColor(
                    `${prefix}-button-hover-background-color`,
                    darkModeEnabled ? color['80'] : color['40'],
                    0.1,
                  )};
                  --${prefix}-button-hover-border-color: ${darkModeEnabled ? color['80'] : color['40']};
                  --${prefix}-button-hover-color: ${darkModeEnabled ? color['80'] : color['40']};

                  ${getColor(
                    `${prefix}-button-active-background-color`,
                    darkModeEnabled ? color['80'] : color['40'],
                    0.2,
                  )};
                  --${prefix}-button-active-border-color: ${darkModeEnabled ? color['80'] : color['40']};
                  --${prefix}-button-active-color: ${darkModeEnabled ? color['80'] : color['40']};
                }

                &:where(.button:is(.variant-${variant}.style-${ButtonStyle.TEXT})) {
                  --${prefix}-button-background-color: ${transparent};
                  --${prefix}-button-border-color: ${transparent};
                  --${prefix}-button-color: ${darkModeEnabled ? color['80'] : color['40']};

                  ${getColor(
                    `${prefix}-button-hover-background-color`,
                    darkModeEnabled ? color['80'] : color['40'],
                    0.1,
                  )};
                  --${prefix}-button-hover-border-color: ${transparent};
                  --${prefix}-button-hover-color: ${darkModeEnabled ? color['80'] : color['40']};

                  ${getColor(
                    `${prefix}-button-active-background-color`,
                    darkModeEnabled ? color['80'] : color['40'],
                    0.2,
                  )};
                  --${prefix}-button-active-border-color: ${transparent};
                  --${prefix}-button-active-color: ${darkModeEnabled ? color['80'] : color['40']};
                }
              `;
          })};

          &:where(.button:is(.size-${ButtonSize.SMALL})) {
            --${prefix}-button-padding-x: ${theme.spacing['0.5']};
            --${prefix}-button-padding-y: ${theme.spacing['0.5']};
          }

          &:where(.button:is(.size-${ButtonSize.MEDIUM})) {
            --${prefix}-button-padding-x: ${theme.spacing['2']};
            --${prefix}-button-padding-y: ${theme.spacing['1']};
          }

          &:where(.button:is(.size-${ButtonSize.LARGE})) {
            --${prefix}-button-padding-x: ${theme.spacing['4']};
            --${prefix}-button-padding-y: ${theme.spacing['2']};
          }
        }
        `}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

BaseButton.displayName = 'BaseButton';
