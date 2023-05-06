import React from 'react';

import { NavBar as NavBarComponent } from './NavBar';

import { Button, TextLink } from '@components/atoms';
import { LinkList } from '@components/molecules/LinkList/LinkList';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NavBarComponent> = {
	title: 'Molecules/NavBar',
	component: NavBarComponent,
	tags: ['autodocs'],
	argTypes: {
		isSeporator: {
			type: 'boolean',
			name: 'separator',
			description: 'разделитель',
			control: 'boolean',
		},
		menu: {
			type: 'function',
			name: 'menu',
			description: 'Добавить меню',
		},
		actionGroup: {
			type: 'function',
			name: 'action group',
			description: 'Добавить меню пользователя',
		},
	},
	args: {
		menu: (
			<LinkList>
				<TextLink tag="span" href="test">
					item1
				</TextLink>
				<TextLink tag="span" href="test">
					item2
				</TextLink>
				<TextLink tag="span" href="test">
					item3
				</TextLink>
			</LinkList>
		),
		actionGroup: (
			<div>
				<Button variant="primary-gradient" size="small">
					Оплатить подписку
				</Button>
			</div>
		),
	},
};

export default meta;
type Story = StoryObj<typeof NavBarComponent>;

export const Default: Story = {
	render: (arg) => <NavBarComponent {...arg} />,
	args: {
		actionGroup: (
			<div>
				<Button variant="primary-gradient" size="small">
					Оплатить подписку
				</Button>
			</div>
		),
	},
};

export const withoutMenu: Story = {
	render: (arg) => <NavBarComponent {...arg} />,
	args: {
		menu: false,
	},
};

export const withSeporator: Story = {
	render: (arg) => <NavBarComponent {...arg} />,
	args: {
		isSeporator: true,
	},
};
