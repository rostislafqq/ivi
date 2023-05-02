import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { Avatar } from '@components/molecules';

describe('components/molecules/Avatar', () => {
	const onMouseOverHandler = jest.fn();
	const onMouseOutHandler = jest.fn();

	it('should render with href prop and default props', () => {
		const { container, getByTestId } = render(
			<Avatar href="https://google.com" onMouseOver={onMouseOverHandler} onMouseOut={onMouseOutHandler} />,
		);
		const icon = getByTestId('icon');

		expect(container.firstChild).toBeInTheDocument();
		expect(icon).toBeInTheDocument();
		expect(container.firstChild).toHaveAttribute('href', 'https://google.com');
	});

	it('should render with isAuth is true prop and login prop', () => {
		const { container, getByText } = render(
			<Avatar
				href="https://google.com"
				isAuth
				login="test"
				onMouseOver={onMouseOverHandler}
				onMouseOut={onMouseOutHandler}
			/>,
		);
		const user = getByText('T');

		expect(container.firstChild).toBeInTheDocument();
		expect(container.firstChild).toHaveClass('wrapper--auth');
		expect(container.firstChild).toHaveAttribute('href', 'https://google.com');

		expect(user).toBeInTheDocument();
	});

	it('should calls onMouseOver and onMouseOut when mouse over and mouse out', () => {
		const { getByRole } = render(
			<Avatar
				href="https://google.com"
				isAuth={false}
				onMouseOver={onMouseOverHandler}
				onMouseOut={onMouseOutHandler}
			/>,
		);

		const link = getByRole('link');
		expect(link).toBeInTheDocument();

		fireEvent.mouseOver(link);
		expect(onMouseOverHandler).toHaveBeenCalledTimes(1);

		fireEvent.mouseOut(link);
		expect(onMouseOutHandler).toHaveBeenCalledTimes(1);
	});
});
