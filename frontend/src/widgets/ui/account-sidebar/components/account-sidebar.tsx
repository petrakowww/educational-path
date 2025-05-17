'use client';

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarHeader,
} from '@/shared/ui/sidebar/sidebar';
import { AccountNavMain } from './account-nav-main';
import { AccountProfileLogo } from './account-profile-logo';
import { useAuth } from '@/app/providers/auth/auth-provider';
import { useNavigation } from '../hooks/use-navigation-sidebar';
import { Separator } from '@/shared/ui';
import { ThemeButton } from '../../theme/theme-button';

export const AccountSidebar = () => {
	const { isAuthenticated } = useAuth();
	const navigation = useNavigation(isAuthenticated);

	return (
		<Sidebar className="absolute h-full flex flex-grow min-h-full">
			<SidebarContent className="relative min-h-full flex flex-col justify-between">
				<div>
					{isAuthenticated && (
						<SidebarHeader>
							<AccountProfileLogo />
						</SidebarHeader>
					)}
					<SidebarGroup>
						<SidebarGroupLabel className="text-foreground/80 text-base font-semibold">
							Панель управления
						</SidebarGroupLabel>
						<Separator />
						<AccountNavMain {...navigation} />
					</SidebarGroup>
				</div>
				
				<SidebarGroup className='fixed bottom-0 left-0 max-w-[250px]'>
					<div className="p-3 flex items-center gap-2">
						<ThemeButton />
						<p className="text-foreground/80 text-sm">
							Переключить тему
						</p>
					</div>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
};
