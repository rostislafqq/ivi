import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
	title: 'Molecules/Avatar',
	component: Avatar,
	tags: ['autodocs'],
	argTypes: {
		user: {
			description: 'Пользователь',
		},
	},
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const AnonymousUser: Story = {
	args: {},
};

export const AuthorizedUser: Story = {
	args: {
		user: {
			id: 1,
			firstName: 'Ильгиз',
			lastName: 'Аюпов',
		},
	},
};
