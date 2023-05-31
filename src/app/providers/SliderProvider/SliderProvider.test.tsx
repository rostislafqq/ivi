import { render, renderHook, act } from '@testing-library/react';
import React from 'react';

import { SliderProvider, useSlider } from './SliderProvider';

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
		const { result } = renderHook(() => useSlider(), {
			wrapper: ({ children }) => (
				<SliderProvider data={{ slidesCount: 3, slidesPerView: 7, spaceBetween: 30 }}>
					{children}
				</SliderProvider>
			),
		});

		expect(result.current.state.activeSlide).toBe(0);
		expect(result.current.state.autoSliding).toBe(false);
		expect(result.current.state.slidesCount).toBe(3);
		expect(result.current.state.autoplay).toBeDefined();
		expect(result.current.state.slidesPerView).toBe(7);
		expect(result.current.state.spaceBetween).toBe(30);
		expect(result.current.state.viewportWidth).toBe(0);

		expect(result.current.actions.moveLeftSlide).toBeDefined();
		expect(result.current.actions.moveRightSlide).toBeDefined();
		expect(result.current.actions.onAutoSliding).toBeDefined();
		expect(result.current.actions.offAutoSliding).toBeDefined();
		expect(result.current.actions.setViewportWidth).toBeDefined();
	});

	it('should sets autoSliding to false if autoplay is not defined', () => {
		const { result } = renderHook(() => useSlider(), {
			wrapper: ({ children }) => <SliderProvider data={{ slidesCount: 3 }}>{children}</SliderProvider>,
		});

		expect(result.current.state.autoSliding).toBe(false);
	});

	it('should sets autoSliding to false if autoplay is not defined', () => {
		const { result } = renderHook(() => useSlider(), {
			wrapper: ({ children }) => (
				<SliderProvider data={{ slidesCount: 3, autoplay: { delay: 3000 } }}>{children}</SliderProvider>
			),
		});

		expect(result.current.state.autoSliding).toBe(true);
	});

	it('should switch activeSlide', () => {
		const { result } = renderHook(() => useSlider(), {
			wrapper: ({ children }) => <SliderProvider data={{ slidesCount: 3 }}>{children}</SliderProvider>,
		});

		expect(result.current.state.activeSlide).toBe(0);

		act(() => result.current.actions.moveRightSlide());
		expect(result.current.state.activeSlide).toBe(1);

		act(() => result.current.actions.moveLeftSlide());
		expect(result.current.state.activeSlide).toBe(0);
	});

	it('should set width for viewportWidth via setViewportWidth', () => {
		const { result } = renderHook(() => useSlider(), {
			wrapper: ({ children }) => <SliderProvider data={{ slidesCount: 3 }}>{children}</SliderProvider>,
		});

		act(() => {
			result.current.actions.setViewportWidth(1216);
		});

		expect(result.current.state.viewportWidth).toBe(1216);
	});
});
