import { render } from '@testing-library/react';
import React from 'react';

import { BannersSlider } from './BannersSlider';

describe('components/molecules/BannersSlider', () => {
	it('should render component', () => {
		const { container } = render(<BannersSlider />);

		expect(container.firstElementChild).toBeInTheDocument();
	});
});
