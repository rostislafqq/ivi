import { nanoid } from 'nanoid';
import React from 'react';

import { BannersSlider } from './BannersSlider';

import { FilmBanner } from '../FilmBanner/FilmBanner';

import type { FilmBannerType } from '@app/types';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BannersSlider> = {
	title: 'Molecules/Sliders/BannersSlider',
	component: BannersSlider,
	tags: ['autodocs'],
};

export default meta;

const banners: FilmBannerType[] = [
	{
		name: 'Богомол',
		banner: '/assets/images/banners/img1.jpg',
		href: '/watch/1',
		type: 'subscribe',
		age: '16+',
	},
	{
		name: 'Кратность - сестра таланта: Лучшие мини-сериалы для ценителей лаконичных историй',
		banner: '/assets/images/banners/img2.jpg',
		type: 'collections',
		href: '/collections/1',
	},
	{
		name: 'Сыщицы',
		banner: '/assets/images/banners/img3.jpg',
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
					<FilmBanner key={nanoid()} banner={banner} />
				))}
			</BannersSlider>
		);
	},
};
