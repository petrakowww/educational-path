'use client';

import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from '@/shared/ui';
import {
	PrivateType,
	useUpdateRouteMutation,
} from '@/shared/graphql/generated/output';
import { useState } from 'react';
import { toast } from 'sonner';

interface RouteAccessSelectProps {
	routeId: string;
	initialAccess: PrivateType;
}

export const RouteAccessSelect = (props: RouteAccessSelectProps) => {
	const { routeId, initialAccess } = props;
	const [access, setAccess] = useState<PrivateType>(initialAccess);

	const [updateRoute, { loading }] = useUpdateRouteMutation();

	const handleAccessChange = async (newAccess: PrivateType) => {
		if (newAccess === access) return;

		try {
			await updateRoute({
				variables: {
					id: routeId,
					data: {
						privateType: newAccess,
					},
				},
			});
			setAccess(newAccess);
			toast.success('Вы успешно обновили тип доступа к вашему маршруту!');
		} catch {
			toast.error('Ошибка при изменении доступа: попробуйте ещё раз!');
		}
	};

	return (
		<Select
			value={access}
			onValueChange={handleAccessChange}
			disabled={loading}
		>
			<SelectTrigger className="gap-4">
				<SelectValue />
			</SelectTrigger>
			<SelectContent position="popper">
				<SelectItem value="GENERAL">Общий доступ</SelectItem>
				<SelectItem value="PRIVATE">Ограниченный доступ</SelectItem>
			</SelectContent>
		</Select>
	);
};
