import React, { useCallback } from 'react';

export function useMediaQuery(query: string) {
	const [matches, setMatches] = React.useState(false);

	const handleUpdateMediaMatches = useCallback(
		(q: string) => () => {
			const media = window.matchMedia(q);
			setMatches(media.matches);
		},
		[],
	);

	React.useEffect(() => {
		if (typeof window.matchMedia === 'undefined') return () => {};

		handleUpdateMediaMatches(query)();

		window.addEventListener('resize', handleUpdateMediaMatches(query));

		return () => {
			window.removeEventListener('resize', handleUpdateMediaMatches(query));
		};
	}, [query, handleUpdateMediaMatches]);

	return matches;
}
