import { Label } from './Label';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Label> = {
	title: 'Atoms/Label',
	component: Label,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Label>;

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
