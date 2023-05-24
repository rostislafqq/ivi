import { Rating } from './Rating';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Rating> = {
	title: 'Molecules/Rating',
	component: Rating,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Rating>;

export const large: Story = {
	args: {
		extra: 'Интересный сюжет',
		assessment: 1234,
		size: 'large',
		rating: 7.1,
	},
};
