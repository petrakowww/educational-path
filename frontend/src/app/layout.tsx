import './globals.css';
import { StoreProvider, ThemeProviderApp } from '@/app/providers';
import React from 'react';
import { RootProvider } from './providers/root/root-provider';
import { TanstackProvider } from './providers/tanstack/tanstack-provider';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<RootProvider>
			<StoreProvider>
				<TanstackProvider>
					<ThemeProviderApp>{children}</ThemeProviderApp>
				</TanstackProvider>
			</StoreProvider>
		</RootProvider>
	);
}
