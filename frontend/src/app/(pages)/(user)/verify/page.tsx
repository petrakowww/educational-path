'use client';

import { Button, Separator } from '@/shared/ui';
import { Header } from '@/widgets/ui';
import Link from 'next/link';
import { FormVerify } from '@/features/auth';
import { AppRoutes } from '@/shared/config';
import { useSession } from '@/app/providers';

export default function Page() {
	const { session } = useSession();

	return (
		<div className="min-h-screen flex flex-col gap-14">
			<Header isLoggedIn={session.isLoggedIn} />
			<main className="h-full flex-1 items-center flex flex-col">
				<div className="max-w-7xl w-full px-4">
					<div className="w-full text-center flex flex-col gap-4 mb-6">
						<h1 className="text-4xl font-bold">Enter OTP Code</h1>
						<p className="text-foreground/80">
							Create an account and start working with educational
							maps: explore ready-made routes or create your own
							with tasks and tests!
						</p>
					</div>
					<div className="flex-col flex gap-6 lg:basis-2/5">
						<FormVerify />
						<Separator />
						<Button asChild variant={'outline'} className="w-full">
							<Link href={AppRoutes.SignIn}>
								Already have an account?
								<span className="text-blue-700 font-bold">
									Sign In
								</span>
							</Link>
						</Button>
					</div>
				</div>
			</main>
		</div>
	);
}
