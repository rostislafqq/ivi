import { useEffect, useCallback, RefObject } from 'react';

export function useClickOutside(ref: RefObject<HTMLElement>, callback: () => void) {
	const handleClick = useCallback(
		(event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				callback();
			}
		},
		[ref, callback],
	);

	useEffect(() => {
		document.addEventListener('click', handleClick);

		return () => {
			document.addEventListener('click', handleClick);
		};
	}, [handleClick]);
}
