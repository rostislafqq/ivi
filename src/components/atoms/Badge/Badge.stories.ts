import { Badge } from './Badge';

import type { Meta, StoryObj } from '@storybook/react';

import '@/config/globals.scss';

const meta: Meta<typeof Badge> = {
	title: 'Atoms/Badge',
	component: Badge,
	tags: ['autodocs'],
	argTypes: {
		bg: {
			type: 'string',
			name: 'Background',
			description: 'Задний фон',
			options: ['red', 'orange', 'gray', 'green'],
			control: {
				type: 'select',
			},
		},
		size: {
			type: 'string',
			name: 'Size',
			description: 'Размер',
			options: ['small', 'normal'],
			control: {
				type: 'select',
			},
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
type Story = StoryObj<typeof Badge>;

export const Red: Story = {
	args: {
		children: 'выбор Иви',
		size: 'small',
		bg: 'red',
	},
};

export const Orange: Story = {
	args: {
		children: 'эксклюзив',
		size: 'small',
		bg: 'orange',
	},
};

export const Gray: Story = {
	args: {
		children: 'бесплатно',
		size: 'normal',
		bg: 'gray',
	},
};

export const Green: Story = {
	args: {
		children: 'все серии сразу',
		size: 'normal',
		bg: 'green',
	},
};
