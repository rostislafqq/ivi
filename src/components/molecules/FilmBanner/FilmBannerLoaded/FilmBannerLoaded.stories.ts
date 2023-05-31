import type { Meta, StoryObj } from '@storybook/react';

import { FilmBannerLoaded } from './FilmBannerLoaded';

const meta: Meta<typeof FilmBannerLoaded> = {
	title: 'Molecules/FilmBanner/FilmBannerLoaded',
	component: FilmBannerLoaded,
	tags: ['autodocs'],
	argTypes: {
		name: {
			description: 'Название фильма',
		},
		banner: {
			description: 'URL ссылка на баннер',
		},
		href: {
			description: 'URL ссылка',
		},
		type: {
			description: 'Тип просмотра фильма',
			control: 'select',
			options: ['subscribe', 'buy', 'free'],
		},
		age: {
			description: 'Возрастное ограничение',
		},
		className: {
			description: 'Добавить класс для Storybook',
		},
	},
};

export default meta;

type Story = StoryObj<typeof FilmBannerLoaded>;
export const Banner: Story = {
	args: {
		name: 'Богомол',
		banner: '/assets/images/banners/img1.jpg',
		href: '/watch/1',
		type: 'subscribe',
		age: '16+',
	},
};
