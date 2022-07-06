/** @jsxImportSource @emotion/react */
import classnames from 'classnames';
import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react';

import { buttonStyles } from './button.styles';

export enum ButtonVariant {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  ACCENT = 'accent',
  SUCCESS = 'success',
  DANGER = 'danger',
  WARNING = 'warning',
  INFO = 'info',
}

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export enum ButtonType {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The content of the button.
   */
  children: ReactNode;

  /**
   * The variant of the button.
   */
  variant?: `${ButtonVariant}`;

  /**
   * The size of the button.
   */
  size?: `${ButtonSize}`;

  /**
   * The type of the button.
   */
  type?: `${ButtonType}`;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = '',
      variant = ButtonVariant.DEFAULT,
      size = ButtonSize.MEDIUM,
      type = ButtonType.BUTTON,
      onClick,
      ...props
    },
    ref,
  ) => {
    const classNames = classnames('btn', `btn--${variant}`, `btn--${size}`, className);

    return <button ref={ref} className={classNames} css={buttonStyles} onClick={onClick} type={type} {...props} />;
  },
);
