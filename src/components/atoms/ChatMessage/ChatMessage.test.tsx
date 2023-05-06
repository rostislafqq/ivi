import { render } from '@testing-library/react';

import React from 'react';

import { ChatMessage } from './ChatMessage';

describe('components/atoms/ChatMessage/', () => {
	it('component should be empty', () => {
		const { getByTestId } = render(<ChatMessage type="left" />);
		const block = getByTestId('chat-message');
		expect(block).toBeInTheDocument();
		expect(block).toBeEmptyDOMElement();
		expect(block).toHaveClass('message__left');
	});

	it('shuold correct rendered', () => {
		const { getByText } = render(<ChatMessage type="right" title="title" extra="extra" />);
		const title = getByText('title');
		expect(title.tagName).toBe('H4');
		expect(title).toHaveTextContent('title');
		expect(title).toHaveClass('heading heading--h4');

		const extra = getByText('extra');
		expect(extra.tagName).toBe('SPAN');
		expect(extra).toHaveTextContent('extra');

		const block = title.parentElement;
		expect(block).toHaveClass('message__right');
	});
});
