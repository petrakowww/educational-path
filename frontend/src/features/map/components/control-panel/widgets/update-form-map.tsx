'use client';

import {
	UpdateRouteDto,
	useUpdateRouteMutation,
} from '@/shared/graphql/generated/output';
import { MapDialogForm } from '../components/dialog-form-map';
import { useState } from 'react';
import { toast } from 'sonner';
import { useTagsContext } from '../provider/tags-provider';

export interface IUpdateMapWrapper {
	initialData: UpdateRouteDto;
	routeId: string;
}

export const UpdateMapWrapper = (props: IUpdateMapWrapper) => {
	const { initialData, routeId } = props;
	const [updateRoute, { loading, error }] = useUpdateRouteMutation();
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	const { loadTags, allTags, tagsLoading } = useTagsContext();

	const handleUpdateMap = async (data: UpdateRouteDto) => {
		try {
			await updateRoute({
				variables: {
					id: routeId,
					data: data,
				},
			});
			setErrorMessage(null);
			toast.success('Вы успешно обновили данные о маршруте!');
		} catch {
			setErrorMessage('Ошибка при создании маршрута. Попробуйте позже.');
		}
	};

	return (
		<MapDialogForm
			triggerLabel="Изменить маршрут"
			title={`Изменение маршрута: ${initialData.title}`}
			description="Измените мета-информацию маршрута"
			initialData={{ ...initialData, title: initialData.title ?? '' }}
			onSubmit={handleUpdateMap}
			variant="default"
			loading={loading}
			errorLabel={errorMessage || error?.message}
			allTags={allTags}
			tagsLoading={tagsLoading}
			onOpen={loadTags}
		/>
	);
};
