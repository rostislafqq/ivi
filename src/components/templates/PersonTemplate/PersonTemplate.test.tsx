import { render } from '@testing-library/react';
import React from 'react';

import { PersonTemplate } from './PersonTemplate';

describe('components/templates/PersonTemplate', () => {
	const props = {
		photo: 'https://upload.wikiropped%29.jpg',
		nameRus: 'Келли Эсбёри',
		nameEng: 'Kelly Asbury',
		mainFilms: [],
		filmographyFilms: [
			{
				filmImg: 'https://avatars.mds.yanopoisk-image/1629390/c6aaefa1-a4f9-4132-904c-487c8636d346/220x330',
				year: 2019,
				filmName: 'UglyDolls. уклы с характером',
				rating: '8',
				filmId: 22,
			},
			{
				filmImg: 'https://avatars.mds.yaninopoisk-image/1629390/c6aaefa1-a4f9-4132-904c-487c8636d346/220x330',
				year: 209,
				filmName: 'UglyDolls. Куклы с харакером',
				rating: '8',
				filmId: 28,
			},
		],
		roles: ['Все', 'Актер'],
	};
	it('should render with correct props', () => {
		const { getByText } = render(<PersonTemplate {...props} />);
		const name = getByText('Келли Эсбёри');
		expect(name.tagName).toBe('H1');
	});
});
