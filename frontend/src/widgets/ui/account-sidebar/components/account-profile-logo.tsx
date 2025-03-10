'use client';

import { useFindProfileLogoQuery } from '@/shared/graphql/generated/output';
import {
	DropdownMenuContent,
	DropdownMenuItem,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from '@/shared/ui';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import {
	DropdownMenu,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { ChevronsUpDownIcon, PenIcon } from 'lucide-react';
import {
	getUserCredentialType,
	getUserRoleType,
} from '../constants/account-convert-info';
import Link from 'next/link';
import { AppRoutes } from '@/shared/config';
import { staticResources } from '@/shared/lib/utils/public-client';

export const AccountProfileLogo = () => {
	const { isMobile } = useSidebar();
	const { data } = useFindProfileLogoQuery();

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton
							size={'lg'}
							className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
						>
							<div className="flex aspect-square size-8 items-center justify-center">
								<Avatar className="rounded-[50%] overflow-hidden">
									<AvatarImage
										src={
											data?.findProfile.avatar
												? staticResources.getAvatarUrl(
														data.findProfile.avatar
													)
												: undefined
										}
									/>

									<AvatarFallback>
										{data?.findProfile.name.slice(0, 1)}
									</AvatarFallback>
								</Avatar>
							</div>
							<div className="grid flex-1 text-left text-sm leading-tight">
								<span className="truncate font-semibold">
									{data?.findProfile.name || 'unknown user'}
								</span>
								<span className="truncate text-xs">
									{getUserRoleType(data?.findProfile.role)}
									{' ('}
									{getUserCredentialType(
										data?.findProfile.method
									)}
									{')'}
								</span>
							</div>
							<ChevronsUpDownIcon className="ml-auto" />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-md"
						align="start"
						side={isMobile ? 'bottom' : 'right'}
						sideOffset={4}
					>
						<DropdownMenuLabel className="text-xs text-foreground/90">
							Профиль
						</DropdownMenuLabel>
						<DropdownMenuItem className="gap-2 cursor-pointer">
							<div className="flex size-6 items-center justify-center rounded-md border border-border bg-background">
								<PenIcon className="size-4" />
							</div>
							<div className="text-foreground/80">
								<Link href={AppRoutes.AccountProfile}>
									Изменить профиль
								</Link>
							</div>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	);
};
