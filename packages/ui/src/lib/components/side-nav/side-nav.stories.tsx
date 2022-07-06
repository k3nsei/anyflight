import { ComponentMeta } from '@storybook/react';
import { ComponentProps, MouseEventHandler } from 'react';

import { AnyflightIcon } from '@anyflight/icons';

import { SideNav } from './side-nav';
import { SideNavItem } from './side-nav-item';

export default {
  title: 'Components/Navigation/SideNav',
  component: SideNav,
  subcomponents: { SideNavItem },
  argTypes: {
    expanded: {
      control: 'boolean',
    },
    onClick: {
      action: 'clicked',
    },
  },
  args: {
    expanded: true,
  },
} as ComponentMeta<typeof SideNav>;

export const Story01 = ({ expanded, onClick }: ComponentProps<typeof SideNav> & { onClick: MouseEventHandler }) => (
  <SideNav expanded={expanded}>
    <SideNavItem icon={AnyflightIcon.BETAFLIGHT} onClick={onClick}>
      Welcome
    </SideNavItem>
    <SideNavItem icon={AnyflightIcon.HELP} onClick={onClick} active>
      Changelog
    </SideNavItem>
    <SideNavItem icon={AnyflightIcon.HELP} onClick={onClick}>
      Privacy policy
    </SideNavItem>
    <SideNavItem icon={AnyflightIcon.HELP} onClick={onClick}>
      Documentation & Support
    </SideNavItem>
    <SideNavItem icon={AnyflightIcon.CONFIG} onClick={onClick}>
      Options
    </SideNavItem>
    <SideNavItem icon={AnyflightIcon.FIRMWARE_FLASHER} onClick={onClick}>
      Firmware Flasher
    </SideNavItem>
  </SideNav>
);
Story01.storyName = 'SideNav';

export const Story02 = ({ onClick }: ComponentProps<typeof SideNav> & { onClick: MouseEventHandler }) => (
  <SideNav expanded={false}>
    <SideNavItem icon={AnyflightIcon.BETAFLIGHT} onClick={onClick}>
      Welcome
    </SideNavItem>
    <SideNavItem icon={AnyflightIcon.HELP} onClick={onClick} active>
      Changelog
    </SideNavItem>
    <SideNavItem icon={AnyflightIcon.HELP} onClick={onClick}>
      Privacy policy
    </SideNavItem>
    <SideNavItem icon={AnyflightIcon.HELP} onClick={onClick}>
      Documentation & Support
    </SideNavItem>
    <SideNavItem icon={AnyflightIcon.CONFIG} onClick={onClick}>
      Options
    </SideNavItem>
    <SideNavItem icon={AnyflightIcon.FIRMWARE_FLASHER} onClick={onClick}>
      Firmware Flasher
    </SideNavItem>
  </SideNav>
);
Story02.storyName = 'Collapsed';
