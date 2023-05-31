import type { Meta, StoryObj } from '@storybook/react';

import { FilmsSlider } from './FilmsSlider';

const meta: Meta<typeof FilmsSlider> = {
	title: 'Molecules/FilmsSlider',
	component: FilmsSlider,
	tags: ['autodocs'],
	argTypes: {
		className: {
			description: 'Добавить класс для Storybook',
		},
	},
};

export default meta;

type Story = StoryObj<typeof FilmsSlider>;

export const Default: Story = {
	args: {},
};
