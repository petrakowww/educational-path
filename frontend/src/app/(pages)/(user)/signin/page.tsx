'use client';

import { Button, Separator } from '@/shared/ui';
import { Header } from '@/widgets/ui';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVk, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FormSignIn } from '@/features/auth';
import { useSession } from '@/app/providers/session/session-provider';
import { AppRoutes } from '@/shared/config';

export default function Page() {
	const { session } = useSession();

	return (
		<div className="min-h-screen flex flex-col gap-14">
			<Header isLoggedIn={session.isLoggedIn} />
			<main className="h-full flex-1 items-center flex flex-col">
				<div className="max-w-7xl w-full px-4">
					<div className="w-full text-center flex flex-col gap-4 mb-6">
						<h1 className="text-4xl font-bold">Sign in</h1>
						<p className="text-foreground/80">
							Welcome back! Let{"'"}s take you to your account.
						</p>
					</div>
					<div className="flex flex-col lg:flex-row gap-4">
						<div className="flex flex-col gap-4 lg:justify-start w-full lg:basis-1/3">
							<Button
								variant={'outline'}
								className="w-full gap-3"
							>
								Continue with GitHub{' '}
								<FontAwesomeIcon
									icon={faGithub}
									style={{ width: 20, height: 20 }}
								/>
							</Button>
							<Button
								variant={'outline'}
								className="w-full gap-3"
							>
								Continue with Google{' '}
								<FontAwesomeIcon
									icon={faGoogle}
									style={{
										width: 20,
										height: 20,
									}}
								/>
							</Button>
							<Button
								variant={'outline'}
								className="w-full gap-3"
							>
								Continue with Vk{' '}
								<FontAwesomeIcon
									icon={faVk}
									style={{ width: 20, height: 20 }}
								/>
							</Button>
						</div>

						<div className="flex items-center gap-2 w-full lg:hidden">
							<Separator className="flex-1" />
							<span className="text-muted-foreground text-sm">
								OR
							</span>
							<Separator className="flex-1" />
						</div>
						<div className="w-full flex-col flex gap-6 lg:basis-2/3">
							<FormSignIn />
							<Separator />
							<Button
								asChild
								variant={'outline'}
								className="w-full"
							>
								<Link href={AppRoutes.SignUp}>
									Don{"'"}t have an account?
									<span className="text-blue-700 font-bold">
										Sign Up
									</span>
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
