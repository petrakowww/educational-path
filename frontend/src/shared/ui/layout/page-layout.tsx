import { ReactNode } from 'react';

interface layoutProps {
	children: ReactNode;
}

export const HeroLayout = (props: layoutProps) => {
	const { children } = props;

	return (
		<main className="flex justify-center min-h-screen">
			<div className="w-full max-w-6xl px-4">{children}</div>
		</main>
	);
};
