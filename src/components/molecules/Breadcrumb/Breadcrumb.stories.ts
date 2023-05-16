import type { Item } from './Breadcrumb.types';
import type { Meta, StoryObj } from '@storybook/react';

import { Breadcrumb } from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
	title: 'Molecules/Breadcrumb',
	component: Breadcrumb,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['classic', 'modern'],
		},
		className: {
			control: 'text',
		},
	},
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;
const items: Item[] = [
	{
		label: 'Главная',
		href: '/',
	},
	{
		label: 'Фильмы',
		href: '/films',
	},
	{
		label: 'Зарубежные',
		href: '/films/foreign',
		active: true,
	},
];

export const Classic: Story = {
	args: {
		variant: 'classic',
		items,
	},
};

export const Modern: Story = {
	args: {
		variant: 'modern',
		items,
	},
};
