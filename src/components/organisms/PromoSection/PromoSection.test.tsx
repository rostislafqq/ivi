import { render } from '@testing-library/react';
import React from 'react';

import { PromoSection } from './PromoSection';

jest.mock('nanoid', () => ({
	nanoid: () => Math.random(),
}));

describe('components/organisms/PromoSection', () => {
	it('should render component', () => {
		const { container } = render(<PromoSection />);

		expect(container.firstElementChild).toBeInTheDocument();
	});

	it('should render BannersSlider inside', () => {
		const { getByTestId } = render(<PromoSection />);

		expect(getByTestId('banners-slider')).toBeInTheDocument();
	});

	it('should render SubscribeButton inside', () => {
		const { getByRole } = render(<PromoSection />);

		expect(getByRole('link')).toBeInTheDocument();
	});

	it('should accept additional class', () => {
		const { container } = render(<PromoSection className="test-class" />);

		expect(container.firstElementChild).toHaveClass('test-class');
	});
});
