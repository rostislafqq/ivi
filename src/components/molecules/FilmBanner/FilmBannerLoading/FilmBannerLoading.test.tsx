import { render } from '@testing-library/react';

import React from 'react';

import { FilmBannerLoading } from './FilmBannerLoading';

describe('components/molecules/FilmBanner/FilmBannerLoading', () => {
	it('should render FilmBannerLoading', () => {
		const { container } = render(<FilmBannerLoading />);

		expect(container.firstElementChild).toBeInTheDocument();
	});

	it('should render the loading box inside FilmBannerLoading', () => {
		const { getByTestId } = render(<FilmBannerLoading />);

		expect(getByTestId('film-banner__loading-box')).toBeInTheDocument();
	});

	it('should accept additional class', () => {
		const { container } = render(<FilmBannerLoading className="test-class" />);

		expect(container.firstElementChild).toHaveClass('banner');
		expect(container.firstElementChild).toHaveClass('banner-loading');
		expect(container.firstElementChild).toHaveClass('test-class');
	});
});
