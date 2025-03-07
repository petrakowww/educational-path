'use client';

import '@/shared/styles/globals.css';

import { StoreProvider, ThemeProviderApp } from '@/app/providers';
import React from 'react';
import { RootProvider } from './providers/root/root-provider';
import { TanstackProvider } from './providers/tanstack/tanstack-provider';
import { ToastProvider } from './providers/toast/toast-provider';
import { AuthProvider } from './providers/auth/auth-provider';
import { ApolloProvider } from '@apollo/client';
import client from '@/shared/lib/graphql/apollo-client';

export default function Layout({ children }: { children: React.ReactNode }) {


	return (
		<RootProvider>
			<StoreProvider>
				<TanstackProvider>
					<ApolloProvider client={client}>
						<AuthProvider>
							<ThemeProviderApp>{children}</ThemeProviderApp>
						</AuthProvider>
					</ApolloProvider>
				</TanstackProvider>
			</StoreProvider>
			<ToastProvider />
		</RootProvider>
	);
}
