import { Header } from './Heading';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Header> = {
	title: 'Atoms/Heading',
	component: Header,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Main: Story = {
	args: {
		label: 'Черепашки-ниндзя (2012) (Мультфильм 2012)',
		headingLevel: 'h1',
		black: true,
		center: true,
		size: 'huge',
	},
};
