import React from 'react';

import { Review } from './Review';

import styles from './Review.module.scss';

import { List } from '../List/List';

import { defaultContentItems } from '@/app/data/defaultContentItems';
import { Text, ListItem } from '@/components/atoms';

import type { Meta, StoryObj } from '@storybook/react';

import '@/config/globals.scss';

const meta: Meta<typeof Review> = {
	title: 'Molecules/Review',
	component: Review,
	tags: ['autodocs'],
	argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Review>;

export const blockGreenExample: Story = {
	args: {
		userName: 'Карина Мирьянова',
		likes: 42,
		date: '2017-02-26',
		comment:
			'мне 13 лет а я до сих пор не могу оторвать глаз, постоянно их смотрю,прихожу со школы и включаю или карусели или мульт и смотрю вес день.....Хочу...',
		type: 'card',
	},
};

export const blockRedExample: Story = {
	args: {
		userName: 'lex93_29',
		likes: -2,
		date: '2017-02-26',
		comment: 'коронавирус',
		type: 'card',
	},
};

export const rawGreenExample: Story = {
	args: {
		userName: 'Карина Мирьянова',
		likes: 42,
		date: '2017-02-26',
		comment:
			'мне 13 лет а я до сих пор не могу оторвать глаз, постоянно их смотрю,прихожу со школы и включаю или карусели или мульт и смотрю вес день.....Хочу...',
		type: 'row',
	},
};

export const rawRedExample: Story = {
	args: {
		userName: 'Татьяна Колябина',
		likes: -2,
		date: '2017-02-26',
		comment: 'Я его не поняла',
		type: 'row',
	},
};
