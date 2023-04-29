import { render, fireEvent } from '@testing-library/react';
import React from 'react';

import { TextLink } from './TextLink';

describe('components/atoms/typography/TextLink', () => {
	it('should render the link inside the TextLink component', () => {
		const { container, getByRole } = render(
			<TextLink tag="div" href="https://google.com">
				Text Link text
			</TextLink>,
		);

		const link = getByRole('link');

		expect(container.firstChild).toBeInTheDocument();
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute('href', 'https://google.com');
	});

	it('should calls onMouseOver and onMouseOut when mouse over and mouse out', () => {
		const onMouseOverHandler = jest.fn();
		const onMouseOutHandler = jest.fn();

		const { getByRole } = render(
			<TextLink
				tag="div"
				href="https://google.com"
				onMouseOver={onMouseOverHandler}
				onMouseOut={onMouseOutHandler}
			>
				Text Link text
			</TextLink>,
		);

		const link = getByRole('link');

		fireEvent.mouseOver(link);
		expect(onMouseOverHandler).toHaveBeenCalledTimes(1);

		fireEvent.mouseOut(link);
		expect(onMouseOutHandler).toHaveBeenCalledTimes(1);
	});
});
