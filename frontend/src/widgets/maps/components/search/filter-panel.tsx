'use client';

import { useRouteStore } from '@/shared/managers/store/maps/filters.store';
import { useState } from 'react';
import {
	Label,
	Button,
	Input,
	Switch,
	Checkbox,
	Select,
	SelectTrigger,
	SelectContent,
	SelectItem,
	SelectValue,
	Slider
} from '@/shared/ui';
function FilterPanel() {
	const selectedTags = useRouteStore((state) => state.selectedTags);
	const verifiedOnly = useRouteStore((state) => state.verifiedOnly);
	const searchQuery = useRouteStore((state) => state.searchQuery);
	const routeType = useRouteStore((state) => state.routeType);
	const hasVideo = useRouteStore((state) => state.hasVideo);
	const dateRange = useRouteStore((state) => state.dateRange);
	const topicCountRange = useRouteStore((state) => state.topicCountRange);
	const sortBy = useRouteStore((state) => state.sortBy);
	const toggleTag = useRouteStore((state) => state.toggleTag);
	const setSearchQuery = useRouteStore((state) => state.setSearchQuery);
	const setVerifiedOnly = useRouteStore((state) => state.setVerifiedOnly);
	const setRouteType = useRouteStore((state) => state.setRouteType);
	const setHasVideo = useRouteStore((state) => state.setHasVideo);
	const setDateRange = useRouteStore((state) => state.setDateRange);
	const setTopicCountRange = useRouteStore(
		(state) => state.setTopicCountRange
	);
	const setSortBy = useRouteStore((state) => state.setSortBy);
	const resetFilters = useRouteStore((state) => state.resetFilters);

	// (Optional) local state for date inputs if we want to hold string values before converting
	const [startDate, setStartDate] = useState(
		dateRange.start ? dateRange.start.toISOString().substring(0, 10) : ''
	);
	const [endDate, setEndDate] = useState(
		dateRange.end ? dateRange.end.toISOString().substring(0, 10) : ''
	);

	// All available tags (could also derive from all routes or have a static list)
	const availableTags = [
		'JavaScript',
		'React',
		'Node.js',
		'CSS',
		'UI/UX',
		'Education',
	];

	return (
		<div className="space-y-4">
			{/* Search by title or author */}
			<div>
				<Label htmlFor="search">Search</Label>
				<Input
					id="search"
					placeholder="Title or author..."
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
			</div>

			{/* Tag filters (multi-select via checkboxes) */}
			<div>
				<Label>Tags</Label>
				<div className="flex flex-col space-y-1 ml-2">
					{availableTags.map((tag) => (
						<div key={tag} className="flex items-center space-x-2">
							<Checkbox
								id={`tag-${tag}`}
								checked={selectedTags.includes(tag)}
								onCheckedChange={() => toggleTag(tag)}
							/>
							<Label htmlFor={`tag-${tag}`}>{tag}</Label>
						</div>
					))}
				</div>
			</div>

			{/* Verified-only toggle */}
			<div className="flex items-center justify-between">
				<Label htmlFor="verified-only">Verified only</Label>
				<Switch
					id="verified-only"
					checked={verifiedOnly}
					onCheckedChange={setVerifiedOnly}
				/>
			</div>

			{/* Route type filter (All/Public/Private) */}
			<div>
				<Label htmlFor="route-type">Route type</Label>
				<Select value={routeType} onValueChange={setRouteType}>
					<SelectTrigger id="route-type">
						<SelectValue placeholder="All/Public/Private" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="ALL">All</SelectItem>
						<SelectItem value="PUBLIC">Public</SelectItem>
						<SelectItem value="PRIVATE">Private</SelectItem>
					</SelectContent>
				</Select>
			</div>

			{/* Has Video Course toggle */}
			<div className="flex items-center justify-between">
				<Label htmlFor="has-video">Has Video Course</Label>
				<Switch
					id="has-video"
					checked={hasVideo}
					onCheckedChange={setHasVideo}
				/>
			</div>

			{/* Date range filter */}
			<div>
				<Label>Date range</Label>
				<div className="flex items-center space-x-2">
					<Input
						type="date"
						value={startDate}
						onChange={(e) => {
							setStartDate(e.target.value);
							setDateRange(
								e.target.value
									? new Date(e.target.value)
									: null,
								dateRange.end
							);
						}}
					/>
					<span className="text-sm">to</span>
					<Input
						type="date"
						value={endDate}
						onChange={(e) => {
							setEndDate(e.target.value);
							setDateRange(
								dateRange.start,
								e.target.value ? new Date(e.target.value) : null
							);
						}}
					/>
				</div>
				{/* Alternatively, one could use <Calendar /> and <Popover> from shadcn/ui 
             to implement a calendar-based date picker for a better UX. */}
			</div>

			{/* Topic count range filter (slider) */}
			<div>
				<Label>Topics count</Label>
				<Slider
					value={topicCountRange}
					onValueChange={(val) =>
						setTopicCountRange(val as [number, number])
					}
					max={50}
					step={1}
				/>
				<div className="text-sm text-muted-foreground">
					{topicCountRange[0]} - {topicCountRange[1]} topics
				</div>
			</div>

			{/* Sorting options */}
			<div>
				<Label htmlFor="sort-by">Sort by</Label>
				<Select value={sortBy} onValueChange={setSortBy}>
					<SelectTrigger id="sort-by">
						<SelectValue placeholder="Sort" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="recency">Recency</SelectItem>
						<SelectItem value="popularity">Popularity</SelectItem>
					</SelectContent>
				</Select>
			</div>

			{/* Reset Filters button */}
			<div>
				<Button variant="outline" size="sm" onClick={resetFilters}>
					Reset Filters
				</Button>
			</div>
		</div>
	);
}

export default FilterPanel;
