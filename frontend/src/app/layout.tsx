import './globals.css';
import { StoreProvider, ThemeProviderApp } from '@/app/providers';
import React from 'react';
import { RootProvider } from './providers/root/root-provider';

export default function GeneralLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<RootProvider>
			<StoreProvider>
				<ThemeProviderApp>{children}</ThemeProviderApp>
			</StoreProvider>
		</RootProvider>
	);
}
