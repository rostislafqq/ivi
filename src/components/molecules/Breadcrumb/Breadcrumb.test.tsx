import { render } from '@testing-library/react';
import React from 'react';

import { Breadcrumb } from './Breadcrumb';
import { Item } from './Breadcrumb.types';

describe('components/molecules/Breadcrumb', () => {
	const items: Item[] = [
		{
			label: 'Главная',
			href: '/',
		},
		{
			label: 'Фильмы',
			href: '/films',
		},
		{
			label: 'Зарубежные',
			href: '/films/foreign',
			active: true,
		},
	];

	it('should render with base props: items, variant', () => {
		const { container, getByText } = render(<Breadcrumb items={items} variant="classic" />);

		expect(container.firstChild).toBeInTheDocument();
		items.forEach((item) => {
			expect(getByText(item.label)).toBeInTheDocument();
		});
		expect(container.firstChild).toHaveClass('breadcrumb--classic');
	});

	it('should accept an additional class', () => {
		const { container } = render(<Breadcrumb className="test-class" items={items} variant="classic" />);

		expect(container.firstChild).toHaveClass('test-class');
	});

	it('should render classic breadcrumb when variant prop is "classic"', () => {
		const { container } = render(<Breadcrumb className="test-class" items={items} variant="classic" />);

		expect(container.firstChild).toHaveClass('breadcrumb--classic');
		expect(container.firstChild).toHaveClass('test-class');
	});

	it('should render modern breadcrumb when variant prop is "modern"', () => {
		const { container } = render(<Breadcrumb className="test-class" items={items} variant="modern" />);

		expect(container.firstChild).toHaveClass('breadcrumb--modern');
		expect(container.firstChild).toHaveClass('test-class');
	});
});
