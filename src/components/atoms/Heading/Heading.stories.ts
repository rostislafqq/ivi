import { Heading as HeadingComponent } from './Heading';

import type { Meta, StoryObj } from '@storybook/react';

import '@/config/globals.scss';

const meta: Meta<typeof HeadingComponent> = {
	title: 'Atoms/Typography',
	component: HeadingComponent,
	argTypes: {
		tag: {
			type: 'string',
			name: 'Tag',
			description: 'Тег компонента h1, h2, ... h5',
			options: ['h1', 'h2', 'h3', 'h4', 'h5'],
			control: {
				type: 'select',
			},
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
	tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof HeadingComponent>;
export const Heading: Story = {
	args: {
		children: 'Черепашки-ниндзя (2012) (Мультфильм 2012)',
		tag: 'h1',
		className: '',
	},
};
