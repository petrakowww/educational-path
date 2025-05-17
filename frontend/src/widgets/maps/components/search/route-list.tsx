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

function RouteList() {
	// Extract route data and filter states from the store
	const routes = useRouteStore((state) => state.routes);
	const selectedTags = useRouteStore((state) => state.selectedTags);
	const verifiedOnly = useRouteStore((state) => state.verifiedOnly);
	const searchQuery = useRouteStore((state) => state.searchQuery);
	const routeType = useRouteStore((state) => state.routeType);
	const hasVideo = useRouteStore((state) => state.hasVideo);
	const dateRange = useRouteStore((state) => state.dateRange);
	const topicCountRange = useRouteStore((state) => state.topicCountRange);
	const sortBy = useRouteStore((state) => state.sortBy);
	const layout = useRouteStore((state) => state.layout);
	const page = useRouteStore((state) => state.page);
	const pageSize = useRouteStore((state) => state.pageSize);
	const setPage = useRouteStore((state) => state.setPage);

	// 1. Apply all filters to the routes list
	const filtered = routes.filter((route) => {
		// Search filter (match in title or author)
		const query = searchQuery.toLowerCase();
		if (
			query &&
			!route.title.toLowerCase().includes(query) &&
			!route.author.toLowerCase().includes(query)
		) {
			return false;
		}
		// Verified-only filter
		if (verifiedOnly && !route.isVerified) return false;
		// Route type filter
		if (routeType !== 'ALL' && route.type !== routeType) return false;
		// Has video filter
		if (hasVideo && !route.hasVideo) return false;
		// Tags filter (AND logic: route must contain all selected tags)
		if (
			selectedTags.length > 0 &&
			!selectedTags.every((tag) => route.tags.includes(tag))
		) {
			return false;
		}
		// Date range filter
		if (dateRange.start && route.createdAt < dateRange.start) return false;
		if (dateRange.end && route.createdAt > dateRange.end) return false;
		// Topic count range filter
		if (
			route.topicsCount < topicCountRange[0] ||
			route.topicsCount > topicCountRange[1]
		) {
			return false;
		}
		return true; // route passed all filters
	});

	// 2. Sort the filtered results
	if (sortBy === 'recency') {
		filtered.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
	} else if (sortBy === 'popularity') {
		filtered.sort((a, b) => b.popularity - a.popularity);
	}

	// 3. Pagination setup
	const totalPages = Math.ceil(filtered.length / pageSize);
	if (page > totalPages) {
		// If current page is out of range (e.g., filters reduced results), reset to last page
		setPage(totalPages || 1);
	}
	const startIndex = (page - 1) * pageSize;
	const pageItems = filtered.slice(startIndex, startIndex + pageSize);

	// 4. Render the list of RouteCards and pagination controls
	return (
		<div>
			{/* Route cards list */}
			<div
				className={
					layout === 'grid'
						? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
						: 'flex flex-col space-y-4'
				}
			>
				{pageItems.map((route) => (
					<RouteCard key={route.id} route={route} layout={layout} />
				))}
				{pageItems.length === 0 && (
					<p className="text-sm text-muted-foreground">
						No routes found matching your criteria.
					</p>
				)}
			</div>

			{/* Pagination controls */}
			<div className="flex items-center justify-center mt-6 space-x-2">
				<Pagination>
					<PaginationContent>
						<PaginationItem>
							<PaginationPrevious
								href="#"
								onClick={() => setPage(page - 1)}
								disabled={page <= 1}
							/>
						</PaginationItem>
						{Array.from(
							{ length: totalPages },
							(_, i) => i + 1
						).map((p) => (
							<PaginationItem key={p}>
								<PaginationLink
									href="#"
									onClick={() => setPage(p)}
									active={p === page}
								>
									{p}
								</PaginationLink>
							</PaginationItem>
						))}
						<PaginationItem>
							<PaginationNext
								href="#"
								onClick={() => setPage(page + 1)}
								disabled={page >= totalPages}
							/>
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			</div>
		</div>
	);
}

export default RouteList;
