'use client';

import {
	useFindRoutesByUserLazyQuery,
	useCreateRouteMutation,
} from '@/shared/graphql/generated/output';
import {
	Button,
	Input,
	Dialog,
	DialogContent,
	DialogTrigger,
	DialogHeader,
	DialogTitle,
	Separator,
} from '@/shared/ui';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { PlusIcon } from 'lucide-react';
import { toast } from 'sonner';

export const RoadmapListPanel = () => {
	const router = useRouter();
	const params = useParams();

	const [search, setSearch] = useState('');
	const [openDialog, setOpenDialog] = useState(false);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const [loadRoutes, { data }] = useFindRoutesByUserLazyQuery();
	const [createRoute] = useCreateRouteMutation();

	useEffect(() => {
		loadRoutes();
	}, [loadRoutes]);

	const routes =
		data?.findRoutesByUser.filter((r) => r.id !== (params?.id ?? '')) ?? [];

	const filteredRoutes = routes.filter((r) =>
		r.title.toLowerCase().includes(search.toLowerCase())
	);

	const handleCreateRoute = async () => {
		try {
			const { data: createdData } = await createRoute({
				variables: {
					mapDto: {
						title,
						description,
					},
				},
				update: (cache, { data }) => {
					const newRoute = data?.createRoute;
					if (!newRoute) return;

					cache.modify({
						fields: {
							findRoutesByUser(existing = []) {
								return [newRoute, ...existing];
							},
						},
					});
				},
			});
			if (createdData?.createRoute?.id) {
				setOpenDialog(false);
				setTitle('');
				setDescription('');
				router.push(`/map/${createdData.createRoute.id}`);
				toast.success('Маршрут создан');
			}
		} catch {
			toast.error('Не удалось создать маршрут');
		}
	};

	return (
		<div className="absolute max-w-[300px] z-10 bg-background top-0 left-0 h-full shadow-right p-2 px-3 flex flex-col gap-2">
			<div className="flex justify-between items-center mb-2 px-2">
				<span className="text-xs uppercase text-muted-foreground">
					Персональные маршруты
				</span>
				<Dialog open={openDialog} onOpenChange={setOpenDialog}>
					<DialogTrigger asChild>
						<Button size="icon" variant="ghost">
							<PlusIcon className="w-4 h-4" />
						</Button>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Новый маршрут</DialogTitle>
						</DialogHeader>
						<Input
							placeholder="Название маршрута"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
						<Input
							placeholder="Описание (необязательно)"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
						<Button onClick={handleCreateRoute} disabled={!title}>
							Создать маршрут
						</Button>
					</DialogContent>
				</Dialog>
			</div>

			<Input
				placeholder="Поиск маршрута"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<Separator />

			<div className="space-y-1">
				{filteredRoutes.map((route) => (
					<Button
						key={route.id}
						variant="outline"
						className="justify-start w-full"
						onClick={() =>
							router.push(`/editor/${route.id}/${route.title}`)
						}
					>
						{route.title}
					</Button>
				))}
			</div>
		</div>
	);
};
