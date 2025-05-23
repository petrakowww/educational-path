import { create } from 'zustand';

interface RouteStore {
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

export const useRouteStore = create<RouteStore>((set) => ({
	selectedTags: [],
	verifiedOnly: false,
	searchQuery: '',
	routeType: 'ALL',
	hasVideo: false,
	dateRange: { start: null, end: null },
	topicCountRange: [0, 50],
	sortBy: 'recency',
	layout: 'grid',
	page: 1,
	pageSize: 6,

	toggleTag: (tag) =>
		set((state) => ({
			selectedTags: state.selectedTags.includes(tag)
				? state.selectedTags.filter((t) => t !== tag)
				: [...state.selectedTags, tag],
		})),
	setSearchQuery: (query) => set({ searchQuery: query, page: 1 }),
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
