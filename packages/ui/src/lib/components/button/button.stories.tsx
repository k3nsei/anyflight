import { ComponentMeta } from '@storybook/react';
import { ComponentProps } from 'react';

import { Button } from './button';
import { ButtonSize, ButtonStyle, ButtonVariant } from './button.constants';

export default {
  component: Button,
  title: 'Components/Interaction/Button',
  parameters: {
    layout: 'centered',
    actions: { handles: ['click'] },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(ButtonVariant),
    },
    style: {
      control: 'radio',
      options: Object.values(ButtonStyle),
    },
    size: {
      control: 'radio',
      options: Object.values(ButtonSize),
    },
    children: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    variant: ButtonVariant.DEFAULT,
    style: ButtonStyle.FILL,
    size: ButtonSize.MEDIUM,
    children: 'Button',
    disabled: false,
  },
} as ComponentMeta<typeof Button>;

export const Story01 = ({ children, ...props }: ComponentProps<typeof Button>) => (
  <Button children={children} {...props} />
);
Story01.storyName = 'Example';

export const Story02 = ({ children, style, ...props }: ComponentProps<typeof Button>) => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    <Button style={ButtonStyle.FILL} {...props}>
      Filled
    </Button>
    <Button style={ButtonStyle.OUTLINE} {...props}>
      Outlined
    </Button>
    <Button style={ButtonStyle.TEXT} {...props}>
      Text
    </Button>
  </div>
);
Story02.storyName = 'Styles';
Story02.argTypes = {
  style: { table: { disable: true } },
};

export const Story03 = ({ children, style, size, ...props }: ComponentProps<typeof Button>) => (
  <>
    {Object.values(ButtonStyle).map((style) => (
      <div style={{ display: 'flex', gap: '1rem', marginBlockEnd: '1rem' }}>
        <Button style={style} size={ButtonSize.SMALL} {...props}>
          Small
        </Button>
        <Button style={style} size={ButtonSize.MEDIUM} {...props}>
          Medium
        </Button>
        <Button style={style} size={ButtonSize.LARGE} {...props}>
          Large
        </Button>
      </div>
    ))}
  </>
);
Story03.storyName = 'Sizes';
Story03.argTypes = {
  style: { table: { disable: true } },
  size: { table: { disable: true } },
};

export const Story04 = ({ children, variant, style, ...props }: ComponentProps<typeof Button>) => (
  <>
    {Object.values(ButtonVariant).map((variant) => (
      <div style={{ display: 'flex', gap: '1rem', marginBlockEnd: '1rem' }}>
        <Button variant={variant} style={ButtonStyle.FILL} {...props}>
          Filled
        </Button>
        <Button variant={variant} style={ButtonStyle.OUTLINE} {...props}>
          Outlined
        </Button>
        <Button variant={variant} style={ButtonStyle.TEXT} {...props}>
          Text
        </Button>
      </div>
    ))}
  </>
);
Story04.storyName = 'Variants';
Story04.argTypes = {
  variant: { table: { disable: true } },
  style: { table: { disable: true } },
};
