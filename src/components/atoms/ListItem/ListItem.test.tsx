import { render } from '@testing-library/react';
import React from 'react';

import { ListItem } from './ListItem';

describe('components/atoms/ListItem', () => {
	const children = 'some text';
	it('should render li with child propertys `some text` and cn list-square', () => {
		const { getByText } = render(<ListItem type="square">{children}</ListItem>);
		const listItem = getByText(children);
		expect(listItem).toBeInTheDocument();
		expect(listItem).toHaveTextContent('some text');
		expect(listItem.tagName).toBe('LI');
		expect(listItem).toHaveClass('list-square');
	});

	it('should render li whith child propertys `some text` and cn list-circle + someClass', () => {
		const { getByText } = render(
			<ListItem className="someClass" type="circle">
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
