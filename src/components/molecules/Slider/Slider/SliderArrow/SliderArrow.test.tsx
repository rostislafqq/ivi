import { render } from '@testing-library/react';
import React from 'react';

import { SliderLeftArrow, SliderRightArrow } from './SliderArrow';

describe('components/molecules/Slider/Slider/SliderArrow', () => {
	it('should render left arrow', () => {
		const { getByTestId } = render(<SliderLeftArrow />);

		expect(getByTestId('slider__arrow-left')).toBeInTheDocument();
	});

	it('should render right arrow', () => {
		const { getByTestId } = render(<SliderRightArrow />);

		expect(getByTestId('slider__arrow-right')).toBeInTheDocument();
	});

	it('the left arrow should take an additional class', () => {
		const { container } = render(<SliderLeftArrow className="test-class" />);

		expect(container.firstElementChild).toHaveClass('slider__arrow-left');
		expect(container.firstElementChild).toHaveClass('test-class');
	});

	it('the right arrow should take an additional class', () => {
		const { container } = render(<SliderRightArrow className="test-class" />);

		expect(container.firstElementChild).toHaveClass('slider__arrow-right');
		expect(container.firstElementChild).toHaveClass('test-class');
	});
});
