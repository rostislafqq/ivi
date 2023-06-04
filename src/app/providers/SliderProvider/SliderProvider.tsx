import React, { useReducer, useEffect, useMemo, useContext, useCallback } from 'react';

import { SliderProviderProps, SliderContextType, SliderStateType } from './SliderProvider.types';

// Context
const INITIAL_SLIDER_CONTEXT: SliderContextType = {
	state: {
		activeSlide: 0,
		slidesCount: 0,
		autoSliding: false,
		autoplay: {
			delay: 0,
		},
		slidesPerView: 1,
		spaceBetween: 0,
		viewportWidth: 0,
		slideWidth: 0,
	},
	actions: {
		moveLeftSlide: () => {},
		moveRightSlide: () => {},
		onAutoSliding: () => {},
		offAutoSliding: () => {},
		setViewportWidth: () => {},
		setSlideWidth: () => {},
	},
};

export const SliderContext = React.createContext<SliderContextType>(INITIAL_SLIDER_CONTEXT);

// Hook
export const useSlider = () => useContext(SliderContext);

// Reducer
function sliderReducer(state: SliderStateType, action: { type: string; payload?: { value: unknown } }) {
	switch (action.type) {
		case 'MOVE_LEFT_SLIDE':
			return { ...state, activeSlide: state.activeSlide > 0 ? state.activeSlide - 1 : 0 };
		case 'MOVE_RIGHT_SLIDE':
			return { ...state, activeSlide: state.activeSlide < state.slidesCount - 1 ? state.activeSlide + 1 : 0 };
		case 'ON_AUTO_SLIDING':
			return { ...state, autoSliding: true };
		case 'OFF_AUTO_SLIDING':
			return { ...state, autoSliding: false };
		case 'SET_VIEWPORT_WIDTH':
			return action.payload?.value ? { ...state, viewportWidth: action.payload.value as number } : state;
		case 'SET_SLIDE_WIDTH':
			return action.payload?.value ? { ...state, slideWidth: action.payload.value as number } : state;
		case 'SET_SLIDES_PER_VIEW':
			return action.payload?.value ? { ...state, slidesPerView: action.payload.value as number } : state;
		case 'SET_SLIDES_COUNT':
			return action.payload?.value ? { ...state, slidesCount: action.payload.value as number } : state;
		default:
			return state;
	}
}

// Provider
export const SliderProvider: React.FC<SliderProviderProps> = ({ data, children }) => {
	const { activeSlide = 0, slidesCount, slidesPerView = 1, spaceBetween = 0, autoplay = { delay: 0 } } = data;

	const [state, dispatch] = useReducer(sliderReducer, {
		activeSlide,
		autoSliding: !!autoplay?.delay,
		slidesCount,
		autoplay,
		slidesPerView,
		spaceBetween,
		viewportWidth: 0,
		slideWidth: 0,
	});

	// Actions
	const moveLeftSlide = useCallback(() => dispatch({ type: 'MOVE_LEFT_SLIDE' }), []);
	const moveRightSlide = useCallback(() => dispatch({ type: 'MOVE_RIGHT_SLIDE' }), []);

	const onAutoSliding = useCallback(() => {
		if (!autoplay?.delay) return;
		dispatch({ type: 'ON_AUTO_SLIDING' });
	}, [autoplay]);

	const offAutoSliding = useCallback(() => {
		if (autoplay?.delay) return;
		dispatch({ type: 'OFF_AUTO_SLIDING' });
	}, [autoplay]);

	const setViewportWidth = useCallback((value: number) => {
		dispatch({ type: 'SET_VIEWPORT_WIDTH', payload: { value } });
	}, []);

	const setSlideWidth = useCallback((value: number) => {
		dispatch({ type: 'SET_SLIDE_WIDTH', payload: { value } });
	}, []);

	const setSlidesPerView = useCallback((value: number) => {
		dispatch({ type: 'SET_SLIDES_PER_VIEW', payload: { value } });
	}, []);

	const setSlidesCount = useCallback(
		(value: number) => dispatch({ type: 'SET_SLIDES_COUNT', payload: { value } }),
		[],
	);

	// Effects
	useEffect(() => {
		const switchingAutoSliding = () => {
			if (!autoplay || !state.autoSliding) return () => {};

			const interval = setInterval(() => {
				moveRightSlide();
			}, autoplay.delay);

			return () => {
				clearInterval(interval);
			};
		};

		return switchingAutoSliding();
	}, [autoplay, state.autoSliding, moveRightSlide]);

	useEffect(() => {
		setSlidesPerView(slidesPerView);
		setSlidesCount(slidesCount);
	}, [slidesPerView, slidesCount, setSlidesPerView, setSlidesCount]);

	const context: SliderContextType = useMemo(
		() => ({
			state,
			actions: {
				moveLeftSlide,
				moveRightSlide,
				onAutoSliding,
				offAutoSliding,
				setViewportWidth,
				setSlideWidth,
			},
		}),
		[state, moveLeftSlide, moveRightSlide, onAutoSliding, offAutoSliding, setViewportWidth, setSlideWidth],
	);

	return <SliderContext.Provider value={context}>{children}</SliderContext.Provider>;
};
