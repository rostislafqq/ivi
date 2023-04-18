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
		label: 'выбор Иви',
		size: 'small',
		backgroundColor: 'red',
	},
};

export const Orange: Story = {
	args: {
		label: 'эксклюзив',
		size: 'small',
		backgroundColor: 'orange',
	},
};

export const Gray: Story = {
	args: {
		label: 'бесплатно',
		size: 'medium',
		backgroundColor: 'gray',
	},
};
