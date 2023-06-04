import { render } from '@testing-library/react';
import React from 'react';

import { ReviewType } from '@/app/types/ReviewType';

import { ReviewsSlider } from './ReviewsSlider';

describe('ReviewsSlider', () => {
	const reviews: ReviewType[] = [
		{
			userName: 'Карина Марьяновна',
			likes: 42,
			date: '2017-02-26',
			comment:
				'мне 13 лет а я до сих пор не могу оторвать глаз, постоянно их смотрю,прихожу со школы и включаю или карусели или мульт и смотрю вес день.....Хочу...',
		},
		{
			userName: 'lex93_29',
			likes: -2,
			date: '2017-02-26',
			comment: 'коронавирус',
		},
	];

	it('should render ReviewsSlider component', () => {
		const { container } = render(<ReviewsSlider />);

		expect(container.firstElementChild).toBeInTheDocument();
	});

	it('should accept an additional class', () => {
		const { container } = render(<ReviewsSlider className="test-class" />);

		expect(container.firstElementChild).toHaveClass('reviews-slider');
		expect(container.firstElementChild).toHaveClass('test-class');
	});

	it('should accept an additional props', () => {
		const { container } = render(<ReviewsSlider data-test="test-value" />);

		expect(container.firstElementChild).toHaveAttribute('data-test', 'test-value');
	});

	it('should render inside the Reviews', () => {
		const { getAllByTestId } = render(<ReviewsSlider reviews={reviews} />);

		expect(getAllByTestId('review').length).toBe(reviews.length);
	});
});
