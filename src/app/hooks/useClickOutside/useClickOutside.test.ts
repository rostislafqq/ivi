import { renderHook } from '@testing-library/react';

import { useClickOutside } from './useClickOutside';

describe('useClickOutside', () => {
	it('should call the callback function when a click occurs outside of the specified block', () => {
		const callback = jest.fn();
		const ref = { current: document.createElement('div') };

		renderHook(() => useClickOutside(ref, callback));

		document.dispatchEvent(new MouseEvent('click', { bubbles: true }));

		expect(callback).toHaveBeenCalled();
	});

	it('should not call the callback function when a click occurs inside of the specified block', () => {
		const callback = jest.fn();
		const ref = { current: document.createElement('div') };

		renderHook(() => useClickOutside(ref, callback));

		ref.current.dispatchEvent(new MouseEvent('click', { bubbles: true }));

		expect(callback).not.toHaveBeenCalled();
	});
});
