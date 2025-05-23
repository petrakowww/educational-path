import { FilterPanel } from '@/widgets/maps/components/search/filter-panel';
import LayoutToggle from '@/widgets/maps/components/search/layout-toggle';
import { RouteList } from '@/widgets/maps/components/search/route-list';

export default function RoutesSearchPage() {
	return (
		<div className="flex flex-col lg:flex-row">
			<aside className="2xl:w-64 border-b lg:border-b-0 lg:flex-shrink-0 p-4 lg:border-r border-border w-full">
				<FilterPanel />
			</aside>

			<main className="flex-1 p-4">
				<div className="flex items-center justify-between mb-4">
					<h2 className="text-lg font-semibold">Результаты поиска</h2>
					<LayoutToggle />
				</div>
				<RouteList />
			</main>
		</div>
	);
}
