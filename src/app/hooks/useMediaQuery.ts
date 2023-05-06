import React from 'react';

export function useMediaQuery(query: string) {
	const [matches, setMatches] = React.useState(false);

	React.useEffect(() => {
		if (typeof window.matchMedia === 'undefined') return () => {};
    
		const handleUpdateMediaMatches = () => {
			const media = window.matchMedia(query);
			setMatches(media.matches);
		};
		handleUpdateMediaMatches();

		window.addEventListener('change', handleUpdateMediaMatches);

		return () => {
			window.removeEventListener('change', handleUpdateMediaMatches);
		};
	}, [query]);

	return matches;
}