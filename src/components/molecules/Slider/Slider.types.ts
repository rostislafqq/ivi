import { ReactNode, HTMLAttributes } from 'react';

export interface SliderProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
	_arrowLeftClassName?: string;
	_arrowRightClassName?: string;
	_viewportClassName?: string;
	_wrapperClassName?: string;
	_itemClassName?: string;
}
