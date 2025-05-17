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
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '@/shared/ui';

import { ChevronRight } from 'lucide-react';
import { AccountNavMainProps } from '../types/account-nav-main';

export const AccountNavMain = (props: AccountNavMainProps) => {
	return (
		<>
			{Object.entries(props).map(([key, { items, label, isVisible }]) => {
				if (isVisible === false) return null;

				const visibleItems = items.filter(
					(item) => item.isVisible !== false
				);
				if (visibleItems.length === 0) return null;

				return (
					<SidebarGroup key={key}>
						<SidebarGroupLabel>{label}</SidebarGroupLabel>
						<SidebarMenu>
							{visibleItems.map((item) => (
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

										{item.items?.length && (
											<CollapsibleContent>
												<SidebarMenuSub>
													{item.items
														.filter(
															(sub) =>
																sub.isVisible !==
																false
														)
														.map((subItem) => (
															<SidebarMenuSubItem
																key={
																	subItem.title
																}
															>
																<SidebarMenuSubButton
																	asChild
																>
																	<a
																		href={
																			subItem.url
																		}
																	>
																		<span>
																			{
																				subItem.title
																			}
																		</span>
																	</a>
																</SidebarMenuSubButton>
															</SidebarMenuSubItem>
														))}
												</SidebarMenuSub>
											</CollapsibleContent>
										)}
									</SidebarMenuItem>
								</Collapsible>
							))}
						</SidebarMenu>
					</SidebarGroup>
				);
			})}
		</>
	);
};
