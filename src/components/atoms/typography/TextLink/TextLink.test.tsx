import { render } from '@testing-library/react';
import React from 'react';

import { TextLink } from './TextLink';

describe('components/atoms/typography/TextLink', () => {
	it('should render the link inside the TextLink component', () => {
		const { container, getByRole } = render(
			<TextLink tag="div" href="https://google.com">
				Text Link text
			</TextLink>,
		);

		const link = getByRole('link');

		expect(container.firstChild).toBeInTheDocument();
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute('href', 'https://google.com');
	});
});
