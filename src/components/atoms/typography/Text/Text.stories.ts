import type { Meta, StoryObj } from '@storybook/react';

import { Text as TextComponent } from './Text';

import '@/config/globals.scss';

const meta: Meta<typeof TextComponent> = {
	title: 'Atoms/Typography/Text',
	component: TextComponent,
	tags: ['autodocs'],
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
		className: '',
	},
};
