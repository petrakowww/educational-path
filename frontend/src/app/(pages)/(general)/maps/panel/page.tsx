'use client';

import { InformationAboutMap } from '@/features/map/components/control-panel/components/info-about-map';
import { RouteStatsCard } from '@/features/map/components/control-panel/components/total-routes';
import { TagsProvider } from '@/features/map/components/control-panel/provider/tags-provider';
import { CreateMapWrapper } from '@/features/map/components/control-panel/widgets/create-form-map';
import { AccountWrapper } from '@/features/user/components/wrapper/account-wrapper';
import { LoadingFormInfo } from '@/features/user/utils/loading';
import { useFindRoutesByUserQuery } from '@/shared/graphql/generated/output';
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
	Separator,
} from '@/shared/ui';

export default function Page() {
	const { data: userData, loading: routeLoading } =
		useFindRoutesByUserQuery();

	const totalRoutes = userData?.findRoutesByUser.length ?? 0;
	const totalPrivate =
		userData?.findRoutesByUser.filter((r) => r.privateType === 'PRIVATE')
			.length ?? 0;
	const totalPublic =
		userData?.findRoutesByUser.filter((r) => r.privateType === 'GENERAL')
			.length ?? 0;

	if (routeLoading) {
		return <LoadingFormInfo textInformation="Загружаем ваши маршруты" />;
	}

	const isExtended = userData?.findRoutesByUser.length;

	return (
		<TagsProvider>
			<AccountWrapper
				title="Ваши карты"
				description="Создавайте свои собственные уникальные образовательные маршруты и делитесь ими с другими специалистами."
			>
				<div
					className={`grid grid-cols-1 gap-4 ${isExtended && 'xl:grid-cols-[3fr_1fr]'}`}
				>
					<div className={`${isExtended && 'xl:col-span-2'}`}>
						<CreateMapWrapper />
					</div>
					<div className={`${isExtended && 'xl:order-2'}`}>
						<RouteStatsCard
							totalRoutes={totalRoutes}
							totalPublic={totalPublic}
							totalPrivate={totalPrivate}
						/>
					</div>
					<div className={`${isExtended && 'xl:hidden'}`}>
						<Separator />
					</div>
					<div className="flex flex-col gap-4">
						{userData?.findRoutesByUser.map((route) => (
							<InformationAboutMap
								id={route.id}
								key={route.id}
								title={route.title}
								description={route.description ?? ''}
								routeTags={route.tags}
								privateType={route.privateType}
								createdAt={route.createdAt}
								updatedAt={route.updatedAt}
							/>
						)) ?? (
							<Card>
								<CardHeader>
									<CardTitle>Пока маршрутов нету</CardTitle>
									<CardDescription>
										Создайте новый маршрут, чтобы он
										отобразился в вашем списке
									</CardDescription>
								</CardHeader>
							</Card>
						)}
					</div>
				</div>
			</AccountWrapper>
		</TagsProvider>
	);
}
