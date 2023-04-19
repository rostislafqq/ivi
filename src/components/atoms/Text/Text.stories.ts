import { Text as TextComponent } from './Text';

import '@/config/globals.scss';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextComponent> = {
	title: 'Atoms/Typography',
	component: TextComponent,
	argTypes: {
		tag: {
			type: 'string',
			name: 'Tag',
			description: 'Тег компонента',
			options: ['p', 'span', 'div'],
			control: {
				type: 'select',
			},
		},
		size: {
			type: 'string',
			name: 'Size',
			description: 'Размер',
			defaultValue: 'base',
			options: ['small', 'base'],
			control: {
				type: 'select',
			},
		},
		color: {
			type: 'string',
			name: 'Color',
			description: 'Цвет',
			defaultValue: 'gray',
			options: ['red', 'blue', 'gray'],
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
type Story = StoryObj<typeof TextComponent>;

export const Text: Story = {
	args: {
		children: 'Подписка',
		tag: 'p',
		size: 'base',
		color: 'gray',
		className: '',
	},
};
