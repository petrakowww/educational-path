import { Header } from '@/widgets/ui';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen flex flex-col gap-14">
			<Header isLoggedIn={false} />
			{children}
		</div>
	);
}
