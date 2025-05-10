import {
	CourseModeType,
	CourseViewType,
	useUpdateUserCourseSettingsMutation,
} from '@/shared/graphql/generated/output';
import { useViewerStore } from '@/shared/managers/store/viewer/view.store';
import { toast } from 'sonner';
import { shallow } from 'zustand/shallow';

export const getLocalSetting = (key: 'view' | 'mode') => {
	try {
		return localStorage.getItem(`edu-path::${key}`);
	} catch {
		return null;
	}
};

export const useCourseSettingsController = (topicMapId: string | null) => {
	const isCourseAdded = useViewerStore((s) => s.isCourseAdded, shallow);
	const setViewMode = useViewerStore((s) => s.setViewMode, shallow);
	const setCourseMode = useViewerStore((s) => s.setCourseMode, shallow);

	const [updateSettings] = useUpdateUserCourseSettingsMutation();

	const saveToLocal = (key: 'view' | 'mode', value: string) => {
		try {
			localStorage.setItem(`edu-path::${key}`, value);
		} catch (err) {
			console.warn('Ошибка записи в localStorage', err);
		}
	};

	const handleChange = async (
		type: 'view' | 'mode',
		value: CourseViewType | CourseModeType,
		callback?: () => void
	) => {
		if (type === 'view') setViewMode(value as CourseViewType);
		if (type === 'mode') setCourseMode(value as CourseModeType);

		if (!isCourseAdded || !topicMapId) {
			saveToLocal(type, value);
			toast.success('Настройки сохранены локально');
			callback?.();
			return;
		}

		try {
			await updateSettings({
				variables: {
					input: {
						topicMapId,
						[type]: value,
					},
				},
			});
			toast.success('Настройки сохранены');
			callback?.();
		} catch {
			toast.error('Не удалось сохранить настройки');
		}
	};

	return {
		handleViewChange: (value: CourseViewType, cb?: () => void) =>
			handleChange('view', value, cb),
		handleModeChange: (value: CourseModeType, cb?: () => void) =>
			handleChange('mode', value, cb),
	};
};
