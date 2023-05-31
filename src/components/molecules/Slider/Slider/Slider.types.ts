import { ReactNode, HTMLAttributes } from 'react';

import { AutoplayType } from '@/app/providers/SliderProvider/SliderProvider.types';

export interface SliderProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	autoplay?: AutoplayType;
	slidesPerView?: number;
	spaceBetween?: number;
	className?: string;
	_arrowLeftClassName?: string;
	_arrowRightClassName?: string;
	_viewportClassName?: string;
	_wrapperClassName?: string;
}
