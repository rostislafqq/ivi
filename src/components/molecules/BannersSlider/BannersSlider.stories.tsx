import React from 'react';

import { BannersSlider } from './BannersSlider';

import { FilmBanner } from '../FilmBanner/FilmBanner';

import type { FilmBannerType } from '@app/types';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BannersSlider> = {
	title: 'Molecules/BannersSlider',
	component: BannersSlider,
	tags: ['autodocs'],
};

export default meta;

const banners: FilmBannerType[] = [
	{
		name: 'Богомол',
		banner: '/assets/images/promo-slider/img1.jpg',
		href: '/watch/1',
		type: 'subscribe',
		age: '16+',
	},
	{
		name: 'Кратность - сестра таланта: Лучшие мини-сериалы для ценителей лаконичных историй',
		banner: '/assets/images/promo-slider/img2.jpg',
		type: 'collections',
		href: '/collections/1',
	},
	{
		name: 'Сыщицы',
		banner: '/assets/images/promo-slider/img3.jpg',
		href: '/watch/2',
		type: 'free',
		age: '18+',
	},
];

type Story = StoryObj<typeof BannersSlider>;
export const Default: Story = {
	render() {
		return (
			<BannersSlider style={{ margin: '0 -1rem' }}>
				{banners.map((banner) => (
					<FilmBanner key={banner.href} banner={banner} />
				))}
			</BannersSlider>
		);
	},
};
