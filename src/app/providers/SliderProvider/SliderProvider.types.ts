import React from 'react';

export type AutoplayType = {
	delay: number;
	disableOnMouseEnter?: boolean;
};

export interface SliderInitialDataType {
	slidesCount: number;
	activeSlide?: number;
	slidesPerView?: number;
	spaceBetween?: number;
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
	autoplay: AutoplayType;
	slidesPerView: number;
	spaceBetween: number;
	viewportWidth: number;
	slideWidth: number;
}

export interface SliderActionsType {
	moveLeftSlide: () => void;
	moveRightSlide: () => void;
	onAutoSliding: () => void;
	offAutoSliding: () => void;
	setViewportWidth: (value: number) => void;
	setSlideWidth: (value: number) => void;
}

export interface SliderContextType {
	state: SliderStateType;
	actions: SliderActionsType;
}
