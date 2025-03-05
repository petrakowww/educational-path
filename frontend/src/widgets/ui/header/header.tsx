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

export const Header = () => {
	const isDesktop = useMediaQuery('(min-width: 1024px)');

	const isLoggedIn = false;

	return (
		<header className="w-full bg-primary flex">
			<div className="mx-auto flex w-full justify-between py-4 px-2">
				<div className="flex gap-2 items-center">
					<Button
						asChild
						variant={'link'}
						className="items-center gap-2 px-2 text-xl font-bold text-primary-foreground border-none flex-shrink-0 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-inset hover:no-underline"
					>
						<Link href="/">
							<div className="flex items-center gap-2 h-full w-full">
								<span>Edu Path</span>
								<LibraryBigIcon className="h-30" />
							</div>
						</Link>
					</Button>

					<nav className="hidden md:flex flex-shrink">
						{links.map((link) => (
							<Button
								asChild
								key={link.href}
								variant={'link'}
								className="items-center justify-center leading-none align-middle h-auto px-2"
							>
								<Link
									href={link.href}
									className="text-primary-foreground hover:text-accent-foreground transition-colors"
								>
									{link.label}
								</Link>
							</Button>
						))}
					</nav>
				</div>
				<div className="flex gap-x-2">
					<ThemeButton />
					{isLoggedIn ? (
						<HeaderLogout />
					) : (
						<nav className="md:flex flex gap-2">
							<Button variant={'outline'} asChild>
								<Link href={AppRoutes.SignIn}>Sign in</Link>
							</Button>

							<Button variant={'outline'} asChild>
								<Link href={AppRoutes.SignUp}>Sign up</Link>
							</Button>
						</nav>
					)}

					{!isDesktop && (
						<div className="md:hidden">
							<Sheet>
								<SheetTrigger asChild>
									<Button
										variant={'outline'}
										className="text-foreground flex items-center justify-center [&_svg]:size-6 aspect-square"
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
