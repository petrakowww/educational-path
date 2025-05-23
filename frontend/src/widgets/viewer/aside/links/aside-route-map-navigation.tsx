import { AppRoutes } from '@/shared/config';
import {
	Button,
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuContent,
	Separator,
	NavigationMenuLink,
} from '@/shared/ui';
import { MoreHorizontalIcon, SquareArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';

export interface NavigationLink {
	label: string;
	href: string;
}

const pages: NavigationLink[] = [
	{ label: 'Панель управления', href: AppRoutes.MapsPanel },
	{ label: 'Дашбоард', href: AppRoutes.Home },
	{ label: 'Профиль', href: AppRoutes.AccountProfile },
];

export const AsideRouteMapNavigationWrapper = () => {
	return <AsideRouteMapNavigation pages={pages} />;
};

export const AsideRouteMapNavigation = ({
	pages,
}: {
	pages: NavigationLink[];
}) => {
	return (
		<div>
			<div className="flex items-center justify-between gap-2 w-full mb-2">
				<NavigationMenu className="z-20">
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger className="p-2">
								<MoreHorizontalIcon className="w-5 h-5" />
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<div className="flex flex-col p-2 min-w-[180px] gap-1">
									{pages.map((page) => (
										<NavigationMenuLink
											key={page.href}
											href={page.href}
											className="text-sm px-2 py-1 rounded-md hover:bg-muted transition-colors"
										>
											{page.label}
										</NavigationMenuLink>
									))}
								</div>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>

				<Button variant="outline" asChild className="w-full text-sm justify-start">
					<Link href={AppRoutes.Maps}>
						<SquareArrowLeftIcon className="w-4 h-4 mr-2" />
						К курсам
					</Link>
				</Button>
			</div>
			<Separator />
		</div>
	);
};
