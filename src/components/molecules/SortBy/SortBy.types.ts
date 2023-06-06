export type SortByOptionType = {
	label: string;
	value: string;
};

export interface SortByProps {
	options: SortByOptionType[];
	selectedOption: SortByOptionType;
	setSelectedOption: (item: SortByOptionType) => void;
	className?: string;
}
