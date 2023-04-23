import { ButtonWithIcon } from './ButtonWithIcon';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ButtonWithIcon> = {
	title: 'Atoms/ButtonWithIcon',
	component: ButtonWithIcon,
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
			options: ['button', 'submit', 'reset'],
			defaultValue: 'button',
			control: {
				type: 'select',
			},
		},
		icon: {
			type: 'string',
			name: 'Icon',
			description: 'Svg иконка',
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

type Story = StoryObj<typeof ButtonWithIcon>;

export const Primary: Story = {
	args: {
		children: 'Смотреть по подписке',
		size: 'small',
		type: 'button',
		icon: '',
		variant: 'primary',
		className: '',
	},
};

export const PrimaryGradient: Story = {
	args: {
		children: 'Оплатить подписку',
		size: 'small',
		type: 'button',
		icon: '',
		variant: 'primary-gradient',
		className: '',
	},
};

export const Secondary: Story = {
	args: {
		children: 'Показать ещё',
		size: 'small',
		type: 'button',
		icon: '',
		variant: 'secondary',
		className: '',
	},
};
