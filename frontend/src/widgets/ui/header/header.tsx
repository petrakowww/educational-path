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
const links = [
	{ href: '/', label: 'Home' },
	{ href: '/dashboard', label: 'Dashboard' },
	{ href: '/maps', label: 'Educational Maps' },
	{ href: '/courses', label: 'Courses' },
];

export const Header = () => {
	const isDesktop = useMediaQuery('(min-width: 1024px)');

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
				<nav className="hidden md:flex">
					<div className="grid grid-cols-2 rounded-md overflow-hidden">
						<Link
							href="/signin"
							className="peer text-center px-2 p-1 bg-foreground text-primary-foreground hover:bg-background hover:text-foreground transition-colors duration-300"
						>
							Sign in
						</Link>
						<Link
							href="/signup"
							className="peer text-center px-2 p-1 bg-background text-foreground peer-hover:bg-foreground peer-hover:text-primary-foreground transition-colors duration-300 hover:bg-foreground/70 hover:text-primary-foreground"
						>
							Sign up
						</Link>
					</div>
				</nav>

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
								<SheetTitle>Navigation by Edu Path</SheetTitle>
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
									<Link
										href="/signin"
										className="text-lg text-foreground/80 hover:text-foreground transition-colors"
									>
										Sign in
									</Link>
									<Link
										href="/signup"
										className="text-lg text-foreground/80 hover:text-foreground transition-colors"
									>
										Sign up
									</Link>
								</nav>
							</SheetContent>
						</Sheet>
					</div>
				)}
			</div>
		</header>
	);
};
