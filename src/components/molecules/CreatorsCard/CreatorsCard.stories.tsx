import type { Meta, StoryObj } from '@storybook/react';

import { CreatorsCard } from './CreatorsCard';

const meta: Meta<typeof CreatorsCard> = {
	title: 'Molecules/CreatorsCard',
	component: CreatorsCard,
	tags: ['autodocs'],
	argTypes: {
		href: {
			description: 'ссылка на актера',
		},
		name: {
			description: 'имя актера',
		},
		surname: {
			description: 'фамилия искомого',
		},
		size: {
			description: 'применим для круглых . средний - 88 , большой -115',
		},
		type: {
			description: 'кругтый / квадрат . последний не расширяется',
		},
		image: {
			description: 'ссылка на фотокарточку (опционально)',
		},
		extra: {
			description:
				'текст снизу . "актер/режиссер ..." . если хотим вид (кол-во) фильмов , то передать только цифру',
		},
	},
};

export default meta;

type Story = StoryObj<typeof CreatorsCard>;

export const NoPhoto: Story = {
	args: {
		name: 'Ратислав',
		surname: 'Мямлин',
		size: 'normal',
		type: 'circle',
		extra: 'актер',
	},
};

export const someoneSmall: Story = {
	args: {
		name: 'Шерм',
		surname: 'Коэн',
		size: 'small',
		type: 'square',
		image: 'https://thumbs.dfs.ivi.ru/storage29/contents/6/0/ad438353a47b1f73b0dc6b76aa5f9e.jpg',
	},
};

export const someoneNormal: Story = {
	args: {
		name: 'Шерм',
		surname: 'Коэн',
		size: 'normal',
		type: 'circle',
		image: 'https://thumbs.dfs.ivi.ru/storage29/contents/6/0/ad438353a47b1f73b0dc6b76aa5f9e.jpg',
		extra: 'режиссер',
	},
};

export const someoneBig: Story = {
	args: {
		name: 'Шерм',
		surname: 'Коэн',
		size: 'big',
		type: 'circle',
		image: 'https://thumbs.dfs.ivi.ru/storage29/contents/6/0/ad438353a47b1f73b0dc6b76aa5f9e.jpg',
		extra: 2,
	},
};
