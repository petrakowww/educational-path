'use client';

import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
	SidebarMenuSub,
	SidebarMenuSubItem,
	SidebarMenuSubButton,
} from '@/shared/ui';
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '@/shared/ui';
import { ChevronRight } from 'lucide-react';
import { AccountNavMainProps } from '../types/account-nav-main';

export function AccountNavMain(props: AccountNavMainProps) {
	return (
		<>
			{Object.entries(props).map(([key, { items, label }]) => (
				<SidebarGroup key={key}>
					<SidebarGroupLabel>{label}</SidebarGroupLabel>
					<SidebarMenu>
						{items.map((item) => (
							<Collapsible
								key={item.title}
								asChild
								defaultOpen={item.isActive}
								className="group/collapsible"
							>
								<SidebarMenuItem>
									<CollapsibleTrigger asChild>
										<SidebarMenuButton
											tooltip={item.title}
											className="h-auto"
										>
											{item.icon && <item.icon />}
											<span>{item.title}</span>
											<ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
										</SidebarMenuButton>
									</CollapsibleTrigger>
									<CollapsibleContent>
										<SidebarMenuSub>
											{item.items?.map((subItem) => (
												<SidebarMenuSubItem
													key={subItem.title}
												>
													<SidebarMenuSubButton
														asChild
													>
														<a href={subItem.url}>
															<span>
																{subItem.title}
															</span>
														</a>
													</SidebarMenuSubButton>
												</SidebarMenuSubItem>
											))}
										</SidebarMenuSub>
									</CollapsibleContent>
								</SidebarMenuItem>
							</Collapsible>
						))}
					</SidebarMenu>
				</SidebarGroup>
			))}
		</>
	);
}
