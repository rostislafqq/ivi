import { ReactNode, HTMLAttributes } from 'react';

type AutoplayType = {
	delay: number;
	disableOnMouseEnter?: boolean;
};

export interface SliderProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	slidesPerView?: number;
	spaceBetween?: number;
	autoplay?: AutoplayType;
	className?: string;
	_arrowLeftClassName?: string;
	_arrowRightClassName?: string;
	_viewportClassName?: string;
	_wrapperClassName?: string;
	_itemClassName?: string;
}
