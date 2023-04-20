import { ListItem } from './../../atoms/ListItem/ListItem';
import { List } from './List';

import type { Meta, StoryObj } from '@storybook/react';

import '@/config/globals.scss';

const meta: Meta<typeof List> = {
	title: 'Molecules/List',
	component: List,
	tags: ['autodocs'],
	argTypes: {
		children: {
			description: 'может принимать не только текст',
		},
	},
};
export default meta;

type Story = StoryObj<typeof List>;
export const DefaultChild: Story = {
	args: {
		
		children: [
			<ListItem>'fsd'</ListItem>
		},
		className: '',
		tag: 'ul',
	},
};
