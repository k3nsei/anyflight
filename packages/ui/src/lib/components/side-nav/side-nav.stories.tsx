import { ComponentMeta } from '@storybook/react';
import { ComponentProps, MouseEventHandler } from 'react';

import { Icon } from '@anyflight/icons';

import { SideNav } from './side-nav';
import { SideNavItem } from './side-nav-item';

export default {
  title: 'Components/Navigation/SideNav',
  component: SideNav,
  subcomponents: { SideNavItem },
  argTypes: {
    collapsed: {
      control: 'boolean',
    },
    onClick: {
      action: 'clicked',
    },
  },
  args: {
    collapsed: false,
  },
} as ComponentMeta<typeof SideNav>;

export const Story01 = ({ collapsed, onClick }: ComponentProps<typeof SideNav> & { onClick: MouseEventHandler }) => (
  <SideNav collapsed={collapsed}>
    <SideNavItem icon={Icon.BETAFLIGHT} onClick={onClick}>
      Welcome
    </SideNavItem>
    <SideNavItem icon={Icon.HELP} onClick={onClick} active>
      Changelog
    </SideNavItem>
    <SideNavItem icon={Icon.HELP} onClick={onClick}>
      Privacy policy
    </SideNavItem>
    <SideNavItem icon={Icon.HELP} onClick={onClick}>
      Documentation & Support
    </SideNavItem>
    <SideNavItem icon={Icon.CONFIG} onClick={onClick}>
      Options
    </SideNavItem>
    <SideNavItem icon={Icon.FIRMWARE_FLASHER} onClick={onClick}>
      Firmware Flasher
    </SideNavItem>
  </SideNav>
);
Story01.storyName = 'SideNav';

export const Story02 = ({ onClick }: ComponentProps<typeof SideNav> & { onClick: MouseEventHandler }) => (
  <SideNav collapsed={true}>
    <SideNavItem icon={Icon.BETAFLIGHT} onClick={onClick}>
      Welcome
    </SideNavItem>
    <SideNavItem icon={Icon.HELP} onClick={onClick} active>
      Changelog
    </SideNavItem>
    <SideNavItem icon={Icon.HELP} onClick={onClick}>
      Privacy policy
    </SideNavItem>
    <SideNavItem icon={Icon.HELP} onClick={onClick}>
      Documentation & Support
    </SideNavItem>
    <SideNavItem icon={Icon.CONFIG} onClick={onClick}>
      Options
    </SideNavItem>
    <SideNavItem icon={Icon.FIRMWARE_FLASHER} onClick={onClick}>
      Firmware Flasher
    </SideNavItem>
  </SideNav>
);
Story02.storyName = 'Collapsed';
