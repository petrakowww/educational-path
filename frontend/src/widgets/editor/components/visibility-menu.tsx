'use client';

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/shared/ui';
import { Earth, Lock } from 'lucide-react';
import { Button } from '@/shared/ui';
import { useParams } from 'next/navigation';
import { toast } from 'sonner';
import {
	useUpdateRouteMutation,
	useFindRouteQuery,
	PrivateType,
} from '@/shared/graphql/generated/output';

const PRIVATE_TYPE_LABELS: Record<PrivateType, string> = {
	[PrivateType.Private]: 'Только вы можете просматривать',
	[PrivateType.General]: 'Любой желающий может просматривать',
};

export const VisibilityDialogMenu = () => {
	const params = useParams();
	const routeId = typeof params?.id === 'string' ? params.id : null;

	const { data, error } = useFindRouteQuery({
		variables: { id: routeId! },
		skip: !routeId,
	});

	const [updateRoute, { loading: mutationLoading }] = useUpdateRouteMutation();

	if (!routeId || error) {
		toast.error('Некорректные параметры маршрута');
		return null;
	}

	const route = data?.findRoute;
	if (!route) return null;

	const currentType = route.privateType;
	const isPublic = currentType === PrivateType.General;

	const toggleAccess = async () => {
		const nextType = isPublic ? PrivateType.Private : PrivateType.General;

		try {
			await updateRoute({
				variables: {
					id: routeId,
					data: { privateType: nextType },
				},
				update: (cache, { data }) => {
					if (!data?.updateRoute) return;
					cache.modify({
						id: cache.identify({ __typename: 'Route', id: routeId }),
						fields: {
							privateType: () => nextType,
						},
					});
				},
			});
			toast.success('Тип доступа обновлён');
		} catch {
			toast.error('Не удалось обновить доступ');
		}
	};

	return (
		<Dialog>
			<DialogTrigger
				asChild
			>
				<Button
					variant="secondary"
					className="w-full lg:w-auto flex items-center gap-2 justify-center px-3 py-2 text-sm"
				>
					{isPublic ? (
						<Earth className="w-4 h-4 shrink-0" />
					) : (
						<Lock className="w-4 h-4 shrink-0" />
					)}
					<span className="flex-grow text-center">
						{PRIVATE_TYPE_LABELS[currentType]}
					</span>
				</Button>
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle className="text-2xl">Обновить настройки доступа</DialogTitle>
					<DialogDescription>Измените тип доступа к карте</DialogDescription>
				</DialogHeader>

				<div className="flex justify-between items-center mt-4">
					<p className="text-sm">
						Текущий тип: <strong>{PRIVATE_TYPE_LABELS[currentType]}</strong>
					</p>
					<Button
						variant="default"
						onClick={toggleAccess}
						disabled={mutationLoading}
					>
						{isPublic ? 'Сделать приватным' : 'Сделать публичным'}
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
};
