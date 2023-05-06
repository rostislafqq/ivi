import { render } from '@testing-library/react';
import React from 'react';

import { SectionHeading } from './SectionHeading';

describe('components/atoms/sections/SectionHeading', () => {
	it('should render h1 tag when tag is "h1"', () => {
		const { container } = render(<SectionHeading tag="h1">Section Heading text</SectionHeading>);

		expect(container.firstChild?.nodeName).toBe('H1');
	});

	it('should render h2 tag when tag is "h2"', () => {
		const { container } = render(<SectionHeading tag="h2">Section Heading text</SectionHeading>);

		expect(container.firstChild?.nodeName).toBe('H2');
	});

	it('should render h3 tag when tag is "h3"', () => {
		const { container } = render(<SectionHeading tag="h3">Section Heading text</SectionHeading>);

		expect(container.firstChild?.nodeName).toBe('H3');
	});

	it('should accept an additional class', () => {
		const { container } = render(
			<SectionHeading className="test-class" tag="h2">
				Section Heading text
			</SectionHeading>,
		);

		expect(container.firstChild).toHaveClass('section-heading');
		expect(container.firstChild).toHaveClass('test-class');
	});

	it('should render link inside when href prop not empty', () => {
		const { getByRole } = render(
			<SectionHeading tag="h2" href="https://google.com">
				Section Heading text
			</SectionHeading>,
		);

		const link = getByRole('link');

		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute('href', 'https://google.com');
	});

	it('should render arrow when arrow prop is "true"', () => {
		const { container, getByTestId } = render(
			<SectionHeading tag="h2" arrow>
				Section Heading text
			</SectionHeading>,
		);

		const arrowIcon = getByTestId('icon');

		expect(container.firstChild).toHaveClass('section-heading--arrow');
		expect(arrowIcon).toBeInTheDocument();
		expect(arrowIcon).toHaveClass('arrow');
	});

	it('should render underline when underline prop is "true"', () => {
		const { container } = render(
			<SectionHeading tag="h2" underline>
				Section Heading text
			</SectionHeading>,
		);

		expect(container.firstChild).toHaveClass('section-heading--underline');
	});

	it('should render a counter when counting prop greater than zero', () => {
		const { getByTestId } = render(
			<SectionHeading tag="h2" count={89}>
				Section Heading text
			</SectionHeading>,
		);

		const badge = getByTestId('badge');

		expect(badge).toBeInTheDocument();
		expect(badge).toHaveClass('badge');
		expect(badge).toHaveClass('section-heading__badge');
	});
});
