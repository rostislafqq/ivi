import { TextLink as TextLinkComponent } from './TextLink';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextLinkComponent> = {
	title: 'Atoms/Typography/TextLink',
	component: TextLinkComponent,
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
		href: {
			type: 'string',
			name: 'Link',
			description: 'URL ссылка',
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

type Story = StoryObj<typeof TextLinkComponent>;

export const TextLink: Story = {
	args: {
		children: 'Мой Иви',
		tag: 'div',
		href: 'https://www.ivi.ru/',
		className: '',
	},
};
