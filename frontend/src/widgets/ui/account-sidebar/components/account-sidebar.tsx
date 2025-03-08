import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarHeader,
} from '@/shared/ui/sidebar/sidebar';
import { AccountNavMain } from './account-nav-main';
import { accountArray, mapArray } from '../constants/account-nav-main';
import { AccountNavMainProps } from '../types/account-nav-main';
import { AccountProfileLogo } from './account-profile-logo';

export const navigation: AccountNavMainProps = {
	map: {
		items: mapArray,
		label: 'Карты',
	},
	account: {
		items: accountArray,
		label: 'Настройки аккаунта',
	},
};

export const AccountSidebar = () => {
	return (
		<Sidebar className="absolute h-full flex flex-grow min-h-full">
			<SidebarContent className="pt-2 min-h-full">
				<SidebarHeader>
					<AccountProfileLogo />
				</SidebarHeader>
				<SidebarGroup>
					<SidebarGroupLabel className="text-foreground/80 text-md rounded-none border-b mb-1">
						Панель управления
					</SidebarGroupLabel>
					<AccountNavMain {...navigation} />
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
};
