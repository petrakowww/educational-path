'use client';

import {
	Menubar,
	MenubarMenu,
	MenubarTrigger,
	MenubarContent,
	MenubarItem,
	MenubarSeparator,
	AlertDialog,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogCancel,
	AlertDialogAction,
} from '@/shared/ui';
import { EllipsisVerticalIcon } from 'lucide-react';
import { useDeleteRouteMutation } from '@/shared/graphql/generated/output';
import { toast } from 'sonner';
import { useState } from 'react';
import { removeRouteFromUserRoutes } from '@/shared/lib/apollo/apollo-cache-helpers';
import { useNavigator } from '@/shared/config/routes/navigator';

interface RouteActionsMenuProps {
	routeId: string;
	routeTitle: string;
}

export const RouteActionsMenu = (props: RouteActionsMenuProps) => {
	const { routeId, routeTitle } = props;
	const [deleteRoute, { loading }] = useDeleteRouteMutation();
	const [open, setOpen] = useState(false);

	const navigator = useNavigator();

	const handleDelete = async () => {
		try {
			await deleteRoute({
				variables: { id: routeId },
				update: (cache, { data }) => {
					if (!data?.deleteRoute) return;
					removeRouteFromUserRoutes(cache, routeId);
				},
			});

			toast.success('Маршрут успешно удалён');
		} catch {
			toast.error('Ошибка при удалении маршрута');
		} finally {
			setOpen(false);
		}
	};

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<Menubar className="p-0 space-x-0 aspect-square justify-center">
				<MenubarMenu>
					<MenubarTrigger className="p-0 m-0 w-full h-full justify-center">
						<EllipsisVerticalIcon />
					</MenubarTrigger>
					<MenubarContent>
						<MenubarItem onClick={() => navigator.toViewer(routeId, routeTitle)}>
							Просмотреть
						</MenubarItem>
						<MenubarSeparator />
						<MenubarItem onClick={() => navigator.toEditor(routeId, routeTitle)}>
							Редактировать
						</MenubarItem>
						<MenubarSeparator />
						<AlertDialogTrigger asChild>
							<MenubarItem>Удалить</MenubarItem>
						</AlertDialogTrigger>
					</MenubarContent>
				</MenubarMenu>
			</Menubar>

			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Удалить маршрут?</AlertDialogTitle>
					<AlertDialogDescription>
						Это действие необратимо. Маршрут будет удалён навсегда.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel disabled={loading}>
						Отмена
					</AlertDialogCancel>
					<AlertDialogAction
						onClick={handleDelete}
						disabled={loading}
					>
						Удалить
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};
