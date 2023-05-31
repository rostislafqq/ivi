import type { Meta, StoryObj } from '@storybook/react';

import { FilmInfoSection } from './FilmInfoSection';

const meta: Meta<typeof FilmInfoSection> = {
	title: 'organisms/FilmInfoSection',
	component: FilmInfoSection,
	tags: ['autodocs'],
	argTypes: {
		heading: {
			description: 'название фильма',
		},
		year: {
			description: 'год выпуска',
		},
		duration: {
			description: 'как долго фильм длился',
		},
		yearOld: {
			description: 'с какого возраста можно смотреть',
		},
		filmParams: {
			description: 'доп. инфо о фильме (страна , мета-теги)',
		},
		badges: {
			description: 'доп инфо о качестве в аккардионе',
		},
		langs: {
			description: 'lower case , ин.язы на родном языке , распологается в шапке',
		},
		rating: {
			description: 'рейтинг фильма . ниже 7 покрасит в серый',
		},
		btnValues: {
			description: 'содержимое кнопок аккордиона',
		},
		assessment: {
			description: 'кол-во оценок',
		},
		extra: {
			description: 'мета - описение для карточки рейтинга снизу',
		},
	},
};

export default meta;

type Story = StoryObj<typeof FilmInfoSection>;

export const common: Story = {
	args: {
		heading: 'Шоу Патрика Стара (1 сезон)',
		year: 2021,
		duration: '1 сезон',
		yearOld: 6,
		filmParams: ['США', 'Сериалы', 'Для детей'],
		badges: ['FullHD', 'HD', '720p'],
		langs: ['рус', 'eng'],
		rating: 7,
		actors: [
			{
				name: 'Билли',
				surname: 'Бонс',
				image: 'data:image/jpeg;base64,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',
				href: '',
			},
			{
				name: 'Билли',
				surname: 'Бонс',
				image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/%D0%90%D0%B2%D1%82%D0%BE%D0%B1%D1%83%D1%81_%D0%9C%D0%90%D0%97_303.jpg/640px-%D0%90%D0%B2%D1%82%D0%BE%D0%B1%D1%83%D1%81_%D0%9C%D0%90%D0%97_303.jpg',
				href: '',
			},
			{
				name: 'Билли',
				surname: 'Бонс',
				image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/%D0%90%D0%B2%D1%82%D0%BE%D0%B1%D1%83%D1%81_%D0%9C%D0%90%D0%97_303.jpg/640px-%D0%90%D0%B2%D1%82%D0%BE%D0%B1%D1%83%D1%81_%D0%9C%D0%90%D0%97_303.jpg',
				href: '',
			},
			{
				name: 'Билли',
				surname: 'Бонс',
				image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/%D0%90%D0%B2%D1%82%D0%BE%D0%B1%D1%83%D1%81_%D0%9C%D0%90%D0%97_303.jpg/640px-%D0%90%D0%B2%D1%82%D0%BE%D0%B1%D1%83%D1%81_%D0%9C%D0%90%D0%97_303.jpg',
				href: '',
			},
		],
		accordionText:
			'Опальный репортер Эдди Брок расследует случаи жестоких экспериментов над людьми. Проникнув в секретную лабораторию, Эдди подцепляет инопланетного «паразита» Венома, дарующего нечеловеческую силу. Один из самых ожидаемых супергеройских фильмов по комиксам Marvel «Веном» снял режиссер Рубен Флейшер («Добро пожаловать в Zомбилэнд», «Успеть за 30 минут», «Охотники на гангстеров»). Список ярких ролей в своей карьере на радость миллионам фанатов пополнил многоликий Том Харди. В фильме также снимались четырехкратная номинантка на «Оскар» Мишель Уильямс («Горбатая гора», «7 дней и ночей с Мэрилин», «Величайший шоумен») и Риз Ахмед («Изгой-один. Звездные войны: Истории», «Стрингер»), а маленькая роль-сюрприз досталась Вуди Харрельсону. Бескомпромиссный и бойкий на язык репортер Эдди Брок выбирает объектом своей критики недостижимую мишень – главу могущественной биоинженерной корпорации Карлтона Дрейка. Эдди обвиняет его в тайных и смертельно опасных экспериментах над людьми. После нападок на светило науки Эдди увольняют с работы, а его невеста Энн возвращает ему кольцо. Оказавшись на дне общества, Эдди использует случайный шанс на реванш и проникает в лабораторию Дрейка. Здесь он находит не только подтверждение своих обвинений, но и пришельца-симбиота, который захватывает его тело. Эдди теряет контроль над собой, но зато получает нечеловеческую силу и неожиданного соратника с другой планеты. Фильм «Веном» можно посмотреть в нашем онлайн-кинотеатре.Если вам понравится данный фильм, рекомендуем посмотреть не менее увлекательную картину "Безумный Макс: Дорога ярости" 2015 года в жанре фантастика с участием Тома Харди и Шарлиз Терон. Приятного просмотра!Приглашаем посмотреть фильм «Веном» в нашем онлайн-кинотеатре в хорошем HD качестве. Приятного просмотра!',
		btnValues: ['детали о фильме', 'детали о мультфильме'],
		languages: ['Русский', 'Английский'],
		assessment: 1212,
		extra: 'Интересный сюжет',
	},
};
