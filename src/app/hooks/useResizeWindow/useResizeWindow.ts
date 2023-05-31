import React, { useEffect, useCallback } from 'react';

export function useResizeWindow(): number[] {
	const [windowSize, setWindowSize] = React.useState({
		width: 0,
		height: 0,
	});

	const handleResize = useCallback(() => {
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	}, []);

	useEffect(() => {
		handleResize();
	}, [handleResize]);

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, [windowSize.width, windowSize.height, handleResize]);

	return [windowSize.width, windowSize.height];
}
