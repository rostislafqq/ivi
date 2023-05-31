import { render } from '@testing-library/react';
import React from 'react';

import { UserType } from '@/app/types';

import { Avatar } from './Avatar';

describe('components/molecules/Avatar', () => {
	const user: UserType = {
		id: 999,
		firstName: 'firstName',
		lastName: 'lastName',
	};

	it('should render component', () => {
		const { container } = render(<Avatar />);

		expect(container.firstElementChild).toBeInTheDocument();
	});

	it('the link should lead the user to his personal account if the user is not empty', () => {
		const { getByRole } = render(<Avatar user={user} />);

		expect(getByRole('link')).toHaveAttribute('href', `/person/${user.id}`);
	});

	it('the link should lead to the authorization page if the user is empty', () => {
		const { getByRole } = render(<Avatar />);

		expect(getByRole('link')).toHaveAttribute('href', '/auth');
	});

	it('should render user initials when user is not empty', () => {
		const { getByTestId } = render(<Avatar user={user} />);

		expect(getByTestId('user-initials')).toBeInTheDocument();
	});

	it('should correct display user initials', () => {
		const { getByText } = render(<Avatar user={user} />);

		expect(getByText(`${user.firstName[0]} ${user.lastName[0]}`));
	});

	it('should render user icon when user is empty', () => {
		const { getByTestId } = render(<Avatar />);

		expect(getByTestId('user-icon'));
	});
});
