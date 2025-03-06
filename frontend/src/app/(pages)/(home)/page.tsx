import { Button } from '@/shared/ui';
import { Header } from '@/widgets/ui';
import Link from 'next/link';

export default function HomePage() {
	return (
		<main className="min-h-screen flex flex-col gap-14">
			<Header />

			<div className="w-full items-center flex flex-col">
				<div className="max-w-7xl px-4">
					<h1 className="text-4xl font-bold mb-4">
						Welcome to Edu Path
					</h1>
					<p className="text-lg text-muted-foreground mb-6">
						Edu Path is a platform that allows you to create your
						own educational maps, structuring learning materials in
						a visual and interactive way. Organize your knowledge,
						track your progress, and explore personalized learning
						paths.
					</p>
					<div className="flex gap-4">
						<Button asChild>
							<Link href="/dashboard">Get Started</Link>
						</Button>
						<Button variant="outline" asChild>
							<Link href="/about">Learn More</Link>
						</Button>
					</div>
				</div>
			</div>
		</main>
	);
}
