import type { Meta, StoryObj } from '@storybook/react';

import { FilmBannerLoading } from './FilmBannerLoading';

const meta: Meta<typeof FilmBannerLoading> = {
	title: 'Molecules/FilmBanner/FilmBannerLoading',
	component: FilmBannerLoading,
	tags: ['autodocs'],
	argTypes: {
		className: {
			description: 'Добавить класс для Storybook',
		},
	},
};

export default meta;

type Story = StoryObj<typeof FilmBannerLoading>;

export const BannerLoading: Story = {};
