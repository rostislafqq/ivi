import { render, fireEvent } from '@testing-library/react';
import React from 'react';

import { Notification } from './Notification';

describe('components/molecules/Notification', () => {
	it('should render component', () => {
		const { container } = render(<Notification count={5} />);

		expect(container.firstElementChild).toBeInTheDocument();
		expect(container.firstElementChild).toHaveClass('notification');
	});

	it('should accept an additional class', () => {
		const { container } = render(<Notification className="test-class" count={5} />);

		expect(container.firstElementChild).toHaveClass('notification');
		expect(container.firstElementChild).toHaveClass('test-class');
	});

	it('should display correct link', () => {
		const { getByRole } = render(<Notification count={5} />);

		expect(getByRole('link')).toHaveAttribute('href', '/notification');
	});

	it('should render counter when counter prop > 0', () => {
		const { getByTestId } = render(<Notification count={5} />);

		expect(getByTestId('notification-counter')).toBeInTheDocument();
		expect(getByTestId('notification-counter').textContent).toBe('5');
	});

	it('should correct display when counter prop > 9', () => {
		const { getByTestId } = render(<Notification count={10} />);

		expect(getByTestId('notification-counter')).toBeInTheDocument();
		expect(getByTestId('notification-counter').textContent).toBe('9+');
	});

	it('should added the hover class for icon on hover', () => {
		const { getByRole, getByTestId } = render(<Notification count={5} />);

		fireEvent.mouseEnter(getByRole('link'));
		expect(getByTestId('notification-icon')).toHaveClass('notification__icon');
		expect(getByTestId('notification-icon')).toHaveClass('notification__icon--hovered');

		fireEvent.mouseLeave(getByRole('link'));
		expect(getByTestId('notification-icon')).toHaveClass('notification__icon');
	});

	it('should added the animated class for icon when counter > 0', () => {
		const { getByTestId } = render(<Notification count={5} />);

		expect(getByTestId('notification-icon')).toHaveClass('notification__icon');
		expect(getByTestId('notification-icon')).toHaveClass('notification__icon--animated');
	});

	it('should added the many class for counter when counter prop > 9', () => {
		const { getByTestId } = render(<Notification count={15} />);

		expect(getByTestId('notification-counter')).toHaveClass('notification__counter--many');
	});
});
