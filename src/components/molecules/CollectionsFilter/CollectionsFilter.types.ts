import type { FiltersStateType } from '@/pages/collections/[slug]/CollectionBySlugPage.types';
import type { Dispatch } from 'react';

export interface CollectionsFilterProps {
	state: FiltersStateType;
	dispatch: Dispatch<{
		type: string;
		payload?: {
			value: unknown;
		};
	}>;
	className?: string;
}
