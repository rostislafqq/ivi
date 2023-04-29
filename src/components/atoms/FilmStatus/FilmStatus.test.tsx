import { render } from '@testing-library/react';
import React from 'react';

import { FilmStatus } from './FilmStatus';

describe('components/atoms/FilmStatus', () => {
	it('should render component', () => {
		const { container, getByText } = render(<FilmStatus variant="free">Film Status</FilmStatus>);

		expect(container.firstChild).toBeInTheDocument();
		expect(getByText('Film Status')).toBeInTheDocument();
	});

	it('should accept an additional class', () => {
		const { container, getByText } = render(
			<FilmStatus className="test-class" variant="free">
				Film Status
			</FilmStatus>,
		);

		expect(container.firstChild).toBeInTheDocument();
		expect(getByText('Film Status')).toBeInTheDocument();
		expect(container.firstChild).toHaveClass('film-status--free');
		expect(container.firstChild).toHaveClass('test-class');
	});

	it('should render free film-status when variant prop is "free"', () => {
		const { container, getByText } = render(<FilmStatus variant="free">Film Status</FilmStatus>);

		expect(container.firstChild).toBeInTheDocument();
		expect(getByText('Film Status')).toBeInTheDocument();
		expect(container.firstChild).toHaveClass('film-status--free');
	});

	it('should render subscribe film-status when variant prop is "subscribe"', () => {
		const { container, getByText } = render(<FilmStatus variant="subscribe">Film Status</FilmStatus>);

		expect(container.firstChild).toBeInTheDocument();
		expect(getByText('Film Status')).toBeInTheDocument();
		expect(container.firstChild).toHaveClass('film-status--subscribe');
	});

	it('should render buy film-status when variant prop is "buy"', () => {
		const { container, getByText } = render(<FilmStatus variant="buy">Film Status</FilmStatus>);

		expect(container.firstChild).toBeInTheDocument();
		expect(getByText('Film Status')).toBeInTheDocument();
		expect(container.firstChild).toHaveClass('film-status--buy');
	});
});
