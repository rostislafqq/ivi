import { render } from '@testing-library/react';
import React from 'react';

import { NavBar } from './NavBar';

import { Button } from '@components/atoms';
import { Menu } from '@components/molecules/Menu/Menu';

describe('components/molecules/NavBar', () => {
	const menu = (
		<Menu
			linksList={[
				{ text: 'item 1', href: 'test' },
				{ text: 'item 2', href: 'test2' },
			]}
		/>
	);

	const actionGroup = (
		<div>
			<Button variant="primary-gradient" size="small">
				Оплатить подписку
			</Button>
		</div>
	);

	it('should render with menu and actionGroup', () => {
		const { container } = render(<NavBar />);

		expect(container.firstChild).toBeInTheDocument();
		expect(container.firstChild).toHaveClass('container');
		expect(container.firstChild).toHaveClass('wrapper');
	});

	it('should render with menu', () => {
		const { container } = render(<NavBar menu={menu} />);

		expect(container.firstChild).toBeInTheDocument();
	});

	it('should render with actions group', () => {
		const { container } = render(<NavBar actionGroup={actionGroup} />);

		expect(container.firstChild).toBeInTheDocument();
	});

	it('should render with menu and actions group ', () => {
		const { container } = render(<NavBar menu={menu} actionGroup={actionGroup} />);

		expect(container.firstChild).toBeInTheDocument();
	});

	it('should render with menu, actions group and seporator', () => {
		const { container } = render(<NavBar menu={menu} actionGroup={actionGroup} isSeporator />);

		expect(container.firstChild).toBeInTheDocument();
		expect(container.firstChild).toHaveClass('wrapper--borderBottom');
	});
});
