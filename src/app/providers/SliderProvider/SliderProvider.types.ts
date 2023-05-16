import React from 'react';

export type AutoplayType = {
	delay: number;
	disableOnMouseEnter: boolean;
};

export interface SliderProviderProps {
	data: {
		slidesCount: number;
		autoplay: AutoplayType;
	};
	children: React.ReactNode;
}

export interface SliderContextType {
	state: {
		activeSlide: number;
		autoSliding: boolean;
	};
	actions: {
		handleSlide: (direction: 'left' | 'right') => void;
		handleAutoSliding: (working: boolean) => void;
	};
}
