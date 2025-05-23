'use client';

import '@/shared/styles/globals.css';

import { StoreProvider, ThemeProviderApp } from '@/app/providers';
import React from 'react';
import { RootProvider } from './providers/root/root-provider';
import { TanstackProvider } from './providers/tanstack/tanstack-provider';
import { ToastProvider } from './providers/toast/toast-provider';
import { AuthProvider } from './providers/auth/auth-provider';
import { ApolloClientProvider } from './providers/apollo/apollo-provider';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<RootProvider>
			<StoreProvider>
				<TanstackProvider>
					<ApolloClientProvider>
						<AuthProvider>
							<ThemeProviderApp>{children}</ThemeProviderApp>
						</AuthProvider>
					</ApolloClientProvider>
				</TanstackProvider>
			</StoreProvider>
			<ToastProvider />
		</RootProvider>
	);
}
