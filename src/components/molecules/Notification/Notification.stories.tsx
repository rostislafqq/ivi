import React from 'react';

import { Notification } from './Notification';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Notification> = {
	title: 'Molecules/Notification',
	component: Notification,
	tags: ['autodocs'],
	argTypes: {
		href: {
			type: 'string',
			name: 'href',
			description: 'ссылка на страницу уведомлений',
		},
		count: {
			type: 'number',
			name: 'count',
			description: 'количество уведомлений',
		},
	},
	args: {
		href: '#test',
		count: 0,
	},
};

export default meta;

type Story = StoryObj<typeof Notification>;

export const Default: Story = {
	render: (args) => <Notification {...args} />,
};

export const withValue: Story = {
	render: (args) => <Notification {...args} />,
	args: {
		count: 9,
	},
};

export const withBigValue: Story = {
	render: (args) => <Notification {...args} />,
	args: {
		count: 1000,
	},
};
