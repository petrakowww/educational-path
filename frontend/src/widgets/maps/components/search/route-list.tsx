'use client';

import { useRouteStore } from '@/shared/managers/store/maps/filters.store';
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationPrevious,
	PaginationNext,
	PaginationLink,
} from '@/shared/ui';
import { RouteCard } from './route-card';
import { useSearchRoutesQuery } from '@/shared/graphql/generated/output';

export const RouteList = () => {
	const {
		selectedTags,
		verifiedOnly,
		searchQuery,
		routeType,
		hasVideo,
		dateRange,
		topicCountRange,
		sortBy,
		layout,
		page,
		pageSize,
		setPage,
	} = useRouteStore();

	const { data, loading } = useSearchRoutesQuery({
		variables: {
			filters: {
				search: searchQuery,
				tags: selectedTags,
				verifiedOnly,
				type: routeType,
				hasVideo,
				dateStart: dateRange.start ?? undefined,
				dateEnd: dateRange.end ?? undefined,
				topicCountRange,
				sortBy,
				page,
				pageSize,
			},
		},
		fetchPolicy: 'cache-and-network',
	});

	const routes = data?.searchRoutes.routes ?? [];
	const totalPages = data?.searchRoutes.totalPages ?? 1;
	const currentPage = data?.searchRoutes.currentPage ?? 1;

	if (loading && routes.length === 0) {
		return <p className="text-sm text-muted-foreground">Загрузка...</p>;
	}

	return (
		<div>
			{/* Cards */}
			<div
				className={
					layout === 'grid'
						? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
						: 'flex flex-col space-y-4'
				}
			>
				{routes.length > 0 ? (
					routes.map((route) => (
						<RouteCard key={route.id} route={route} layout={layout} />
					))
				) : (
					<p className="text-sm text-muted-foreground">
						Маршруты, соответствующие заданным фильтрам, не найдены.
					</p>
				)}
			</div>

			{/* Pagination */}
			{totalPages > 1 && (
				<div className="flex items-center justify-center mt-6 space-x-2">
					<Pagination>
						<PaginationContent>
							<PaginationItem>
								<PaginationPrevious
									href="#"
									onClick={(e) => {
										e.preventDefault();
										if (currentPage > 1) setPage(currentPage - 1);
									}}
									aria-disabled={currentPage <= 1}
									className={currentPage <= 1 ? 'pointer-events-none opacity-50' : ''}
								/>
							</PaginationItem>

							{Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
								<PaginationItem key={p}>
									<PaginationLink
										href="#"
										onClick={(e) => {
											e.preventDefault();
											setPage(p);
										}}
										isActive={p === currentPage}
									>
										{p}
									</PaginationLink>
								</PaginationItem>
							))}

							<PaginationItem>
								<PaginationNext
									href="#"
									onClick={(e) => {
										e.preventDefault();
										if (currentPage < totalPages) setPage(currentPage + 1);
									}}
									aria-disabled={currentPage >= totalPages}
									className={currentPage >= totalPages ? 'pointer-events-none opacity-50' : ''}
								/>
							</PaginationItem>
						</PaginationContent>
					</Pagination>
				</div>
			)}
		</div>
	);
};
