import React from 'react';

import { TextLink } from '@components/atoms';

import type { Meta, StoryObj } from '@storybook/react';

import { LinkList } from './LinkList';

const meta: Meta<typeof LinkList> = {
	title: 'Molecules/LinkList',
	component: LinkList,
	tags: ['autodocs'],
	argTypes: {
		children: {
			type: 'function',
			name: 'link',
			description: 'содержимое меню',
		},
		title: {
			type: 'string',
			name: 'title',
			description: 'Добавить заголовок для меню',
			control: 'text',
		},
		isHorizontal: {
			type: 'boolean',
			name: 'isHorizontal',
			description: '',
			control: 'boolean',
		},
	},
	args: {
		children: (
			<>
				<TextLink tag="span" href="test">
					item1
				</TextLink>
				<TextLink tag="span" href="test">
					item2
				</TextLink>
				<TextLink tag="span" href="test">
					item3
				</TextLink>
			</>
		),
	},
};

export default meta;

type Story = StoryObj<typeof LinkList>;

export const Default: Story = {
	render: (args) => <LinkList {...args} />,
};

export const Vertical: Story = {
	render: (arg) => <LinkList {...arg} />,
	args: {
		isHorizontal: false,
	},
};

export const WithTitle: Story = {
	render: (arg) => <LinkList {...arg} />,
	args: {
		title: 'Title',
		isHorizontal: false,
	},
};
