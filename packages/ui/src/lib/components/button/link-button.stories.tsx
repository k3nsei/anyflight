import { actions } from '@storybook/addon-actions';
import { ComponentMeta } from '@storybook/react';
import { ComponentProps, MouseEvent } from 'react';

import { ButtonSize, ButtonStyle, ButtonVariant } from './button.constants';
import { LinkButton } from './link-button';

const { click: clickAction } = actions('click');

const handleClick = (event: MouseEvent) => {
  event.preventDefault();
  clickAction(event.nativeEvent);
};

export default {
  component: LinkButton,
  title: 'Components/Interaction/LinkButton',
  parameters: {
    layout: 'centered',
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
  },
  args: {
    variant: ButtonVariant.DEFAULT,
    style: ButtonStyle.TEXT,
    size: ButtonSize.MEDIUM,
    children: 'Button',
    href: '#',
    onClick: handleClick,
  },
} as ComponentMeta<typeof LinkButton>;

export const Story01 = ({ children, ...props }: ComponentProps<typeof LinkButton>) => (
  <LinkButton children={children} {...props} />
);
Story01.storyName = 'Example';

export const Story02 = ({ children, style, ...props }: ComponentProps<typeof LinkButton>) => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    <LinkButton style={ButtonStyle.FILL} {...props}>
      Filled
    </LinkButton>
    <LinkButton style={ButtonStyle.OUTLINE} {...props}>
      Outlined
    </LinkButton>
    <LinkButton style={ButtonStyle.TEXT} {...props}>
      Text
    </LinkButton>
  </div>
);
Story02.storyName = 'Styles';
Story02.argTypes = {
  style: { table: { disable: true } },
};

export const Story03 = ({ children, style, size, ...props }: ComponentProps<typeof LinkButton>) => (
  <>
    {Object.values(ButtonStyle).map((style) => (
      <div style={{ display: 'flex', gap: '1rem', marginBlockEnd: '1rem' }}>
        <LinkButton style={style} size={ButtonSize.SMALL} {...props}>
          Small
        </LinkButton>
        <LinkButton style={style} size={ButtonSize.MEDIUM} {...props}>
          Medium
        </LinkButton>
        <LinkButton style={style} size={ButtonSize.LARGE} {...props}>
          Large
        </LinkButton>
      </div>
    ))}
  </>
);
Story03.storyName = 'Sizes';
Story03.argTypes = {
  style: { table: { disable: true } },
  size: { table: { disable: true } },
};

export const Story04 = ({ children, variant, style, ...props }: ComponentProps<typeof LinkButton>) => (
  <>
    {Object.values(ButtonVariant).map((variant) => (
      <div style={{ display: 'flex', gap: '1rem', marginBlockEnd: '1rem' }}>
        <LinkButton variant={variant} style={ButtonStyle.FILL} {...props}>
          Filled
        </LinkButton>
        <LinkButton variant={variant} style={ButtonStyle.OUTLINE} {...props}>
          Outlined
        </LinkButton>
        <LinkButton variant={variant} style={ButtonStyle.TEXT} {...props}>
          Text
        </LinkButton>
      </div>
    ))}
  </>
);
Story04.storyName = 'Variants';
Story04.argTypes = {
  variant: { table: { disable: true } },
  style: { table: { disable: true } },
};
