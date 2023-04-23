import { IconButton } from './IconButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof IconButton> = {
	title: 'Atoms/IconButton',
	component: IconButton,
	tags: ['autodocs'],
	argTypes: {
		size: {
			type: 'string',
			name: 'Size',
			description: 'Размер',
			options: ['normal', 'big'],
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
			name: 'Icon',
			description: 'Содержимое',
		},
	},
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
	args: {
		children: '',
		size: 'normal',
		type: 'button',
		variant: 'primary',
		className: '',
	},
};

export const PrimaryGradient: Story = {
	args: {
		children: '',
		size: 'normal',
		type: 'button',
		variant: 'primary-gradient',
		className: '',
	},
};

export const Secondary: Story = {
	args: {
		children: '',
		size: 'normal',
		type: 'button',
		variant: 'secondary',
		className: '',
	},
};
