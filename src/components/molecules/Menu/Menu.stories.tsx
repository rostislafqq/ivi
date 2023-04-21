import type { Meta, StoryObj } from '@storybook/react';

import { Menu as MenuComponent } from './Menu';

const meta: Meta<typeof MenuComponent> = {
	title: 'Molecules/Menu',
	component: MenuComponent,
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MenuComponent>;

export const Menu: Story = {
	render: () => <MenuComponent />,
};
