import { ComponentMeta } from '@storybook/react';
import { ComponentProps, MouseEventHandler } from 'react';

import { Icons } from '@anyflight/icons';

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
    <SideNavItem icon={Icons.BETAFLIGHT} onClick={onClick}>
      Welcome
    </SideNavItem>
    <SideNavItem icon={Icons.HELP} onClick={onClick} active>
      Changelog
    </SideNavItem>
    <SideNavItem icon={Icons.HELP} onClick={onClick}>
      Privacy policy
    </SideNavItem>
    <SideNavItem icon={Icons.HELP} onClick={onClick}>
      Documentation & Support
    </SideNavItem>
    <SideNavItem icon={Icons.CONFIG} onClick={onClick}>
      Options
    </SideNavItem>
    <SideNavItem icon={Icons.FIRMWARE_FLASHER} onClick={onClick}>
      Firmware Flasher
    </SideNavItem>
  </SideNav>
);
Story01.storyName = 'SideNav';

export const Story02 = ({ onClick }: ComponentProps<typeof SideNav> & { onClick: MouseEventHandler }) => (
  <SideNav collapsed={true}>
    <SideNavItem icon={Icons.BETAFLIGHT} onClick={onClick}>
      Welcome
    </SideNavItem>
    <SideNavItem icon={Icons.HELP} onClick={onClick} active>
      Changelog
    </SideNavItem>
    <SideNavItem icon={Icons.HELP} onClick={onClick}>
      Privacy policy
    </SideNavItem>
    <SideNavItem icon={Icons.HELP} onClick={onClick}>
      Documentation & Support
    </SideNavItem>
    <SideNavItem icon={Icons.CONFIG} onClick={onClick}>
      Options
    </SideNavItem>
    <SideNavItem icon={Icons.FIRMWARE_FLASHER} onClick={onClick}>
      Firmware Flasher
    </SideNavItem>
  </SideNav>
);
Story02.storyName = 'Collapsed';
