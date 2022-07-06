import { ButtonHTMLAttributes, forwardRef } from 'react';

import { BaseButton, BaseButtonProps } from './base-button';

export type ButtonProps = BaseButtonProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, ref) => (
  <BaseButton ref={ref} children={children} {...props} />
));

Button.displayName = 'Button';
