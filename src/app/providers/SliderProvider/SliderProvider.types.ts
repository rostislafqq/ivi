import React from 'react';

export type AutoplayType = {
	delay: number;
	disableOnMouseEnter?: boolean;
};

export interface SliderInitialDataType {
	slidesCount: number;
	activeSlide?: number;
	autoplay?: AutoplayType;
}

export interface SliderProviderProps {
	data: SliderInitialDataType;
	children: React.ReactNode;
}

export interface SliderStateType {
	activeSlide: number;
	slidesCount: number;
	autoSliding: boolean;
}

export interface SliderActionsType {
	moveLeftSlide: () => void;
	moveRightSlide: () => void;
	onAutoSliding: () => void;
	offAutoSliding: () => void;
}

export interface SliderContextType {
	state: SliderStateType;
	actions: SliderActionsType;
}
