import { ReactNode, Dispatch, SetStateAction } from 'react';

export interface DropdownMenuProps {
	isOpened: boolean;
	setIsOpened: Dispatch<SetStateAction<boolean>>;
	button: ReactNode;
	children: ReactNode | ReactNode[];
	className?: string;
	menuClassName?: string;
}
