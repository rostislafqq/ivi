import { BANNERS } from '@/app/data/banners';

import type { Meta, StoryObj } from '@storybook/react';

import { BannersSlider } from './BannersSlider';

const meta: Meta<typeof BannersSlider> = {
	title: 'Molecules/Sliders/BannersSlider',
	component: BannersSlider,
	tags: ['autodocs'],
	argTypes: {
		className: {
			description: 'Добавить класс для Storybook',
		},
	},
};

export default meta;

type Story = StoryObj<typeof BannersSlider>;

export const Default: Story = {
	args: {
		banners: BANNERS,
	},
};
