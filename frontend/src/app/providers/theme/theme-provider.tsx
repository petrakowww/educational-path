'use client';

import { ThemeProvider } from 'next-themes';

export const ThemeProviderApp = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			{children}
		</ThemeProvider>
	);
};
