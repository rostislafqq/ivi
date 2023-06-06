import { render, fireEvent } from '@testing-library/react';
import React from 'react';

import { capitalize } from '@/app/utils';

import type { SortByOptionType } from './SortBy.types';

import { SortBy } from './SortBy';

describe('SortBy', () => {
	const options: SortByOptionType[] = [
		{
			label: 'Option 1',
			value: 'option-1',
		},
		{
			label: 'Option 2',
			value: 'option-2',
		},
		{
			label: 'Option 3',
			value: 'option-3',
		},
	];

	const setSelectedOption = jest.fn();

	it('should render SortBy component', () => {
		const { container } = render(
			<SortBy options={options} selectedOption={options[0]} setSelectedOption={setSelectedOption} />,
		);

		expect(container.firstElementChild).toBeInTheDocument();
	});

	it('should accept an additional class', () => {
		const { container } = render(
			<SortBy
				className="test-class"
				options={options}
				selectedOption={options[0]}
				setSelectedOption={setSelectedOption}
			/>,
		);

		expect(container.firstElementChild).toHaveClass('sort');
		expect(container.firstElementChild).toHaveClass('test-class');
	});

	it('should accept additional props', () => {
		const { container } = render(
			<SortBy
				options={options}
				selectedOption={options[0]}
				setSelectedOption={setSelectedOption}
				data-test="test-value"
			/>,
		);

		expect(container.firstElementChild).toHaveAttribute('data-test', 'test-value');
	});

	it('should correctly display the selected option', () => {
		const { getByRole } = render(
			<SortBy options={options} selectedOption={options[0]} setSelectedOption={setSelectedOption} />,
		);

		const btn = getByRole('button', { name: `По ${options[0].label}` });

		options.forEach((option) => {
			const itemBtn = getByRole('button', { name: capitalize(option.label) });
			fireEvent.click(itemBtn);

			expect(btn.textContent).toBe(`По ${options[0].label}`);
		});
	});

	it('should correctly add a rotation class for the arrow when the button is pressed', () => {
		const { getByTestId, getByRole } = render(
			<SortBy options={options} selectedOption={options[0]} setSelectedOption={setSelectedOption} />,
		);

		const btn = getByRole('button', { name: `По ${options[0].label}` });
		const arrow = getByTestId('sort-by-arrow');

		expect(arrow).not.toHaveClass('sort-btn__arrowIcon--rotated');
		fireEvent.click(btn);
		expect(arrow).toHaveClass('sort-btn__arrowIcon--rotated');
	});

	it('should correctly add an opening class to the menu when the button is pressed', () => {
		const { getByTestId, getByRole } = render(
			<SortBy options={options} selectedOption={options[0]} setSelectedOption={setSelectedOption} />,
		);

		const btn = getByRole('button', { name: `По ${options[0].label}` });
		const menu = getByTestId('sort-by-menu');

		expect(menu).not.toHaveClass('sort-menu--opened');
		fireEvent.click(btn);
		expect(menu).toHaveClass('sort-menu--opened');
	});

	it('should correctly render the options inside', () => {
		const { getAllByTestId } = render(
			<SortBy options={options} selectedOption={options[0]} setSelectedOption={setSelectedOption} />,
		);

		const items = getAllByTestId('sort-by-item');
		expect(items.length).toBe(options.length);

		items.forEach((option, index) => {
			expect(option.textContent).toBe(options[index].label);
		});
	});
});
