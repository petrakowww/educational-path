'use client';

import {
	CreateRouteDto,
	useCreateRouteMutation,
} from '@/shared/graphql/generated/output';
import { MapDialogForm } from '../components/dialog-form-map';
import { useState } from 'react';
import { toast } from 'sonner';
import { useTagsContext } from '../provider/tags-provider';
import { addRouteToUserRoutes } from '@/shared/lib/apollo/apollo-cache-helpers';

export const CreateMapWrapper = () => {
	const { loadTags, allTags, tagsLoading } = useTagsContext();

	const [createMap, { loading, error }] = useCreateRouteMutation();
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	const handleCreateMap = async (data: CreateRouteDto) => {
		try {
			await createMap({
				variables: { mapDto: { ...data } },
				update: (cache, { data }) => {
					if (!data?.createRoute) return;
					addRouteToUserRoutes(cache, data.createRoute);
				},
			});
			setErrorMessage(null);
			toast.success('Вы успешно создали новый маршрут!');
		} catch {
			setErrorMessage('Ошибка при создании маршрута. Попробуйте позже.');
		}
	};

	return (
		<MapDialogForm
			title="Создайте новый образовательный маршрут"
			description="Заполните мета-информацию о вашем маршруте"
			triggerLabel="Добавить новый маршрут"
			onSubmit={handleCreateMap}
			variant="default"
			loading={loading}
			errorLabel={errorMessage || error?.message}
			closeAfterSubmit={true}
			allTags={allTags}
			tagsLoading={tagsLoading}
			onOpen={loadTags}
		/>
	);
};
