import type { Meta, StoryObj } from '@storybook/react';

import { ReviewsSlider } from './ReviewsSlider';

const meta: Meta<typeof ReviewsSlider> = {
	title: 'Molecules/Sliders/ReviewsSlider',
	component: ReviewsSlider,
	tags: ['autodocs'],
	argTypes: {
		reviews: {
			description: 'Список Отзывов',
		},
		className: {
			description: 'Добавить класс для Storybook',
		},
	},
};

export default meta;

type Story = StoryObj<typeof ReviewsSlider>;
export const Default: Story = {
	args: {
		reviews: [
			{
				userName: 'Карина Марьяновна',
				likes: 42,
				date: '2017-02-26',
				comment:
					'мне 13 лет а я до сих пор не могу оторвать глаз, постоянно их смотрю,прихожу со школы и включаю или карусели или мульт и смотрю вес день.....Хочу...',
			},
			{
				userName: 'lex93_29',
				likes: -2,
				date: '2017-02-26',
				comment: 'коронавирус',
			},
			{
				userName: 'Карина Марьяновна',
				likes: 42,
				date: '2017-02-26',
				comment:
					'мне 13 лет а я до сих пор не могу оторвать глаз, постоянно их смотрю,прихожу со школы и включаю или карусели или мульт и смотрю вес день.....Хочу...',
			},
			{
				userName: 'lex93_29',
				likes: -2,
				date: '2017-02-26',
				comment: 'коронавирус',
			},
			{
				userName: 'Карина Марьяновна',
				likes: 42,
				date: '2017-02-26',
				comment:
					'мне 13 лет а я до сих пор не могу оторвать глаз, постоянно их смотрю,прихожу со школы и включаю или карусели или мульт и смотрю вес день.....Хочу...',
			},
			{
				userName: 'lex93_29',
				likes: -2,
				date: '2017-02-26',
				comment: 'коронавирус',
			},
		],
	},
};
