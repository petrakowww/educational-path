import { Controls } from 'reactflow';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const ControlsWithTheme = () => {
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const isDark = resolvedTheme === 'dark';

    console.log(isDark);

	return (
		<Controls
			style={{
				backgroundColor: isDark ? '#000' : '#fff',
				color: isDark ? '#fff' : '#000',
				border: `1px solid ${isDark ? '#333' : '#ccc'}`,
			}}
        position="top-right"
		/>
	);
};
