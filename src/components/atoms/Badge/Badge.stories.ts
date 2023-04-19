import { Badge } from './Badge';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Badge> = {
	title: 'Atoms/Badge',
	component: Badge,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Red: Story = {
	args: {
		children: 'выбор Иви',
		size: 'small',
		backgroundColor: 'red',
	},
};

export const Orange: Story = {
	args: {
		children: 'эксклюзив',
		size: 'small',
		backgroundColor: 'orange',
	},
};

export const Gray: Story = {
	args: {
		children: 'бесплатно',
		size: 'medium',
		backgroundColor: 'gray',
	},
};
