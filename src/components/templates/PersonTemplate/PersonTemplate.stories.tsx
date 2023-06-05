import type { Meta, StoryObj } from '@storybook/react';

import { PersonTemplate } from './PersonTemplate';

import '@/config/globals.scss';

const meta: Meta<typeof PersonTemplate> = {
	title: 'Templates/PersonTemplate',
	component: PersonTemplate,
	tags: ['autodocs'],
	argTypes: {},
};
export default meta;

type Story = StoryObj<typeof PersonTemplate>;

export const Example: Story = {
	args: {
		photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kelly_Asbury_Photo_Select_%28cropped%29.jpg/271px-Kelly_Asbury_Photo_Select_%28cropped%29.jpg',
		nameRus: 'Келли Эсбёри',
		nameEng: 'Kelly Asbury',
		mainFilms: [],
		filmographyFilms: [
			{
				filmImg:
					'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/c6aaefa1-a4f9-4132-904c-487c8636d346/220x330',
				year: 2019,
				filmName: 'UglyDolls. Куклы с характером',
				rating: '8',
				filmId: 228,
			},
		],
		roles: ['Все', 'Актер'],
	},
};
