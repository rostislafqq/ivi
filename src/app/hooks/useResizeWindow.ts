import React from 'react';

export function useResizeWindow(): number[] {
	const [windowSize, setWindowSize] = React.useState({
		width: window.screen.width,
		height: window.screen.height,
	});

	const handleResize = () => {
		setWindowSize({
			width: window.screen.width,
			height: window.screen.height,
		});
	};

	React.useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return [windowSize.width, windowSize.height];
}
