import { formatDate } from '@/shared/lib/utils/format-date';

export const RouteDatesCard = ({
	createdAt,
	updatedAt,
}: {
	createdAt: string | Date;
	updatedAt: string | Date;
}) => {
	return (
		<div className='text-xs flex-col flex gap-2'>
			<div className="flex items-center justify-between">
				<span>Создан:</span>
				<time>{formatDate(createdAt, 'Неизвестно')}</time>
			</div>
			<div className="flex items-center justify-between">
				<span>Обновлён:</span>
				<time>{formatDate(updatedAt, 'Неизвестно')}</time>
			</div>
		</div>
	);
};
