import { SectionHeading } from './SectionHeading';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SectionHeading> = {
	title: 'Atoms/Sections/SectionHeading',
	component: SectionHeading,
	tags: ['autodocs'],
	argTypes: {
		tag: {
			description: 'Тег',
			options: ['h1', 'h2', 'h3'],
			control: 'select',
		},
		className: {
			description: 'Добавить класс для StoryBook',
		},
		href: {
			description: 'URL ссылка',
		},
		arrow: {
			description: 'Отобразить стрелку справа',
			control: 'boolean',
		},
		underline: {
			description: 'Отобразить подчёркивание',
			control: 'boolean',
		},
		children: {
			name: 'Label',
			description: 'Содержимое',
		},
	},
};
export default meta;

type Story = StoryObj<typeof SectionHeading>;
export const Default: Story = {
	args: {
		children: 'Продолжить просмотр',
		tag: 'h2',
	},
};

export const DefaultLink: Story = {
	args: {
		children: 'Рекомендую посмотреть',
		tag: 'h2',
		href: '/recommendations',
	},
};

export const WithArrow: Story = {
	args: {
		children: 'Рекомендую посмотреть',
		tag: 'h2',
		href: '/recommendations',
		arrow: true,
	},
};

export const WithUnderline: Story = {
	args: {
		children: 'Актёры и создатели',
		tag: 'h2',
		href: '/persons',
		underline: true,
	},
};

export const WithCount: Story = {
	args: {
		children: 'Отзывы',
		tag: 'h2',
		href: '/reviews',
		count: 99,
	},
};
