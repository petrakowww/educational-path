'use client';

import {
	CreateRouteDto,
	useCreateRouteMutation,
} from '@/shared/graphql/generated/output';
import { MapDialogForm } from '../components/dialog-form-map';

export const CreateMapWrapper = () => {
	const [createMap ] = useCreateRouteMutation(); // Загрузка и ошибка для мутации

	const handleCreateMap = async (data: CreateRouteDto) => {
		try {
			const response = await createMap({
				variables: {
					mapDto: {
						...data,
					},
				},
			});
			console.log('Map created successfully:', response);
		} catch (error) {
			console.error('Ошибка создания карты:', error);
		}
	};

	return (
		<MapDialogForm
			title="Создайте новый образовательный маршрут"
			description="Заполните мета-информацию о вашем маршруте"
			triggerLabel="Добавить новый маршрут"
			onSubmit={handleCreateMap}
			variant="default"
		/>
	);
};
