'use client';

import { useMutation } from '@apollo/client';
import { UPDATE_ROUTE_MUTATION } from '@/shared/graphql/mutations'; // Замените на реальную мутацию
import { MapDialogForm } from './MapDialogForm'; // Ваш компонент MapDialogForm
import { CreateRouteInput } from '@/shared/graphql/generated/output'; // Типы для входных данных мутации

interface UpdateMapWrapperProps {
  triggerLabel: string;
  initialData: Partial<CreateRouteInput>;
  onSubmit: (data: CreateRouteInput) => void;
}

export const UpdateMapWrapper = ({
  triggerLabel,
  initialData,
  onSubmit,
}: UpdateMapWrapperProps) => {
  const [updateMap] = useMutation(UPDATE_ROUTE_MUTATION);

  const handleUpdateMap = async (data: CreateRouteInput) => {
    try {
      await updateMap({
        variables: {
          input: data,
        },
      });
      onSubmit(data); 
    } catch (error) {
      console.error('Ошибка обновления карты:', error);
    }
  };

  return (
    <MapDialogForm
      triggerLabel={triggerLabel}
      initialData={initialData}
      onSubmit={handleUpdateMap}
      variant="secondary"
    />
  );
};
