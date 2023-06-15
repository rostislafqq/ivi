import type { Meta, StoryObj } from '@storybook/react';

import { SortBy } from './SortBy';

const meta: Meta<typeof SortBy> = {
	title: 'Molecules/SortBy',
	component: SortBy,
	argTypes: {
		options: {
			description: 'Опции сортировки',
		},
		selectedOption: {
			description: 'Выбранная опция сортировки',
		},
		setSelectedOption: {
			type: 'function',
			description: 'Функция выбора опции сортировки',
		},
		className: {
			description: 'Добавить класс для Storybook',
		},
	},
	tags: ['autodocs'],
};

export default meta;

const options = [
	{ label: 'названию', value: 'title' },
	{ label: 'дате добавления', value: 'new' },
	{ label: 'популярности', value: 'popular' },
	{ label: 'рейтингу IMDB', value: 'imdb' },
];

type Story = StoryObj<typeof SortBy>;
export const CollectionSort: Story = {
	args: {
		options,
		selectedOption: options[0],
		setSelectedOption: () => {},
	},
};
