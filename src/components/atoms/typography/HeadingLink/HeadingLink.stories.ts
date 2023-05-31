import type { Meta, StoryObj } from '@storybook/react';

import { HeadingLink as HeadingLinkComponent } from './HeadingLink';

import '@/config/globals.scss';

const meta: Meta<typeof HeadingLinkComponent> = {
	title: 'Atoms/Typography/HeadingLink',
	component: HeadingLinkComponent,
	tags: ['autodocs'],
	argTypes: {
		tag: {
			type: 'string',
			name: 'Tag',
			description: 'Тег компонента h1, h2, ... h4',
			options: ['h1', 'h2', 'h3', 'h4'],
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
		},
		children: {
			type: 'string',
			name: 'Label',
			description: 'Содержимое',
		},
	},
};
export default meta;

type Story = StoryObj<typeof HeadingLinkComponent>;
export const HeadingLink: Story = {
	args: {
		children: 'Черепашки-ниндзя (2012) (Мультфильм 2012)',
		tag: 'h1',
		href: 'https://www.ivi.ru/collections/rekomenduem-vam-posmotret',
		className: '',
	},
};
