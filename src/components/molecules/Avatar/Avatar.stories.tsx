import React from 'react';

import { Avatar } from './Avatar';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Avatar> = {
	title: 'Molecules/Avatar',
	component: Avatar,
	tags: ['autodocs'],
	argTypes: {
		href: {
			type: 'string',
			name: 'href',
			description: 'адрес страницы личого кабинета',
		},
		isAuth: {
			type: 'boolean',
			name: 'isAuth',
			description: '',
			control: 'boolean',
		},
		onMouseOver: {
			type: 'function',
		},
		onMouseOut: {
			type: 'function',
		},
	},
	args: {
		href: '#test',
		isAuth: false,
		login: '',
	},
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Anonymous: Story = {
	render: (args) => <Avatar {...args} />,
};

export const AuthorizedUser: Story = {
	render: (args) => <Avatar {...args} />,
	args: {
		isAuth: true,
		login: 'user',
	},
};
