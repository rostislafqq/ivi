import { renderHook, act } from '@testing-library/react';

import { useResizeWindow } from './useResizeWindow';

const [INITIAL_WIDTH, INITIAL_HEIGHT] = [1200, 720];

function renderUseResizeWindow() {
	global.innerWidth = INITIAL_WIDTH;
	global.innerHeight = INITIAL_HEIGHT;

	return renderHook(() => useResizeWindow());
}

describe('useResizeWindow', () => {
	it('should return an array of window "width" and "height"', () => {
		const { result } = renderUseResizeWindow();

		expect(result.current.length).toBe(2);
		expect(typeof result.current[0]).toBe('number');
		expect(typeof result.current[1]).toBe('number');
	});

	it('should return the correct initial data', () => {
		const { result } = renderUseResizeWindow();

		expect(result.current[0]).toBe(INITIAL_WIDTH);
		expect(result.current[1]).toBe(INITIAL_HEIGHT);
	});

	it('should respond to changes in the "width" of the window', () => {
		const UPDATED_WIDTH = 1024;
		const { result } = renderUseResizeWindow();

		act(() => {
			global.innerWidth = UPDATED_WIDTH;
			global.dispatchEvent(new Event('resize'));
		});

		expect(result.current[0]).toBe(UPDATED_WIDTH);
	});

	it('should respond to changes in the "height" of the window', () => {
		const UPDATED_HEIGHT = 600;
		const { result } = renderUseResizeWindow();

		act(() => {
			global.innerHeight = UPDATED_HEIGHT;
			global.dispatchEvent(new Event('resize'));
		});

		expect(result.current[1]).toBe(UPDATED_HEIGHT);
	});
});
