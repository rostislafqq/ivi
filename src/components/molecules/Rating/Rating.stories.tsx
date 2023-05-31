import type { Meta, StoryObj } from '@storybook/react';

import { Rating } from './Rating';

const meta: Meta<typeof Rating> = {
	title: 'Molecules/Rating',
	component: Rating,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Rating>;

export const largeGreen: Story = {
	args: {
		extra: 'Интересный сюжет',
		assessment: 1234,
		size: 'large',
		rating: 7,
	},
};

export const largeGray: Story = {
	args: {
		extra: 'Интересный сюжет',
		assessment: 1234,
		size: 'large',
		rating: 6.9,
	},
};

export const smallGreen: Story = {
	args: {
		size: 'small',
		rating: 7.1,
	},
};

export const smallGray: Story = {
	args: {
		size: 'small',
		rating: 6.9,
	},
};
