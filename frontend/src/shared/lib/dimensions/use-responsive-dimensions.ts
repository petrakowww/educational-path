'use client';

import { useEffect, useState } from 'react';

export function useComponentDimensions(
	ref: React.RefObject<HTMLElement | null>
) {
	const [dimensions, setDimensions] = useState({
		width: 0,
		height: 0,
	});

	useEffect(() => {
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
