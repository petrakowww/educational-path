'use client';

import { Button, Separator } from '@/shared/ui';
import Link from 'next/link';
import { AuthSocial } from '../social/auth-social';

interface AuthPageProps {
	title: string;
	description: string;
	formComponent: React.ReactNode;
	redirectText: string;
	redirectHref: string;
	redirectLabel: string;
	isShowRedirect?: boolean;
	isShowOAuth?: boolean;
}

export function AuthPage(props: AuthPageProps) {
	const {
		title,
		description,
		formComponent,
		redirectText,
		redirectHref,
		redirectLabel,
		isShowOAuth = true,
		isShowRedirect = true,
	} = props;

	return (
		<>
			<main className="h-full flex-1 items-center flex flex-col">
				<div className="max-w-7xl w-full px-4">
					<div className="w-full text-center flex flex-col gap-4 mb-6">
						<h1 className="text-4xl font-bold">{title}</h1>
						<p className="text-foreground/80">{description}</p>
					</div>
					<div className="flex flex-col lg:flex-row gap-4">
						{isShowOAuth && (
							<>
								<AuthSocial />
								<div className="flex items-center gap-2 w-full lg:hidden">
									<Separator className="flex-1" />
									<span className="text-muted-foreground text-sm uppercase">
										Или
									</span>
									<Separator className="flex-1" />
								</div>
							</>
						)}

						<div className="w-full flex-col flex gap-6 lg:basis-2/3">
							{formComponent}
							
							{isShowRedirect && (
                                <>
                                <Separator />
                                <Button
									asChild
									variant="outline"
									className="w-full"
								>
									<Link href={redirectHref}>
										{redirectText}{' '}
										<span className="text-blue-700 font-bold">
											{redirectLabel}
										</span>
									</Link>
								</Button>
                                </>
							)}
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
