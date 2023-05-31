import { render } from '@testing-library/react';
import React from 'react';

import { SliderWrapper } from './SliderWrapper';

describe('components/molecules/Slider/Slider/SliderWrapper', () => {
	it('should render children', () => {
		const { getByTestId } = render(
			<SliderWrapper>
				<div data-testid="children-component">Children Component</div>
			</SliderWrapper>,
		);

		expect(getByTestId('children-component')).toBeInTheDocument();
	});

	it('should accept an additional class', () => {
		const { container } = render(
			<SliderWrapper className="test-class">
				<div data-testid="children-component">Children Component</div>
			</SliderWrapper>,
		);

		expect(container.firstElementChild).toHaveClass('slider__wrapper');
		expect(container.firstElementChild).toHaveClass('test-class');
	});
});
