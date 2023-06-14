import { ReactNode } from 'react';

import { SelectOptionType } from '@/app/types';

export interface SelectProps {
	label: string;
	selectedOptions?: SelectOptionType | SelectOptionType[];
	selectedLabel?: string;
	children: ReactNode | ReactNode[];
	className?: string;
	buttonClassName?: string;
	menuClassName?: string;
}
