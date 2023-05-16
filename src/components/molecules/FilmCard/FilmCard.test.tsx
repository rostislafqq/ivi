import { render } from '@testing-library/react';
import React from 'react';

import type { FilmType } from '@app/types';

import { FilmCard } from './FilmCard';

describe('components/molecules/FilmCard', () => {
	const film: FilmType = {
		name: 'Позывной «Журавли»',
		preview: '/assets/images/film-cards/img1.jpg',
		status: 'subscribe',
		href: '/watch/1',
	};

	it('should render FilmCardLoaded is "loading" prop is false', () => {
		const { container } = render(<FilmCard film={film} />);

		expect(container.firstElementChild).toHaveClass('card-loaded');
	});

	it('should render FilmCardLoading is "loading" prop is true', () => {
		const { container } = render(<FilmCard film={film} loading />);

		expect(container.firstElementChild).toHaveClass('card-loading');
	});

	it('should accept an additional class', () => {
		const { container } = render(<FilmCard className="test-class" film={film} />);

		expect(container.firstElementChild).toHaveClass('film-card');
		expect(container.firstElementChild).toHaveClass('test-class');
	});
});
