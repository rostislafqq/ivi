import { render } from '@testing-library/react';
import React from 'react';

import { FilmBanner } from './FilmBanner';

import type { FilmBannerType } from '@/app/types';

describe('components/molecules/FilmBanner', () => {
	const banner: FilmBannerType = {
		name: 'Богомол',
		banner: '/assets/images/promo-slider/img1.jpg',
		href: '/watch/1',
		type: 'subscribe',
		age: '16+',
	};

	it('should render badge when banner "age" is not empty', () => {
		const { getByTestId } = render(<FilmBanner banner={banner} />);

		const badge = getByTestId('badge');
		expect(badge.textContent).toBe(banner.age);
	});

	it('should render image', () => {
		const { getByTestId } = render(<FilmBanner banner={banner} />);

		const image = getByTestId('image');
		expect(image).toBeInTheDocument();
		expect(image).toHaveAttribute('alt', banner.name);
	});

	it('should render button text - "Смотреть по подписке" when banner "type" is "subscribe"', () => {
		const newBanner: FilmBannerType = {
			...banner,
			type: 'subscribe',
		};

		const { getByTestId } = render(<FilmBanner banner={newBanner} />);

		const button = getByTestId('button');
		expect(button.textContent).toBe('Смотреть по подписке');
	});

	it('should render button text - "Смотреть бесплатно" when banner "type" is "free"', () => {
		const newBanner: FilmBannerType = {
			...banner,
			type: 'free',
		};

		const { getByTestId } = render(<FilmBanner banner={newBanner} />);

		const button = getByTestId('button');
		expect(button.textContent).toBe('Смотреть бесплатно');
	});

	it('should render button text - "Смотреть подборку" when banner "type" is "collections"', () => {
		const newBanner: FilmBannerType = {
			...banner,
			type: 'collections',
		};

		const { getByTestId } = render(<FilmBanner banner={newBanner} />);

		const button = getByTestId('button');
		expect(button.textContent).toBe('Смотреть подборку');
	});
});
