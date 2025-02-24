import * as React from 'react';

export function useComponentDimensions(
	ref: React.RefObject<HTMLElement | null>
) {
	const [dimensions, setDimensions] = React.useState({
		width: 0,
		height: 0,
	});

	React.useEffect(() => {
		function updateDimensions() {
			if (ref?.current) {
				setDimensions({
					width: ref.current.offsetWidth,
					height: ref.current.offsetHeight,
				});
			}
		}

		updateDimensions();

		window.addEventListener('resize', updateDimensions);

		return () => window.removeEventListener('resize', updateDimensions);
	}, [ref]);

	return dimensions;
}
