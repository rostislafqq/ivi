import type { Meta, StoryObj } from '@storybook/react';

import { MenuLink } from './MenuLink';

const meta: Meta<typeof MenuLink> = {
	title: 'Atoms/Menu/MenuLink',
	component: MenuLink,
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MenuLink>;

export const MenuItem: Story = {
	render: () => <MenuLink text={'test'} href={'#test'} />,
};
