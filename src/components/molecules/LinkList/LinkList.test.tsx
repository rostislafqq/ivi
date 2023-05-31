import { render } from '@testing-library/react';
import React from 'react';

import { TextLink } from '@components/atoms';

import { LinkList } from './LinkList';

describe('components/molecules/LinkList', () => {
	const itemsList = (
		<>
			<TextLink tag="span" href="test">
				item1
			</TextLink>
			<TextLink tag="span" href="test">
				item1
			</TextLink>
		</>
	);

	it('should render with children prop', () => {
		const { container } = render(<LinkList>{itemsList}</LinkList>);
		expect(container.firstChild).toBeInTheDocument();
	});

	it('should render with title and children props', () => {
		const { getByText } = render(<LinkList title="test">{itemsList}</LinkList>);
		const title = getByText('test');

		expect(title).toBeInTheDocument();
	});

	it('should render with isHorizontal prop is false with title', () => {
		const { container, getByText } = render(
			<LinkList isHorizontal={false} title="test">
				{itemsList}
			</LinkList>,
		);
		const title = getByText('test');

		expect(container.firstChild).toBeInTheDocument();
		expect(container.firstChild).toHaveClass('list--column');

		expect(title).toBeInTheDocument();
		expect(title).toHaveClass('title--column');
	});
});
