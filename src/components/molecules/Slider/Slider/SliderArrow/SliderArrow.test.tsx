import { render } from '@testing-library/react';
import React from 'react';

import { SliderArrow } from './SliderArrow';

describe('components/molecules/Slider/Slider/SliderArrow', () => {
	it('should render left arrow when "direction" prop is left', () => {
		const { getByTestId } = render(<SliderArrow direction="left" />);

		expect(getByTestId('slider__arrow-left')).toBeInTheDocument();
	});

	it('should render right arrow when "direction" prop is right', () => {
		const { getByTestId } = render(<SliderArrow direction="right" />);

		expect(getByTestId('slider__arrow-right')).toBeInTheDocument();
	});
});
