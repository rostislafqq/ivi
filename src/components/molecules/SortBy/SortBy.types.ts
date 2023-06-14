import { SelectOptionType } from '@/app/types';

export interface SortByProps {
	options: SelectOptionType[];
	selectedOption: SelectOptionType;
	setSelectedOption: (item: SelectOptionType) => void;
	className?: string;
}
