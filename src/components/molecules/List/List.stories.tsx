import React from 'react';

import { defaultContentItems } from '@/app/data/defaultContentItems';

import { ListItem } from '../../atoms/ListItem/ListItem';

import type { Meta, StoryObj } from '@storybook/react';

import { List } from './List';

import styles from './List.module.scss';

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

export const DefaultList: Story = {
	render: (args) => (
		<List tag={args.tag}>
			{defaultContentItems.map((v) => (
				<ListItem type="circle" className={styles['example--position']}>
					{v}
				</ListItem>
			))}
		</List>
	),
	args: {
		tag: 'ol',
	},
};
