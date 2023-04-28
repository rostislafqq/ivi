import { Button } from './Button';

import { mapping, options } from '@app/data/iconsStorybookOptions';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
	title: 'Atoms/Buttons/Button',
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
		href: {
			type: 'string',
			name: 'Link',
			description: 'URL ссылка',
			defaultValue: '',
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
		icon: {
			name: 'Icon',
			description: 'Иконка в начале',
			mapping,
			options,
		},
		endIcon: {
			name: 'End Icon',
			description: 'Иконка в конце',
			mapping,
			options,
		},
		children: {
			type: 'string',
			name: 'Label',
			description: 'Содержимое',
			control: {
				type: 'text',
			},
		},
		onClick: {
			type: 'function',
			action: 'click',
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

export const ButtonLink: Story = {
	args: {
		children: 'Смотреть по подписке',
		size: 'small',
		type: 'button',
		variant: 'primary',
		href: 'https://www.ivi.ru/watch/504121',
		className: '',
	},
};
