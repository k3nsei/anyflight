import { ComponentMeta } from '@storybook/react';
import { ComponentProps } from 'react';

import { Button } from './button';
import { ButtonColor, ButtonSize, ButtonType, ButtonVariant } from './button.constants';

export default {
  component: Button,
  title: 'Components/Interaction/Button',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: 'text',
    },
    variant: {
      control: 'select',
      options: Object.values(ButtonVariant),
    },
    color: {
      control: 'select',
      options: Object.values(ButtonColor),
    },
    size: {
      control: 'radio',
      options: Object.values(ButtonSize),
    },
    type: {
      control: 'radio',
      options: Object.values(ButtonType),
    },
    disabled: {
      control: 'boolean',
    },
    onClick: {
      action: 'clicked',
    },
  },
  args: {
    children: 'Button',
    variant: ButtonVariant.SOLID,
    color: ButtonColor.PRIMARY,
    size: ButtonSize.MEDIUM,
    type: ButtonType.BUTTON,
    disabled: false,
  },
} as ComponentMeta<typeof Button>;

export const Story01 = ({ children, ...props }: ComponentProps<typeof Button>) => (
  <Button children={children} {...props} />
);
Story01.storyName = 'Button';
