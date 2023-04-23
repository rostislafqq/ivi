import { render } from '@testing-library/react';
import React from 'react';

import { Section } from './Section';

describe('components/atoms/Section', () => {
	it('should render with base props: id, children', () => {
		const { container, getByText } = render(<Section id="section">Section text</Section>);

		const section = container.firstChild;

		expect(section).toBeInTheDocument();
		expect(section).toHaveAttribute('id', 'section');
		expect(section).toHaveClass('section');
		expect(section?.nodeName).toBe('SECTION');
		expect(getByText('Section text')).toBeInTheDocument();
	});

	it('should render "div" when prop tag is "div"', () => {
		const { container, getByText } = render(
			<Section id="section" tag="div">
				Section text
			</Section>,
		);

		const section = container.firstChild;

		expect(section).toBeInTheDocument();
		expect(section).toHaveAttribute('id', 'section');
		expect(section).toHaveClass('section');
		expect(section?.nodeName).toBe('DIV');
		expect(getByText('Section text')).toBeInTheDocument();
	});

	it('should accept an additional class', () => {
		const { container } = render(
			<Section id="section" className="test-class">
				Section text
			</Section>,
		);

		const section = container.firstChild;

		expect(section).toHaveClass('section');
		expect(section).toHaveClass('test-class');
	});
});
