'use client';

import { MapDialogForm } from '@/features/map/components/dialog-form-map';
import { InformationAboutMap } from '@/features/map/components/info-about-map';
import { CreateMapWrapper } from '@/features/map/widgets/create-form-map';
import { AccountWrapper } from '@/features/user/components/wrapper/account-wrapper';
import { LoadingFormInfo } from '@/features/user/utils/loading';
import { useFindRoutesByUserQuery } from '@/shared/graphql/generated/output';
import { Card, CardDescription, CardHeader, CardTitle } from '@/shared/ui';

export default function Page() {
	const { data, loading, error } = useFindRoutesByUserQuery();
	console.log(data);
	if (loading) {
		return <LoadingFormInfo textInformation="Загружаем ваши маршруты" />;
	}

	return (
		<AccountWrapper
			title="Ваши карты"
			description="Создавайте свои собственные уникальные образовательные маршруты и делитесь ими с другими специалистами."
		>
			<div className="mb-4">
				<CreateMapWrapper />
			</div>
			<div className="flex flex-col gap-4">
				{data?.findRoutesByUser.map((route) => (
					<InformationAboutMap
						key={route.id}
						title={route.title}
						description={route.description ?? ''}
						tags={route.tags || []}
						topicCount={route.topicNodes?.length ?? 0}
						accessType={route.privateType ?? 'General'}
						onAccessChange={(value) =>
							console.log('Доступ изменён:', value)
						}
						onEdit={() => console.log('Редактирование', route.id)}
						onView={() => console.log('Просмотр', route.id)}
						onDelete={() => console.log('Удаление', route.id)}
					/>
				)) ?? (
					<Card>
						<CardHeader>
							<CardTitle>Пока маршрутов нету</CardTitle>
							<CardDescription>
								Создайте новый маршрут, чтобы он отобразился в
								вашем списке
							</CardDescription>
						</CardHeader>
					</Card>
				)}
			</div>
		</AccountWrapper>
	);
}
