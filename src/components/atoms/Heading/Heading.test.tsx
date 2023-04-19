import { render } from '@testing-library/react';
import React from 'react';

import { Heading } from './Heading';

describe('components/atoms/Heading', () => {
	const heading = (tag: string, text: string) => `
      <${tag}
        class="heading test-class heading--${tag}"
      >
        ${text}
      </${tag}>
    `;

	it('should renders an h1 element when tag prop is "h1"', () => {
		const { getByText, container } = render(
			<Heading tag="h1" className="test-class">
				Test Heading
			</Heading>,
		);
		expect(getByText('Test Heading')).toBeInTheDocument();
		expect(container.firstChild).toMatchInlineSnapshot(heading('h1', 'Test Heading'));
	});

	it('should renders an h2 element when tag prop is "h2"', () => {
		const { getByText, container } = render(
			<Heading tag="h2" className="test-class">
				Test Heading
			</Heading>,
		);
		expect(getByText('Test Heading')).toBeInTheDocument();
		expect(container.firstChild).toMatchInlineSnapshot(heading('h2', 'Test Heading'));
	});

	it('should renders an h3 element when tag prop is "h3"', () => {
		const { getByText, container } = render(
			<Heading tag="h3" className="test-class">
				Test Heading
			</Heading>,
		);
		expect(getByText('Test Heading')).toBeInTheDocument();
		expect(container.firstChild).toMatchInlineSnapshot(heading('h3', 'Test Heading'));
	});

	it('should renders an h4 element when tag prop is "h4"', () => {
		const { getByText, container } = render(
			<Heading tag="h4" className="test-class">
				Test Heading
			</Heading>,
		);
		expect(getByText('Test Heading')).toBeInTheDocument();
		expect(container.firstChild).toMatchInlineSnapshot(heading('h4', 'Test Heading'));
	});

	it('should renders an h5 element when tag prop is "h5"', () => {
		const { getByText, container } = render(
			<Heading tag="h5" className="test-class">
				Test Heading
			</Heading>,
		);
		expect(getByText('Test Heading')).toBeInTheDocument();
		expect(container.firstChild).toMatchInlineSnapshot(heading('h5', 'Test Heading'));
	});
});
