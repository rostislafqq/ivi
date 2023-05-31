import { render } from '@testing-library/react';
import React from 'react';

import { BannersSlider } from './BannersSlider';

jest.mock('nanoid', () => ({
	nanoid: () => Math.random(),
}));

describe('components/molecules/BannersSlider', () => {
	it('should render component', () => {
		const { container } = render(<BannersSlider />);

		expect(container.firstElementChild).toBeInTheDocument();
	});
});
