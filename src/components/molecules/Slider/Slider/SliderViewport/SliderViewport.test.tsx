import { render } from '@testing-library/react';
import React from 'react';

import { SliderViewport } from './SliderViewport';

describe('components/molecules/Slider/Slider/SliderViewport', () => {
	it('should renders children', () => {
		const { getByTestId } = render(
			<SliderViewport className="test-class">
				<div data-testid="children-component">Children component</div>
			</SliderViewport>,
		);

		expect(getByTestId('children-component')).toBeInTheDocument();
	});

	it('should accept an additional class', () => {
		const { container } = render(
			<SliderViewport className="test-class">
				<div>Children component</div>
			</SliderViewport>,
		);

		expect(container.firstElementChild).toHaveClass('slider__viewport');
		expect(container.firstElementChild).toHaveClass('test-class');
	});
});
