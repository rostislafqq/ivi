import React, { useReducer, useEffect, useMemo, useContext } from 'react';

import { SliderProviderProps, SliderContextType, SliderStateType } from './SliderProvider.types';

// Context
const INITIAL_SLIDER_CONTEXT: SliderContextType = {
	state: {
		activeSlide: 0,
		slidesCount: 0,
		autoSliding: false,
	},
	actions: {
		moveLeftSlide: () => {},
		moveRightSlide: () => {},
		onAutoSliding: () => {},
		offAutoSliding: () => {},
	},
};

export const SliderContext = React.createContext<SliderContextType>(INITIAL_SLIDER_CONTEXT);

// Hook
export const useSlider = () => useContext(SliderContext);

// Reducer
function sliderReducer(state: SliderStateType, action: { type: string }) {
	switch (action.type) {
		case 'MOVE_LEFT_SLIDE':
			return { ...state, activeSlide: state.activeSlide > 0 ? state.activeSlide - 1 : 0 };
		case 'MOVE_RIGHT_SLIDE':
			return { ...state, activeSlide: state.activeSlide < state.slidesCount - 1 ? state.activeSlide + 1 : 0 };
		case 'ON_AUTO_SLIDING':
			return { ...state, autoSliding: true };
		case 'OFF_AUTO_SLIDING':
			return { ...state, autoSliding: false };
		default:
			return state;
	}
}

// Provider
export const SliderProvider: React.FC<SliderProviderProps> = ({ data, children }) => {
	const { activeSlide = 0, slidesCount, autoplay } = data;

	const initialState: SliderStateType = {
		activeSlide,
		autoSliding: !!autoplay?.delay,
		slidesCount,
	};

	const [state, dispatch] = useReducer(sliderReducer, initialState);

	// Actions
	const moveLeftSlide = () => dispatch({ type: 'MOVE_LEFT_SLIDE' });
	const moveRightSlide = () => dispatch({ type: 'MOVE_RIGHT_SLIDE' });

	const onAutoSliding = () => dispatch({ type: 'ON_AUTO_SLIDING' });
	const offAutoSliding = () => dispatch({ type: 'OFF_AUTO_SLIDING' });

	useEffect(() => {
		function switchingAutoSliding() {
			if (!autoplay) return () => {};

			const interval = setInterval(() => {
				moveRightSlide();
			}, autoplay.delay);

			if (!state.autoSliding) {
				clearInterval(interval);
			}

			return () => {
				clearInterval(interval);
			};
		}

		return switchingAutoSliding();
	}, [autoplay, state.autoSliding]);

	const context: SliderContextType = useMemo(
		() => ({
			state,
			actions: {
				moveLeftSlide,
				moveRightSlide,
				onAutoSliding,
				offAutoSliding,
			},
		}),
		[state],
	);

	return <SliderContext.Provider value={context}>{children}</SliderContext.Provider>;
};
