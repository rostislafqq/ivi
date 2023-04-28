import { render, fireEvent } from '@testing-library/react';
import React from 'react';

import { Button } from './Button';

import PlayIcon from '@assets/icons/play.svg';
import { Icon } from '@components/atoms';

describe('components/atoms/Button', () => {
	it('should render with base props: type', () => {
		const { getByRole } = render(<Button type="button">Button text</Button>);

		const btn = getByRole('button');

		expect(btn).toBeInTheDocument();
		expect(btn.textContent).toEqual('Button text');
		expect(btn).toHaveClass('btn');
		expect(btn).toHaveAttribute('type', 'button');
	});

	it('should render button-link with href prop', () => {
		const { getByRole } = render(<Button href="https://google.com">ButtonLink text</Button>);

		const link = getByRole('link');

		expect(link).toBeInTheDocument();
		expect(link.textContent).toEqual('ButtonLink text');
		expect(link).toHaveClass('btn');
		expect(link).toHaveAttribute('href', 'https://google.com');
	});

	it('should render icon inside', () => {
		const { getByTestId } = render(
			<Button type="button" icon={<Icon icon={PlayIcon} width={16} data-testid="icon" />}>
				Button text
			</Button>,
		);

		const icon = getByTestId('icon');

		expect(icon).toBeInTheDocument();
	});

	it('should render endIcon inside', () => {
		const { getByTestId } = render(
			<Button type="button" endIcon={<Icon icon={PlayIcon} width={16} data-testid="icon" />}>
				Button text
			</Button>,
		);

		const icon = getByTestId('icon');

		expect(icon).toBeInTheDocument();
	});

	it('should accept an additional class', () => {
		const { getByRole } = render(
			<Button className="test-class" size="normal" type="button">
				Button text
			</Button>,
		);

		const btn = getByRole('button');

		expect(btn).toBeInTheDocument();
		expect(btn).toHaveClass('btn');
		expect(btn).toHaveClass('btn--normal');
		expect(btn).toHaveClass('test-class');
	});

	it('should call the onClick function when clicked', () => {
		const onClickMock = jest.fn();

		const { getByRole } = render(
			<Button size="normal" type="button" onClick={onClickMock}>
				Button text
			</Button>,
		);

		fireEvent.click(getByRole('button'));

		expect(onClickMock).toHaveBeenCalled();
	});

	it('should render small button when size prop is "small"', () => {
		const { getByRole } = render(
			<Button size="small" type="button">
				Button text
			</Button>,
		);

		const btn = getByRole('button');

		expect(btn).toBeInTheDocument();
		expect(btn.textContent).toEqual('Button text');
		expect(btn).toHaveClass('btn');
		expect(btn).toHaveClass('btn--small');
	});

	it('should render normal button when size prop is "normal"', () => {
		const { getByRole } = render(
			<Button size="normal" type="button">
				Button text
			</Button>,
		);

		const btn = getByRole('button');

		expect(btn).toBeInTheDocument();
		expect(btn.textContent).toEqual('Button text');
		expect(btn).toHaveClass('btn');
		expect(btn).toHaveClass('btn--normal');
	});

	it('should render primary button when variant prop is "primary"', () => {
		const { getByRole } = render(
			<Button variant="primary" size="normal" type="button">
				Button text
			</Button>,
		);

		const btn = getByRole('button');

		expect(btn).toBeInTheDocument();
		expect(btn.textContent).toEqual('Button text');
		expect(btn).toHaveClass('btn');
		expect(btn).toHaveClass('btn--normal');
		expect(btn).toHaveClass('btn--primary');
	});

	it('should render primary-gradient button when variant prop is "primary-gradient"', () => {
		const { getByRole } = render(
			<Button variant="primary-gradient" size="normal" type="button">
				Button text
			</Button>,
		);

		const btn = getByRole('button');

		expect(btn).toBeInTheDocument();
		expect(btn.textContent).toEqual('Button text');
		expect(btn).toHaveClass('btn');
		expect(btn).toHaveClass('btn--normal');
		expect(btn).toHaveClass('btn--primary-gradient');
	});

	it('should render secondary button when variant prop is "secondary"', () => {
		const { getByRole } = render(
			<Button variant="secondary" size="normal" type="button">
				Button text
			</Button>,
		);

		const btn = getByRole('button');

		expect(btn).toBeInTheDocument();
		expect(btn.textContent).toEqual('Button text');
		expect(btn).toHaveClass('btn');
		expect(btn).toHaveClass('btn--normal');
		expect(btn).toHaveClass('btn--secondary');
	});
});
