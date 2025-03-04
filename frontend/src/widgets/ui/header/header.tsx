'use client';

import Link from 'next/link';
import { LibraryBigIcon, MenuIcon } from 'lucide-react';
import {
	Button,
	Separator,
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTitle,
	SheetTrigger,
} from '@/shared/ui';
import { useMediaQuery } from '@/shared/lib';
import { useTransition } from 'react';
import { AppRoutes } from '@/shared/config';
import { ThemeButton } from '../theme/theme-button';
const links = [
	{ href: '/', label: 'Home' },
	{ href: '/dashboard', label: 'Dashboard' },
	{ href: '/maps', label: 'Educational Maps' },
	{ href: '/courses', label: 'Courses' },
];

export interface HeaderProps {
	isLoggedIn: boolean;
}

export const Header = (props: HeaderProps) => {
	const isDesktop = useMediaQuery('(min-width: 1024px)');

	const { isLoggedIn } = props;

	return (
		<header className="w-full bg-primary flex items-center justify-center">
			<div className="container mx-auto flex items-center justify-between py-4 px-4 max-w-7xl">
				<div className="flex gap-2 items-center">
					<Link
						href="/"
						className="text-xl font-bold text-primary-foreground flex gap-2 items-center mr-8"
					>
						Edu Path
						<LibraryBigIcon />
					</Link>

					<nav className="hidden md:flex gap-6">
						{links.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="text-primary-foreground hover:text-accent-foreground transition-colors"
							>
								{link.label}
							</Link>
						))}
					</nav>
				</div>
				<div className="flex gap-x-2">
					<ThemeButton />
					{isLoggedIn ? (
						<HeaderLogout />
					) : (
						<nav className="hidden md:flex">
							<div className="grid grid-cols-2 rounded-md overflow-hidden gap-2">
								<Button
									variant={'default'}
									className="border-2 border-border hover:bg-secondary hover:text-secondary-foreground"
									asChild
								>
									<Link href={AppRoutes.SignIn}>Sign in</Link>
								</Button>

								<Button
									variant={'default'}
									className="border-2 border-border hover:bg-secondary hover:text-secondary-foreground"
									asChild
								>
									<Link href={AppRoutes.SignUp}>Sign up</Link>
								</Button>
							</div>
						</nav>
					)}

					{!isDesktop && (
						<div className="md:hidden">
							<Sheet>
								<SheetTrigger asChild>
									<Button
										variant="ghost"
										className="text-primary-foreground flex items-center w-8 h-8 justify-center [&_svg]:size-6 aspect-square"
									>
										<MenuIcon />
									</Button>
								</SheetTrigger>
								<SheetContent
									side="right"
									className="flex flex-col gap-4 p-6 [&>button]:bg-primary [&>button]:p-1 [&>button]:text-primary-foreground [&>button]:opacity-100"
								>
									<SheetTitle>
										Navigation by Edu Path
									</SheetTitle>
									<SheetDescription className="hidden" />
									<Separator />
									<nav className="flex flex-col gap-4">
										{links.map((link) => (
											<Link
												key={link.href}
												href={link.href}
												className="text-lg text-foreground/80 hover:text-foreground transition-colors"
											>
												{link.label}
											</Link>
										))}
										<Separator />
										{isLoggedIn ? (
											<HeaderLogout />
										) : (
											<>
												<Link
													href={AppRoutes.SignIn}
													className="text-lg text-foreground/80 hover:text-foreground transition-colors"
												>
													Sign in
												</Link>
												<Link
													href={AppRoutes.SignUp}
													className="text-lg text-foreground/80 hover:text-foreground transition-colors"
												>
													Sign up
												</Link>
											</>
										)}
									</nav>
								</SheetContent>
							</Sheet>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

export const HeaderLogout = () => {
	const [isPending, startLogout] = useTransition();

	return (
		<Button
			variant="outline"
			disabled={isPending}
			className="border-2 border-border hover:bg-secondary hover:text-secondary-foreground"
		>
			{isPending ? 'Logging out...' : 'Logout'}
		</Button>
	);
};
