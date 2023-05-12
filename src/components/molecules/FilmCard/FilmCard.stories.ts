import type { Meta, StoryObj } from '@storybook/react';

import { FilmCard } from './FilmCard';

const meta: Meta<typeof FilmCard> = {
	title: 'Molecules/FilmCard',
	component: FilmCard,
	tags: ['autodocs'],
	argTypes: {
		name: {
			description: 'Название фильма',
		},
		preview: {
			description: 'URL ссылка на Превью',
		},
		status: {
			description: 'Статус фильма',
			control: 'select',
			options: ['free', 'subscribe', 'buy'],
		},
		href: {
			description: 'URL ссылка на фильм',
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

type Story = StoryObj<typeof FilmCard>;
export const UploadedCard: Story = {
	args: {
		name: 'Позывной «Журавли»',
		preview: '/assets/images/film-cards/img1.jpg',
		status: 'subscribe',
		href: '/watch/1',
	},
};

export const DownloadedCard: Story = {
	args: {
		name: 'Позывной «Журавли»',
		preview: '/assets/images/film-cards/img1.jpg',
		status: 'subscribe',
		href: '/watch/1',
		loading: true,
	},
};
