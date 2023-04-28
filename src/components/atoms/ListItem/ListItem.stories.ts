import { ListItem } from './ListItem';

import type { Meta, StoryObj } from '@storybook/react';

import '@/config/globals.scss';

const meta: Meta<typeof ListItem> = {
	title: 'Atoms/ListItem',
	component: ListItem,
	tags: ['autodocs'],
	argTypes: {
		children: {
			description: 'может принимать не только текст',
		},
	},
};
export default meta;

type Story = StoryObj<typeof ListItem>;
export const DefaultItem: Story = {
	args: {
		children:
			'уникальная рекомендательная система, учитывающая ваши предпочтения и предлагающая посмотреть именно то, что точно придется вам по душе;',
	},
};

export const SquareItem: Story = {
	args: {
		children:
			'уникальная рекомендательная система, учитывающая ваши предпочтения и предлагающая посмотреть именно то, что точно придется вам по душе;',
		type: 'square',
	},
};
