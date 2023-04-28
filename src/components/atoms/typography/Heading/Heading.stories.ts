import { Heading as HeadingComponent } from './Heading';

import type { Meta, StoryObj } from '@storybook/react';

import '@/config/globals.scss';

const meta: Meta<typeof HeadingComponent> = {
	title: 'Atoms/Typography/Heading',
	component: HeadingComponent,
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

type Story = StoryObj<typeof HeadingComponent>;
export const Heading: Story = {
	args: {
		children: 'Черепашки-ниндзя (2012) (Мультфильм 2012)',
		tag: 'h1',
		className: '',
	},
};
