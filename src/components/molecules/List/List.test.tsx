import { render } from '@testing-library/react';
import React from 'react';

import { List } from './List';

describe('components/atoms/ListItem', () => {
	const children = <li>some text</li>;
	it('should render ul with child li with some parameters ', () => {
		const { getByRole, getByText } = render(<List tag="ul">{children}</List>);
		const ulItem = getByRole('list');
		expect(ulItem.tagName).toBe('UL');
		expect(ulItem).toHaveClass('list');
		// li
		const liItem = getByText('some text');
		expect(liItem).toBeInTheDocument();
		expect(liItem.tagName).toBe('LI');
		expect(liItem).toHaveTextContent('some text');
	});

	it('should render ol with classes `list , someClass` ', () => {
		const className = 'someClass';
		const { getByRole } = render(
			<List className={className} tag="ol">
				{children}
			</List>,
		);
		const ulItem = getByRole('list');
		expect(ulItem.tagName).toBe('OL');
		expect(ulItem).toHaveClass('list', 'someClass');
	});
});
