/** @jsxImportSource @emotion/react */
import classnames from 'classnames';
import { HTMLAttributes, MouseEvent, ReactNode, forwardRef, useCallback } from 'react';

import { isFunction } from '@anyflight/utils';

import { useAnyflightUiStyles } from '../../internals';
import { ButtonSize, ButtonStyle, ButtonVariant } from './button.constants';
import { buttonBaseStyles, buttonSizeStyles, buttonVariantStyles } from './button.styles';

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
    const applyStyles = useAnyflightUiStyles();

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
        css={applyStyles([buttonBaseStyles, buttonVariantStyles, buttonSizeStyles])}
        className={classNames}
        onClick={handleClick}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

BaseButton.displayName = 'BaseButton';
