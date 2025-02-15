import { inter } from '@/shared/assets';

interface RootLayoutProps {
	children: React.ReactNode;
}

export const RootLayout = (props: RootLayoutProps) => {
	const { children } = props;
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>{children}</body>
		</html>
	);
};
