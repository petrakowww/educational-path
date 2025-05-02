import { Eye } from 'lucide-react';
import Link from 'next/link';
import { AppRoutes } from '@/shared/config';

export const ViewBoard = () => {
	return (
		<Link
			href={AppRoutes.View}
			className="bg-secondary rounded-md
            flex-shrink-0 p-2 text-center flex items-center justify-center text-sm gap-1
            hover:bg-primary hover:text-primary-foreground transition-colors"
		>
			<Eye width={20} height={20} />
			<span className="w-full">Просмотр карты</span>
		</Link>
	);
};
