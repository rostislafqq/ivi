import { render, fireEvent } from '@testing-library/react';
import React from 'react';

import type { FilmType } from '@/app/types';

import { FilmCardLoaded } from './FilmCardLoaded';

describe('components/molecules/FilmCard/FilmCardLoaded', () => {
	const film: FilmType = {
		name: 'Позывной «Журавли»',
		preview: '/assets/images/film-cards/img1.jpg',
		status: 'subscribe',
		href: '/watch/1',
	};

	it('should render components', () => {
		const { container } = render(<FilmCardLoaded {...film} />);

		expect(container.firstChild).toBeInTheDocument();
		expect(container.firstChild).toHaveClass('film-card');
		expect(container.firstChild).toHaveClass('card-loaded');
	});

	it('should accept an additional class', () => {
		const { container } = render(<FilmCardLoaded className="test-class" {...film} />);

		expect(container.firstChild).toHaveClass('film-card');
		expect(container.firstChild).toHaveClass('card-loaded');
		expect(container.firstChild).toHaveClass('test-class');
	});

	it('should render a link to the film page', () => {
		const { getByTestId } = render(<FilmCardLoaded {...film} />);

		expect(getByTestId('film-card__link')).toBeInTheDocument();
		expect(getByTestId('film-card__link')).toHaveAttribute('href', '/watch/1');
	});

	it('should display the film name', () => {
		const { getByTestId } = render(<FilmCardLoaded {...film} />);

		expect(getByTestId('film-card__name')).toBeInTheDocument();
	});

	it('should display the film status', () => {
		const { getByTestId } = render(<FilmCardLoaded {...film} />);

		expect(getByTestId('film-card__status')).toBeInTheDocument();
	});

	it('should display the film preview', () => {
		const { getByTestId } = render(<FilmCardLoaded {...film} />);

		expect(getByTestId('film-card__preview')).toBeInTheDocument();
	});

	it('changes the state when hovered', () => {
		const { getByTestId } = render(<FilmCardLoaded {...film} />);

		fireEvent.mouseEnter(getByTestId('film-card'));
		expect(getByTestId('film-card__previewBox')).toHaveAttribute('data-hover', 'true');
		fireEvent.mouseLeave(getByTestId('film-card'));
		expect(getByTestId('film-card__previewBox')).toHaveAttribute('data-hover', 'false');
	});
});
