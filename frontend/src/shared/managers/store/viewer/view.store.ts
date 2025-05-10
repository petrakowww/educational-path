import {
	CourseModeType,
	CourseViewType,
} from '@/shared/graphql/generated/output';
import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';

interface ViewerStore {
	viewMode: CourseViewType;
	courseMode: CourseModeType;
	isSidebarOpen: boolean;
	isCourseAdded: boolean;
	topicMapId: string | null;
	setTopicRouteId: (topicId: string) => void;
	toggleSidebar: () => void;
	setCourseAdded: (added: boolean) => void;
	setViewMode: (view: CourseViewType) => void;
	setCourseMode: (mode: CourseModeType) => void;
}

export const useViewerStore = createWithEqualityFn<ViewerStore>(
	(set) => ({
		viewMode: CourseViewType.Graph,
		courseMode: CourseModeType.Flexible,
		isSidebarOpen: false,
		isCourseAdded: false,
		topicMapId: null,
		toggleSidebar: () =>
			set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
		setCourseAdded: (added) => set({ isCourseAdded: added }),
		setViewMode: (view) => set({ viewMode: view }),
		setCourseMode: (mode) => set({ courseMode: mode }),
		setTopicRouteId: (topicMapId) => set({ topicMapId: topicMapId }),
	}),
	shallow
);
