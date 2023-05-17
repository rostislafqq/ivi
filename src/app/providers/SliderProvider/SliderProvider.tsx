import React from 'react';

import { SliderProviderProps, SliderContextType } from './SliderProvider.types';

export const SliderContext = React.createContext<SliderContextType>({
	state: {
		activeSlide: 0,
		autoSliding: false,
	},
	actions: {
		handleSlide: () => {},
		handleAutoSliding: () => {},
	},
});

export const SliderProvider: React.FC<SliderProviderProps> = ({ data, children }) => {
	const { slidesCount, autoplay } = data;

	const [autoSliding, setAutoSliding] = React.useState(!!autoplay?.delay);
	const [activeSlide, setActiveSlide] = React.useState(0);

	const handleAutoSliding = React.useCallback((working: boolean) => {
		setAutoSliding(working);
	}, []);

	const handleSlide = React.useCallback(
		(direction: 'left' | 'right') => {
			if (direction === 'left') {
				setActiveSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : slidesCount - 1));
			} else if (direction === 'right') {
				setActiveSlide((prevSlide) => (prevSlide < slidesCount - 1 ? prevSlide + 1 : 0));
			}
		},
		[slidesCount],
	);

	React.useEffect(() => {
		if (!autoplay) return () => {};

		const interval = setInterval(() => {
			handleSlide('right');
		}, autoplay.delay);

		if (!autoSliding) {
			clearInterval(interval);
		}

		return () => {
			clearInterval(interval);
		};
	}, [autoplay, autoSliding, handleSlide]);

	const context: SliderContextType = React.useMemo(
		() => ({
			state: {
				activeSlide,
				autoSliding,
			},
			actions: {
				handleSlide,
				handleAutoSliding,
			},
		}),
		[activeSlide, handleSlide, autoSliding, handleAutoSliding],
	);

	return <SliderContext.Provider value={context}>{children}</SliderContext.Provider>;
};
