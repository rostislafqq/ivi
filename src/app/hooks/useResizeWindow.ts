import React from 'react';

export function useResizeWindow() {
	const [windowSize, setWindowSize] = React.useState({
		width: 0,
		height: 0,
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
