import { ChatMessage } from './ChatMessage';

import type { Meta, StoryObj } from '@storybook/react';

import '@/config/globals.scss';

const meta: Meta<typeof ChatMessage> = {
	title: 'atoms/ChatMessage',
	component: ChatMessage,
	tags: ['autodocs'],

	argTypes: {
		type: {
			description: 'где он будет располагаться',
		},
		title: {
			description: 'опциональный заголовок ',
		},
		extra: {
			description: 'нижний текст',
		},
	},
};
export default meta;

type Story = StoryObj<typeof ChatMessage>;

export const LeftMessage: Story = {
	args: {
		type: 'left',
		title: 'Войдите или зарегистрируйтесь',
	},
};

export const RightMessage: Story = {
	args: {
		type: 'right',
		title: 'mail@yandex.org',
	},
};

export const FullMessage: Story = {
	args: {
		type: 'left',
		title: 'Придумайте пароль для входа',
		extra: 'Установите пароль для входа через email, минимум 6 символов',
	},
};
