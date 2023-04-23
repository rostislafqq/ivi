import { Button } from './Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
	title: 'Atoms/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		size: {
			type: 'string',
			name: 'Size',
			description: 'Размер',
			options: ['small', 'normal'],
			control: {
				type: 'select',
			},
		},
		type: {
			type: 'string',
			name: 'Type',
			description: 'Тип кнопки',
			defaultValue: 'button',
			options: ['button', 'submit', 'reset'],
			control: {
				type: 'select',
			},
		},
		variant: {
			type: 'string',
			name: 'Variant',
			description: 'Варианты кнопок',
			options: ['primary', 'primary-gradient', 'secondary'],
			control: {
				type: 'select',
			},
		},
		className: {
			type: 'string',
			name: 'className',
			description: 'Добавить класс для StoryBook',
			defaultValue: '',
		},
		children: {
			type: 'string',
			name: 'Label',
			description: 'Содержимое',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		children: 'Смотреть по подписке',
		size: 'small',
		type: 'button',
		variant: 'primary',
		className: '',
	},
};

export const PrimaryGradient: Story = {
	args: {
		children: 'Оплатить подписку',
		size: 'small',
		type: 'button',
		variant: 'primary-gradient',
		className: '',
	},
};

export const Secondary: Story = {
	args: {
		children: 'Показать ещё',
		size: 'small',
		type: 'button',
		variant: 'secondary',
		className: '',
	},
};
