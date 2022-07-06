import classnames from 'classnames';
import { AnchorHTMLAttributes, forwardRef } from 'react';

import { BaseButton, BaseButtonProps } from './base-button';
import { ButtonStyle } from './button.constants';

export type LinkButtonProps = BaseButtonProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'>;

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, children, style = ButtonStyle.TEXT, ...props }, ref) => {
    const classNames = classnames('button-link', className);

    return <BaseButton ref={ref} component="a" className={classNames} style={style} children={children} {...props} />;
  },
);

LinkButton.displayName = 'LinkButton';
