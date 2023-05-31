import { renderHook } from '@testing-library/react';

import { useMediaQuery } from './useMediaQuery';

const mockedMatchMedia = (matches: boolean) =>
	jest.fn().mockImplementation((query: string) => ({
		matches,
		media: query,
		onchange: null,
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		addListener: jest.fn(),
		removeListener: jest.fn(),
	}));

describe('useMediaQuery', () => {
	it('should return "false" when window.matchMedia is undefined', () => {
		const MEDIA_QUERY = '(min-width: 768px)';

		const { result } = renderHook(() => useMediaQuery(MEDIA_QUERY));

		expect(window.matchMedia).toBeUndefined();
		expect(result.current).toBe(false);
	});

	it('should return "true" when the media query matches', () => {
		const MEDIA_QUERY = '(min-width: 768px)';
		window.matchMedia = mockedMatchMedia(true);

		const { result } = renderHook(() => useMediaQuery(MEDIA_QUERY));

		expect(result.current).toBe(true);
		expect(window.matchMedia).toHaveBeenCalledWith(MEDIA_QUERY);
	});

	it('should return "false" when the media query does not match', () => {
		const MEDIA_QUERY = '(min-width: 768px)';
		window.matchMedia = mockedMatchMedia(false);

		const { result } = renderHook(() => useMediaQuery(MEDIA_QUERY));

		expect(result.current).toBe(false);
	});
});
