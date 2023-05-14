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

		expect(getByTestId('name')).toBeInTheDocument();
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

		expect(getByTestId('status')).toBeInTheDocument();
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

		expect(getByTestId('preview')).toBeInTheDocument();
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
		expect(getByTestId('previewBox')).toHaveAttribute('data-hover', 'true');
		fireEvent.mouseLeave(getByTestId('film-card'));
		expect(getByTestId('previewBox')).toHaveAttribute('data-hover', 'false');
	});
});
