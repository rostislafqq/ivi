import { fireEvent, render } from '@testing-library/react';
import { Notification } from './Notification';

describe('components/molecules/Notification', () => {
	it('should render with empty count', () => {
		const { getByRole, getByTestId } = render(<Notification count={0} href={'https://google.com'} />);

		const link = getByRole('link');
		const icon = getByTestId('empty-icon');

		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute('href', 'https://google.com');

		expect(icon).toBeInTheDocument();
		expect(icon).toHaveClass('icon--empty');
	});

	it('should render with count prop is 9', () => {
		const { getByRole, getByText, getByTestId } = render(<Notification count={9} href={'https://google.com'} />);

		const link = getByRole('link');
		const icon = getByTestId('icon');
		const counter = getByText('9');

		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute('href', 'https://google.com');

		expect(icon).toBeInTheDocument();

		expect(counter).toBeInTheDocument();
	});

	it('should render with count prop more than 99', () => {
		const { getByRole, getByText, getByTestId } = render(<Notification count={100} href={'https://google.com'} />);

		const link = getByRole('link');
		const icon = getByTestId('icon');
		const counter = getByText('99+');

		expect(link).toBeInTheDocument();
		expect(icon).toBeInTheDocument();

		expect(counter).toBeInTheDocument();
	});

	it('should calls onMouseOver and onMouseOut when mouse over and mouse out', () => {
		const onMouseOverHandler = jest.fn();
		const onMouseOutHandler = jest.fn();

		const { getByRole } = render(
			<Notification
				count={9}
				href={'https://google.com'}
				onMouseOut={onMouseOutHandler}
				onMouseOver={onMouseOverHandler}
			/>,
		);

		const link = getByRole('link');

		fireEvent.mouseOver(link);
		expect(onMouseOverHandler).toHaveBeenCalledTimes(1);

		fireEvent.mouseOut(link);
		expect(onMouseOutHandler).toHaveBeenCalledTimes(1);
	});
});
