import { FilmStatus } from './FilmStatus';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FilmStatus> = {
	title: 'Atoms/FilmStatus',
	component: FilmStatus,
	tags: ['autodocs'],
	argTypes: {
		children: {
			type: 'string',
			name: 'Label',
			description: 'Содержимое',
		},
		variant: {
			control: 'select',
			options: ['free', 'subscribe', 'buy'],
		},
	},
};
export default meta;

type Story = StoryObj<typeof FilmStatus>;
export const Free: Story = {
	args: {
		children: 'Бесплатно',
		variant: 'free',
	},
};

export const Subscribe: Story = {
	args: {
		children: 'Подписка',
		variant: 'subscribe',
	},
};

export const Buy: Story = {
	args: {
		children: 'Покупка',
		variant: 'buy',
	},
};
