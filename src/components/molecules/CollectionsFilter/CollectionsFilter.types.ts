import type { FiltersStateType } from '@/pages/collections/[id]/CollectionByIdPage.types';
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
