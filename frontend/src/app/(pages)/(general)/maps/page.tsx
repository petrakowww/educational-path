import FilterPanel from "@/widgets/maps/components/search/filter-panel";
import LayoutToggle from "@/widgets/maps/components/search/layout-toggle";
import RouteList from "@/widgets/maps/components/search/route-list";

export default function RoutesSearchPage() {
	return (
		<div className="flex flex-col md:flex-row">
			{/* Sidebar filter panel */}
			<aside className="md:w-64 md:flex-shrink-0 p-4 border-b md:border-r border-border">
				<FilterPanel />
			</aside>

			{/* Main content: layout toggle + results */}
			<main className="flex-1 p-4">
				{/* Top bar: layout switcher (you could also put sort or search here if desired) */}
				<div className="flex items-center justify-between mb-4">
					<h2 className="text-lg font-semibold">Search Results</h2>
					<LayoutToggle />
				</div>
				{/* Route list (filtered results) */}
				<RouteList />
			</main>
		</div>
	);
}
