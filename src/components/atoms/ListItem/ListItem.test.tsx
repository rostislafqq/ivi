import { render } from '@testing-library/react';
import React from 'react';

import { ListItem } from './ListItem';

describe('components/atoms/ListItem', () => {
	const children = 'some text';
	it('should render li with child property  `some text` and classname list-square', () => {
		const type = 'square';
		const { getByText } = render(<ListItem type={type}>{children}</ListItem>);
		const listItem = getByText(children);
		expect(listItem).toBeInTheDocument();
		expect(listItem).toHaveTextContent('some text');
		expect(listItem.tagName).toBe('LI');
		expect(listItem).toHaveClass('list-square');
	});
	it('should render li whith child property  `some text` and classname list-circle + someClass', () => {
		const type = 'circle';
		const className = 'someClass';
		const { getByText } = render(
			<ListItem className={className} type={type}>
				{children}
			</ListItem>,
		);
		const listItem = getByText(children);
		expect(listItem).toBeInTheDocument();
		expect(listItem).toHaveTextContent('some text');
		expect(listItem.tagName).toBe('LI');
		expect(listItem).toHaveClass('list-circle', 'someClass');
	});
});
