import type { CollectionType, GenreType, FilmType } from '@/app/types';

export class CollectionsService {
	readonly BACKEND_API: string;

	constructor() {
		this.BACKEND_API = process.env.BACKEND_API ?? '';
	}

	async getAll(): Promise<CollectionType[]> {
		try {
			const genresResponse = await fetch(`${this.BACKEND_API}/genre/getAll`);
			const genres = (await genresResponse.json()) as GenreType[];

			const collections = await Promise.all(
				genres.map(async (genre) => {
					const filmsByGenreResponse = await fetch(`${this.BACKEND_API}/film/filter/?genre=${genre.id}`);
					const films = (await filmsByGenreResponse.json()) as FilmType[];

					const collection: CollectionType = {
						id: genre.id,
						name: genre.genre.trim(),
						films: films.slice(0, 25),
					};
					return collection;
				}),
			);

			return collections;
		} catch {
			throw new Error('Fetch failed in CollectionsServices.getAll');
		}
	}

	async getById(id: number): Promise<CollectionType | undefined> {
		try {
			const genresResponse = await fetch(`${this.BACKEND_API}/genre/getAll`);
			const genres = (await genresResponse.json()) as GenreType[];

			const foundGenre = genres.find((genre) => genre.id === id);

			if (foundGenre) {
				const filmsByGenreResponse = await fetch(`${this.BACKEND_API}/film/filter/?genre=${foundGenre.id}`);
				const films = (await filmsByGenreResponse.json()) as FilmType[];

				const collection: CollectionType = {
					id: foundGenre.id,
					name: foundGenre.genre,
					films,
				};

				return collection;
			}

			return undefined;
		} catch {
			throw new Error('Fetch failed in CollectionsServices.getById');
		}
	}
}
