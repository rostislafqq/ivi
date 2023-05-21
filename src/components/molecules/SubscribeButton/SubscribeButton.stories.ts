import type { Meta, StoryObj } from '@storybook/react';

import { SubscribeButton } from './SubscribeButton';

const meta: Meta<typeof SubscribeButton> = {
	title: 'Molecules/SubscribeButton',
	component: SubscribeButton,
	tags: ['autodocs'],
	argTypes: {
		children: {
			name: 'Label',
			description: 'Содержимое',
		},
		href: {
			description: 'URL ссылка',
		},
		className: {
			description: 'Добавить класс для Storybook',
		},
	},
};

export default meta;

type Story = StoryObj<typeof SubscribeButton>;
export const Default: Story = {
	args: {
		children: '30 дней подписки бесплатно',
		href: '/subscribe/',
	},
};
