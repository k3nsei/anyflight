import { Meta, Story, moduleMetadata } from '@storybook/angular';

import { ButtonComponent } from './button.component';

export default {
  title: 'ButtonComponent',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
  argTypes: {
    content: {
      control: 'text',
      defaultValue: 'Button',
    },
    type: {
      control: 'select',
      options: ['button', 'reset', 'submit'],
      defaultValue: 'button',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    autofocus: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} as Meta<ButtonComponent>;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
  template: `
    <anyflight-button
      [type]="type"
      [name]="name"
      [disabled]="disabled"
      [autofocus]="autofocus"
    >{{content}}</anyflight-button>
  `,
});

export const Primary = Template.bind({});

//
// Primary.args = {
//   type: 'button',
//   name: undefined,
//   disabled: false,
// };
