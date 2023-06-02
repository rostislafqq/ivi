import { render } from '@testing-library/react';
import React from 'react';

import { Header } from './Header';

describe('Header', () => {
	const navbarItems = [
		{
			label: 'Главная',
			href: '/',
		},
		{
			label: ' Фильмы',
			href: '/films',
		},
		{
			label: 'Сериалы',
			href: '/serials',
		},
		{
			label: 'Мультфильмы',
			href: '/animations',
		},
	];

	it('should render Header component', () => {
		const { container } = render(<Header />);

		expect(container.firstElementChild).toBeInTheDocument();
	});

	it('should accept an additional class', () => {
		const { container } = render(<Header className="test-class" />);

		expect(container.firstElementChild).toHaveClass('header');
		expect(container.firstElementChild).toHaveClass('test-class');
	});

	it('should correctly render navbar items', () => {
		const { getByText } = render(<Header />);

		navbarItems.forEach((item) => {
			expect(getByText(item.label)).toBeInTheDocument();
			expect(getByText(item.label)).toHaveAttribute('href', item.href);
		});
	});

	it('should render subscribe button', () => {
		const { getByTestId } = render(<Header />);

		expect(getByTestId('header-subscribeBtn')).toBeInTheDocument();
	});

	it('should render Notification', () => {
		const { getByTestId } = render(<Header />);

		expect(getByTestId('header-notification')).toBeInTheDocument();
	});

	it('should render Avatar', () => {
		const { getByTestId } = render(<Header />);

		expect(getByTestId('header-avatar')).toBeInTheDocument();
	});
});
