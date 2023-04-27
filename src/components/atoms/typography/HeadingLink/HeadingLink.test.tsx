import { render } from '@testing-library/react';
import React from 'react';

import { HeadingLink } from './HeadingLink';

describe('components/atoms/typography/HeadingLink', () => {
	it('should render the link inside the HeadingLink component', () => {
		const { container, getByRole } = render(
			<HeadingLink tag="h1" href="https://google.com">
				Heading Link text
			</HeadingLink>,
		);

		const link = getByRole('link');

		expect(container.firstChild).toBeInTheDocument();
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute('href', 'https://google.com');
	});
});
