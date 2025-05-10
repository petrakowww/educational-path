'use client';

import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarTrigger,
	Separator,
} from '@/shared/ui';
import {
	ListOrderedIcon,
	GitBranchIcon,
	ShuffleIcon,
	AlignJustifyIcon,
} from 'lucide-react';

import { useViewerStore } from '@/shared/managers/store/viewer/view.store';
import { useCourseSettingsController } from '@/features/view/hooks/use-course-settings-controller';
import { CourseModeType, CourseViewType } from '@/shared/graphql/generated/output';
import { shallow } from 'zustand/shallow';
import { cn } from '@/shared/lib';

export const RouteViewMenubar = () => {
	const { topicMapId, courseMode, viewMode } = useViewerStore(
		(s) => ({
			topicMapId: s.topicMapId,
			courseMode: s.courseMode,
			viewMode: s.viewMode,
		}),
		shallow
	);

	const { handleModeChange, handleViewChange } =
		useCourseSettingsController(topicMapId);

	return (
		<Menubar className="rounded-md border shadow-sm bg-background">
			{/* Тип прохождения */}
			<MenubarMenu>
				<MenubarTrigger className="flex items-center gap-1">
					<ShuffleIcon className="w-4 h-4" />
					Тип
				</MenubarTrigger>
				<MenubarContent align="start">
					<MenubarItem
						onClick={() => handleModeChange(CourseModeType.Strict)}
						className={cn(
							courseMode === CourseModeType.Strict &&
								'bg-primary text-primary-foreground transition-all'
						)}
					>
						<ListOrderedIcon className="w-4 h-4 mr-2" />
						Строго линейный
					</MenubarItem>
					<MenubarItem
						onClick={() => handleModeChange(CourseModeType.Flexible)}
						className={cn(
							courseMode === CourseModeType.Flexible &&
								'bg-primary text-primary-foreground transition-all'
						)}
					>
						<ShuffleIcon className="w-4 h-4 mr-2" />
						Смешанный
					</MenubarItem>
				</MenubarContent>
			</MenubarMenu>

			<Separator orientation="vertical" className="h-7" />

			{/* Вид */}
			<MenubarMenu>
				<MenubarTrigger className="flex items-center gap-1">
					<AlignJustifyIcon className="w-4 h-4" />
					Вид
				</MenubarTrigger>
				<MenubarContent align="start">
					<MenubarItem
						onClick={() => handleViewChange(CourseViewType.Graph)}
						className={cn(
							viewMode === CourseViewType.Graph &&
								'bg-primary text-primary-foreground transition-all'
						)}
					>
						<GitBranchIcon className="w-4 h-4 mr-2" />
						Графовое
					</MenubarItem>
					<MenubarItem
						onClick={() => handleViewChange(CourseViewType.Linear)}
						className={cn(
							viewMode === CourseViewType.Linear &&
								'bg-primary text-primary-foreground transition-all'
						)}
					>
						<ListOrderedIcon className="w-4 h-4 mr-2" />
						Линейное
					</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	);
};
