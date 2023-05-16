import type { FilmType } from '@/app/types';
import type { Meta, StoryObj } from '@storybook/react';

import { FilmCard } from './FilmCard';

const meta: Meta<typeof FilmCard> = {
	title: 'Molecules/FilmCard',
	component: FilmCard,
	tags: ['autodocs'],
	argTypes: {
		film: {
			description: 'Фильм',
		},
		loading: {
			description: 'Статус загрузки карточки',
		},
		className: {
			description: 'Добавить класс для Storybook',
		},
	},
};

export default meta;

const film: FilmType = {
	name: 'Позывной «Журавли»',
	preview: '/assets/images/film-cards/img1.jpg',
	status: 'subscribe',
	href: '/watch/1',
};

type Story = StoryObj<typeof FilmCard>;
export const FilmCardLoaded: Story = {
	args: {
		film,
	},
};

export const FilmCardLoading: Story = {
	args: {
		film,
		loading: true,
	},
};
