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
		label: 'Maps',
	},
	account: {
		items: accountArray,
		label: 'Account Settings',
	},
};

export function AccountSidebar() {
	return (
		<Sidebar className="absolute h-full">
			<SidebarContent>
				<SidebarHeader>
					<AccountProfileLogo />
				</SidebarHeader>
				<SidebarGroup>
					<SidebarGroupLabel className="text-foreground/80 text-md rounded-none border-b mb-1">
						Account panel
					</SidebarGroupLabel>
					<AccountNavMain {...navigation} />
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
