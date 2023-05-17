import { render, renderHook, act } from '@testing-library/react';
import React, { useContext } from 'react';

import { SliderContext, SliderProvider } from './SliderProvider';

describe('providers/SliderProvider', () => {
	it('should renders children', () => {
		const { getByTestId } = render(
			<SliderProvider data={{ slidesCount: 3 }}>
				<div data-testid="child-component">Child component</div>
			</SliderProvider>,
		);

		expect(getByTestId('child-component')).toBeInTheDocument();
	});

	it('should provides state and actions', () => {
		const { result } = renderHook(() => useContext(SliderContext), {
			wrapper: ({ children }) => <SliderProvider data={{ slidesCount: 3 }}>{children}</SliderProvider>,
		});

		expect(result.current.state.activeSlide).toBe(0);
		expect(result.current.state.autoSliding).toBe(false);

		expect(result.current.actions.handleSlide).toBeDefined();
		expect(result.current.actions.handleAutoSliding).toBeDefined();
	});

	it('should sets autoSliding to false if autoplay is not defined', () => {
		const { result } = renderHook(() => useContext(SliderContext), {
			wrapper: ({ children }) => <SliderProvider data={{ slidesCount: 3 }}>{children}</SliderProvider>,
		});

		expect(result.current.state.autoSliding).toBe(false);
	});

	it('should sets autoSliding to false if autoplay is not defined', () => {
		const { result } = renderHook(() => useContext(SliderContext), {
			wrapper: ({ children }) => (
				<SliderProvider data={{ slidesCount: 3, autoplay: { delay: 3000 } }}>{children}</SliderProvider>
			),
		});

		expect(result.current.state.autoSliding).toBe(true);
	});

	it('should switch activeSlide', () => {
		const { result } = renderHook(() => useContext(SliderContext), {
			wrapper: ({ children }) => <SliderProvider data={{ slidesCount: 3 }}>{children}</SliderProvider>,
		});

		expect(result.current.state.activeSlide).toBe(0);

		act(() => result.current.actions.handleSlide('right'));
		expect(result.current.state.activeSlide).toBe(1);

		act(() => result.current.actions.handleSlide('left'));
		expect(result.current.state.activeSlide).toBe(0);
	});
});
