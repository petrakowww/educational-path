import { Home } from 'lucide-react';
import Link from 'next/link';
import { AppRoutes } from '@/shared/config';

export const LinkToControlPanel = () => {
	return (
		<div
			className="h-full bg-secondary flex items-center justify-center rounded-md hover:bg-primary
            transition-colors text-secondary-foreground hover:text-muted"
		>
			<Link
				href={AppRoutes.Dashboard}
				className="flex items-center justify-center w-full h-full"
			>
				<Home />
			</Link>
		</div>
	);
};
