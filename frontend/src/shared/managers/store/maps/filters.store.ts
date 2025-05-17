// store/routeStore.ts
import { create } from 'zustand';

export interface Route {
	id: string;
	title: string;
	author: string;
	tags: string[];
	isVerified: boolean;
	type: 'PUBLIC' | 'PRIVATE';
	hasVideo: boolean;
	createdAt: Date;
	topicsCount: number;
	popularity: number; // used to sort by popularity
}

interface RouteStore {
	// Data
	routes: Route[];
	// Filter states
	selectedTags: string[];
	verifiedOnly: boolean;
	searchQuery: string;
	routeType: 'ALL' | 'PUBLIC' | 'PRIVATE';
	hasVideo: boolean;
	dateRange: { start: Date | null; end: Date | null };
	topicCountRange: [number, number];
	sortBy: 'recency' | 'popularity';
	layout: 'grid' | 'list';
	page: number;
	pageSize: number;
	// Actions to update state
	toggleTag: (tag: string) => void;
	setSearchQuery: (query: string) => void;
	setVerifiedOnly: (value: boolean) => void;
	setRouteType: (value: 'ALL' | 'PUBLIC' | 'PRIVATE') => void;
	setHasVideo: (value: boolean) => void;
	setDateRange: (start: Date | null, end: Date | null) => void;
	setTopicCountRange: (range: [number, number]) => void;
	setSortBy: (value: 'recency' | 'popularity') => void;
	setLayout: (value: 'grid' | 'list') => void;
	setPage: (value: number) => void;
	resetFilters: () => void;
}

const allTags = ['JavaScript', 'React', 'Node.js', 'CSS', 'UI/UX', 'Education'];
const mockRoutes: Route[] = [
	{
		id: '1',
		title: 'Intro to React',
		author: 'Alice',
		tags: ['JavaScript', 'React'],
		isVerified: true,
		type: 'PUBLIC',
		hasVideo: true,
		createdAt: new Date('2025-01-15'),
		topicsCount: 10,
		popularity: 120,
	},
	{
		id: '2',
		title: 'Advanced Node.js',
		author: 'Bob',
		tags: ['JavaScript', 'Node.js'],
		isVerified: false,
		type: 'PRIVATE',
		hasVideo: false,
		createdAt: new Date('2024-11-20'),
		topicsCount: 8,
		popularity: 80,
	},
	// ...more route objects...
];

// Create the Zustand store
export const useRouteStore = create<RouteStore>((set) => ({
	// Initial state values
	routes: mockRoutes,
	selectedTags: [],
	verifiedOnly: false,
	searchQuery: '',
	routeType: 'ALL',
	hasVideo: false,
	dateRange: { start: null, end: null },
	topicCountRange: [0, 50], // min 0 topics, max 50 topics (example range)
	sortBy: 'recency',
	layout: 'grid',
	page: 1,
	pageSize: 6,

	// Action implementations
	toggleTag: (tag) =>
		set((state) => {
			const selected = state.selectedTags;
			return {
				selectedTags: selected.includes(tag)
					? selected.filter((t) => t !== tag) // remove tag if already selected
					: [...selected, tag], // add tag if not selected
			};
		}),
	setSearchQuery: (query) => set({ searchQuery: query, page: 1 }), // reset page on new query
	setVerifiedOnly: (value) => set({ verifiedOnly: value, page: 1 }),
	setRouteType: (value) => set({ routeType: value, page: 1 }),
	setHasVideo: (value) => set({ hasVideo: value, page: 1 }),
	setDateRange: (start, end) => set({ dateRange: { start, end }, page: 1 }),
	setTopicCountRange: (range) => set({ topicCountRange: range }),
	setSortBy: (value) => set({ sortBy: value }),
	setLayout: (value) => set({ layout: value }),
	setPage: (value) => set({ page: value }),
	resetFilters: () =>
		set({
			selectedTags: [],
			verifiedOnly: false,
			searchQuery: '',
			routeType: 'ALL',
			hasVideo: false,
			dateRange: { start: null, end: null },
			topicCountRange: [0, 50],
			sortBy: 'recency',
			page: 1,
		}),
}));
