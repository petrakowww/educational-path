'use client';

import { Eye } from 'lucide-react';
import Link from 'next/link';
import { AppRoutes } from '@/shared/config';
import { useParams } from 'next/navigation';
import { toast } from 'sonner';

export const ViewBoard = () => {
	const params = useParams();

	const routeId = typeof params?.id === 'string' ? params.id : null;
	const slug = typeof params?.slug === 'string' ? params.slug : null;

	if (!routeId || !slug) {
		toast.error('Некорректные параметры маршрута');
		return null;
	}

	const viewHref = `${AppRoutes.View}/${routeId}/${slug}`;

	return (
		<Link
			href={viewHref}
			className="bg-secondary rounded-md flex-shrink-0 p-2 text-center flex items-center justify-center text-sm gap-1 hover:bg-primary hover:text-primary-foreground transition-colors"
			target='_blank'
		>
			<Eye width={20} height={20} />
			<span className="w-full">Просмотр карты</span>
		</Link>
	);
};
