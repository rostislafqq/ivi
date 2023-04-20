import { render } from '@testing-library/react';
import React from 'react';

import { Text } from './Text';

describe('components/atoms/Text', () => {
	const text = (tag: string, content: string) => `
      <${tag}
        class="text test-class text--gray"
      >
        ${content}
      </${tag}>
    `;

	it('should renders an p element when tag prop is "p"', () => {
		const { getByText, container } = render(
			<Text tag="p" className="test-class">
				Test Text
			</Text>,
		);
		expect(getByText('Test Text')).toBeInTheDocument();
		expect(container.firstChild).toMatchInlineSnapshot(text('p', 'Test Text'));
	});

	it('should renders an span element when tag prop is "span"', () => {
		const { getByText, container } = render(
			<Text tag="span" className="test-class">
				Test Text
			</Text>,
		);
		expect(getByText('Test Text')).toBeInTheDocument();
		expect(container.firstChild).toMatchInlineSnapshot(text('span', 'Test Text'));
	});

	it('should renders an div element when tag prop is "div"', () => {
		const { getByText, container } = render(
			<Text tag="div" className="test-class">
				Test Text
			</Text>,
		);
		expect(getByText('Test Text')).toBeInTheDocument();
		expect(container.firstChild).toMatchInlineSnapshot(text('div', 'Test Text'));
	});

	it('renders a text with red color when color prop is "red"', () => {
		const { getByText, container } = render(
			<Text tag="p" color="red" className="test-class">
				Test Text
			</Text>,
		);
		expect(getByText('Test Text')).toBeInTheDocument();
		expect(container.firstChild).toHaveClass('text--red');
	});

	it('renders a text with blue color when color prop is "blue"', () => {
		const { getByText, container } = render(
			<Text tag="p" color="blue" className="test-class">
				Test Text
			</Text>,
		);
		expect(getByText('Test Text')).toBeInTheDocument();
		expect(container.firstChild).toHaveClass('text--blue');
	});

	it('renders a text with gray color by default', () => {
		const { getByText, container } = render(
			<Text tag="p" className="test-class">
				Test Text
			</Text>,
		);
		expect(getByText('Test Text')).toBeInTheDocument();
		expect(container.firstChild).toHaveClass('text--gray');
	});
});
