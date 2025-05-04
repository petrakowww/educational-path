'use client';

import '@/shared/styles/globals.css';

import React from 'react';
import { ThemeProviderApp } from './providers/theme/theme-provider';
import { RootProvider } from './providers/root/root-provider';
import { TanstackProvider } from './providers/tanstack/tanstack-provider';
import { ToastProvider } from './providers/toast/toast-provider';
import { AuthProvider } from './providers/auth/auth-provider';
import { ApolloClientProvider } from './providers/apollo/apollo-provider';
import { TooltipProvider } from '@/shared/ui';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<RootProvider>
			<TanstackProvider>
				<ApolloClientProvider>
					<AuthProvider>
						<ThemeProviderApp>
							<TooltipProvider>{children}</TooltipProvider>
						</ThemeProviderApp>
					</AuthProvider>
				</ApolloClientProvider>
			</TanstackProvider>
			<ToastProvider />
		</RootProvider>
	);
}
