import React from 'react';

import { Menu as MenuComponent } from './Menu';

import type { Meta, StoryObj } from '@storybook/react';

const LIST = [
	{ text: 'item 1', href: 'test' },
	{ text: 'item 2', href: 'test1' },
	{ text: 'item 3', href: 'test2' },
	{ text: 'item 4', href: 'test3' },
];

const meta: Meta<typeof MenuComponent> = {
	title: 'Molecules/Menu',
	component: MenuComponent,
	tags: ['autodocs'],
	argTypes: {
		linksList: {
			name: 'links list',
		},
		title: {
			type: 'string',
			name: 'title',
			description: 'Добавить заголовок для меню',
			control: 'text',
		},
		isHorizontal: {
			type: 'boolean',
			name: 'isHorizontal',
			description: '',
			control: 'boolean',
		},
	},
	args: { linksList: LIST },
};

export default meta;

type Story = StoryObj<typeof MenuComponent>;

export const Default: Story = {
	render: (args) => <MenuComponent {...args} />,
};

export const Vertical: Story = {
	render: (arg) => <MenuComponent {...arg} />,
	args: {
		isHorizontal: false,
	},
};

export const MenuWithTitle: Story = {
	render: (arg) => <MenuComponent {...arg} />,
	args: {
		title: 'Title',
		isHorizontal: false,
	},
};
