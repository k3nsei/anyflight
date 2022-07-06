import { ComponentMeta } from '@storybook/react';
import { ComponentProps } from 'react';

import { Button, ButtonSize, ButtonType, ButtonVariant } from './button';

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
    variant: ButtonVariant.DEFAULT,
    size: ButtonSize.MEDIUM,
    type: ButtonType.BUTTON,
    disabled: false,
  },
} as ComponentMeta<typeof Button>;

export const Story01 = ({ children, ...props }: ComponentProps<typeof Button>) => (
  <Button children={children} {...props} />
);
Story01.storyName = 'Button';
Story01.args = { variant: ButtonVariant.PRIMARY };
