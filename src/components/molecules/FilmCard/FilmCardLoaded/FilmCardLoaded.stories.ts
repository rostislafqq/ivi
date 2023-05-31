import type { Meta, StoryObj } from '@storybook/react';

import { FilmCardLoaded } from './FilmCardLoaded';

const meta: Meta<typeof FilmCardLoaded> = {
	title: 'Molecules/FilmCard/FilmCardLoaded',
	component: FilmCardLoaded,
	tags: ['autodocs'],
	argTypes: {
		name: {
			description: 'Название фильма',
		},
		preview: {
			description: 'URL ссылка на превью',
		},
		status: {
			description: 'Статус фильма',
			control: 'select',
			options: ['subscribe', 'buy', 'free'],
		},
		href: {
			description: 'URL ссылка на страницу фильма',
		},
		className: {
			description: 'Добавить класс для Storybook',
		},
	},
};

export default meta;

type Story = StoryObj<typeof FilmCardLoaded>;

export const Card: Story = {
	args: {
		name: 'Позывной «Журавли»',
		preview: '/assets/images/film-cards/img1.jpg',
		status: 'subscribe',
		href: '/watch/1',
	},
};
