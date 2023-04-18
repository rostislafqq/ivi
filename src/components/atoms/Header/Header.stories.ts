import { Header } from './Header';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Header> = {
	title: 'Atoms/Header',
	component: Header,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Main: Story = {
	args: {
		label: 'Черепашки-ниндзя (2012) (Мультфильм 2012)',
		main: true,
		black: true,
		center: true,
		size: 'huge',
	},
};
