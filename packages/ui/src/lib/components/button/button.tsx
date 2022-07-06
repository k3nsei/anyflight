/** @jsxImportSource @emotion/react */
import classnames from 'classnames';
import { nanoid } from 'nanoid';
import { ButtonHTMLAttributes, ReactNode, forwardRef, useRef } from 'react';

import { ButtonColor, ButtonSize, ButtonType, ButtonVariant } from './button.constants';
import { buttonStyles } from './button.styles';

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
   * The color of the button.
   */
  color?: `${ButtonColor}`;

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
      className,
      variant = ButtonVariant.SOLID,
      color = ButtonColor.PRIMARY,
      size = ButtonSize.MEDIUM,
      type = ButtonType.BUTTON,
      onClick,
      ...props
    },
    ref,
  ) => {
    const classNames = classnames(
      'btn',
      `btn--size-${size}`,
      `btn--variant-${variant}`,
      `btn--color-${color}`,
      className,
    );

    return <button ref={ref} css={buttonStyles} className={classNames} type={type} onClick={onClick} {...props} />;
  },
);
