import { render, fireEvent } from '@testing-library/react';
import React from 'react';

import { FilmCardLoaded } from './FilmCardLoaded';

describe('components/molecules/FilmCard/FilmCardLoaded', () => {
	it('should render components', () => {
		const { container } = render(
			<FilmCardLoaded
				name="Фильм"
				preview="/assets/images/test-preview.jpg"
				status="subscribe"
				href="/watch/1"
			/>,
		);

		expect(container.firstChild).toBeInTheDocument();
		expect(container.firstChild).toHaveClass('film-card');
		expect(container.firstChild).toHaveClass('card-loaded');
	});

	it('should accept an additional class', () => {
		const { container } = render(
			<FilmCardLoaded
				className="test-class"
				name="Фильм"
				preview="/assets/images/test-preview.jpg"
				status="subscribe"
				href="/watch/1"
			/>,
		);

		expect(container.firstChild).toHaveClass('film-card');
		expect(container.firstChild).toHaveClass('card-loaded');
		expect(container.firstChild).toHaveClass('test-class');
	});

	it('should render the link inside the component', () => {
		const { getByRole } = render(
			<FilmCardLoaded
				name="Фильм"
				preview="/assets/images/test-preview.jpg"
				status="subscribe"
				href="/watch/1"
			/>,
		);

		expect(getByRole('link')).toBeInTheDocument();
		expect(getByRole('link')).toHaveAttribute('href', '/watch/1');
	});

	it('should display the film name', () => {
		const { getByTestId } = render(
			<FilmCardLoaded
				name="Фильм"
				preview="/assets/images/test-preview.jpg"
				status="subscribe"
				href="/watch/1"
			/>,
		);

		expect(getByTestId('film-card__name')).toBeInTheDocument();
	});

	it('should display the film status', () => {
		const { getByTestId } = render(
			<FilmCardLoaded
				name="Фильм"
				preview="/assets/images/test-preview.jpg"
				status="subscribe"
				href="/watch/1"
			/>,
		);

		expect(getByTestId('film-card__status')).toBeInTheDocument();
	});

	it('should display the film preview', () => {
		const { getByTestId } = render(
			<FilmCardLoaded
				name="Фильм"
				preview="/assets/images/test-preview.jpg"
				status="subscribe"
				href="/watch/1"
			/>,
		);

		expect(getByTestId('film-card__preview')).toBeInTheDocument();
	});

	it('changes the state when hovered', () => {
		const { getByTestId } = render(
			<FilmCardLoaded
				name="Фильм"
				preview="/assets/images/test-preview.jpg"
				status="subscribe"
				href="/watch/1"
			/>,
		);

		fireEvent.mouseEnter(getByTestId('film-card'));
		expect(getByTestId('film-card__previewBox')).toHaveAttribute('data-hover', 'true');
		fireEvent.mouseLeave(getByTestId('film-card'));
		expect(getByTestId('film-card__previewBox')).toHaveAttribute('data-hover', 'false');
	});
});
