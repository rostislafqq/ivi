import type { CollectionType } from '@/app/types';

export class CollectionsService {
	readonly URL: string;

	constructor() {
		this.URL = `${process.env.HOST ?? ''}/api/collections`;
	}

	async getAll(): Promise<CollectionType[]> {
		try {
			const response = await fetch(this.URL);
			const collections = response.json() as Promise<CollectionType[]>;
			return await collections;
		} catch {
			throw new Error('Fetch failed in CollectionsServices.getAll');
		}
	}

	async getBySlug(slug: string): Promise<CollectionType> {
		try {
			const response = await fetch(`${this.URL}/${slug}`);
			const collection = response.json() as Promise<CollectionType>;
			return await collection;
		} catch {
			throw new Error('Fetch failed in CollectionsServices.getBySlug');
		}
	}
}
