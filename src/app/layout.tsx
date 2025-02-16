import './globals.css';
import { RootLayout } from '@/shared/layouts';
import { StoreProvider, ThemeProviderApp } from '@/app/providers';
import React from 'react';

export default function GeneralLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<RootLayout>
			<StoreProvider>
				<ThemeProviderApp>{children}</ThemeProviderApp>
			</StoreProvider>
		</RootLayout>
	);
}
