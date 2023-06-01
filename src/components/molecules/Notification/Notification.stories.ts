import type { Meta, StoryObj } from '@storybook/react';

import { Notification } from './Notification';

const meta: Meta<typeof Notification> = {
	title: 'Molecules/Notification',
	component: Notification,
	tags: ['autodocs'],
	argTypes: {
		count: {
			description: 'Количество уведомлений',
		},
		className: {
			description: 'Добавить класс для Storybook',
		},
	},
};

export default meta;

type Story = StoryObj<typeof Notification>;

export const Default: Story = {
	args: {
		count: 0,
	},
};

export const WithNotifications: Story = {
	args: {
		count: 5,
	},
};

export const WithManyNotifications: Story = {
	args: {
		count: 15,
	},
};
