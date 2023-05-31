import { render } from '@testing-library/react';
import React from 'react';

import { FilmCardLoading } from './FilmCardLoading';

describe('components/molecules/FilmCard/FilmCardLoading', () => {
	it('should render component', () => {
		const { container } = render(<FilmCardLoading />);

		expect(container.firstChild).toBeInTheDocument();
		expect(container.firstChild).toHaveClass('film-card');
		expect(container.firstChild).toHaveClass('card-loading');
	});

	it('should accept an additional class', () => {
		const { container } = render(<FilmCardLoading className="test-class" />);

		expect(container.firstChild).toHaveClass('film-card');
		expect(container.firstChild).toHaveClass('card-loading');
		expect(container.firstChild).toHaveClass('test-class');
	});

	it('should display the loading box for preview', () => {
		const { getByTestId } = render(<FilmCardLoading />);

		expect(getByTestId('film-card__preview')).toBeInTheDocument();
	});

	it('should display the loading box for film name', () => {
		const { getByTestId } = render(<FilmCardLoading />);

		expect(getByTestId('film-card__name')).toBeInTheDocument();
	});

	it('should display the loading box for film name', () => {
		const { getByTestId } = render(<FilmCardLoading />);

		expect(getByTestId('film-card__status')).toBeInTheDocument();
	});
});
