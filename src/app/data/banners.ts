import { FilmBannerType } from '@app/types/film';

export const BANNERS: FilmBannerType[] = [
	{
		name: 'Богомол',
		banner: '/assets/images/banners/img1.jpg',
		href: '/watch/1',
		type: 'subscribe',
		age: '16+',
	},
	{
		name: 'Кратность - сестра таланта: Лучшие мини-сериалы для ценителей лаконичных историй',
		banner: '/assets/images/banners/img2.jpg',
		type: 'collections',
		href: '/collections/1',
	},
	{
		name: 'Сыщицы',
		banner: '/assets/images/banners/img3.jpg',
		href: '/watch/2',
		type: 'free',
		age: '18+',
	},
];
