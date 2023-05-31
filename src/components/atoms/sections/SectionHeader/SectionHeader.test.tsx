import { render } from '@testing-library/react';
import React from 'react';

import { SectionHeader } from './SectionHeader';

describe('components/atoms/SectionHeader', () => {
	it('should render with children prop', () => {
		const { container, getByText } = render(<SectionHeader>SectionHeader text</SectionHeader>);

		const header = container.firstChild;

		expect(header).toBeInTheDocument();
		expect(header).toHaveClass('header');
		expect(getByText('SectionHeader text'));
	});

	it('should accept an additional class', () => {
		const { container } = render(<SectionHeader className="test-class">SectionHeader text</SectionHeader>);

		const header = container.firstChild;

		expect(header).toHaveClass('header');
		expect(header).toHaveClass('test-class');
	});
});
