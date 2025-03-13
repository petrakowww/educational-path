'use client';

interface VerifyWrapperProps {
	title: string;
	description: string;
	children: React.ReactNode;
}

export function VerifyWrapper(props: VerifyWrapperProps) {
	const { title, description, children } = props;
	return (
		<main className="flex flex-col items-center justify-center px-4 text-center">
			<div className="max-w-lg w-full flex flex-col gap-6">
				<div className="flex flex-col gap-2">
					<h1 className="text-3xl font-bold">{title}</h1>
					<p className="text-foreground/80">{description}</p>
				</div>
				<div>{children}</div>
			</div>
		</main>
	);
}
