import type { Meta, StoryObj } from '@storybook/react';

import { FilmStatus } from './FilmStatus';

const meta: Meta<typeof FilmStatus> = {
	title: 'Atoms/FilmStatus',
	component: FilmStatus,
	tags: ['autodocs'],
	argTypes: {
		status: {
			control: 'select',
			options: ['free', 'subscribe', 'buy'],
		},
	},
};
export default meta;

type Story = StoryObj<typeof FilmStatus>;
export const Free: Story = {
	args: {
		status: 'free',
	},
};

export const Subscribe: Story = {
	args: {
		status: 'subscribe',
	},
};

export const Buy: Story = {
	args: {
		status: 'buy',
	},
};
