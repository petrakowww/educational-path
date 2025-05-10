import { useEffect, useState } from 'react';
import {
	CourseModeType,
	CourseViewType,
	useGetPreviewCourseInfoQuery,
} from '@/shared/graphql/generated/output';
import { useViewerStore } from '@/shared/managers/store/viewer/view.store';
import { shallow } from 'zustand/shallow';
import { getLocalSetting } from './use-course-settings-controller';

export const useInitializationMapInfo = (routeId: string | null) => {
	const {
		setTopicRouteId,
		setCourseMode,
		setViewMode,
		setCourseAdded,
	} = useViewerStore(
		(s) => ({
			setTopicRouteId: s.setTopicRouteId,
			setCourseMode: s.setCourseMode,
			setViewMode: s.setViewMode,
			setCourseAdded: s.setCourseAdded,
		}),
		shallow
	);

	const [isInitialized, setIsInitialized] = useState(false);

	const { data, loading, error, refetch } = useGetPreviewCourseInfoQuery({
		variables: { routeId: routeId ?? '' },
		skip: !routeId,
	});

	useEffect(() => {
		if (!data || error) return;

		const topicMap = data.getUserTopicMap;
		const topicMapId = topicMap.id;
		const userCourse = topicMap.userCourse;

		if (topicMapId) {
			setTopicRouteId(topicMapId);
		}

		if (userCourse) {
			setCourseAdded(true);

			if (userCourse.view) {
				setViewMode(userCourse.view);
			}

			if (userCourse.mode) {
				setCourseMode(userCourse.mode);
			}
		} else {
			setCourseAdded(false);

			const localView = getLocalSetting('view');
			const localMode = getLocalSetting('mode');

			if (localView) {
				setViewMode(localView as CourseViewType);
			}

			if (localMode) {
				setCourseMode(localMode as CourseModeType);
			}
		}

		setIsInitialized(true);
	}, [data, error, setCourseAdded, setCourseMode, setTopicRouteId, setViewMode]);

	return {
		data,
		loading: loading || !isInitialized,
		error,
		refetch,
	};
};
