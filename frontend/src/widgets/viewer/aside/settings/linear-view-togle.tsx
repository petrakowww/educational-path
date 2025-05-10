'use client';

import {
	Button,
	Card,
	CardContent,
	Tooltip,
	TooltipProvider,
	TooltipTrigger,
	TooltipContent,
	Separator,
} from '@/shared/ui';
import { GitBranchIcon, ListOrderedIcon } from 'lucide-react';
import { cn } from '@/shared/lib';
import { useViewerStore } from '@/shared/managers/store/viewer/view.store';
import { useCourseSettingsController } from '@/features/view/hooks/use-course-settings-controller';
import { CourseViewType } from '@/shared/graphql/generated/output';
import { shallow } from 'zustand/shallow';

export const LinearViewToggle = () => {
	const { topicMapId, viewMode } = useViewerStore(
		(s) => ({
			topicMapId: s.topicMapId,
			viewMode: s.viewMode,
		}),
		shallow
	);

	const { handleViewChange } = useCourseSettingsController(topicMapId);

	const handleChangeView = (view: CourseViewType) => {
		if (view !== viewMode) {
			handleViewChange(view);
		}
	};

	return (
		<Card>
			<CardContent className="p-2 flex flex-col gap-3">
				<div className="text-sm font-medium">Тип представления</div>

				<TooltipProvider>
					<div className="flex flex-col gap-2">
						<Separator />
						<p className="text-xs text-foreground/80">
							Выберите тип представления маршрута
						</p>
						<div className="flex flex-row justify-start items-center gap-2">
							<Tooltip>
								<TooltipTrigger asChild>
									<Button
										variant="outline"
										onClick={() => handleChangeView(CourseViewType.Graph)}
										className={cn(
											'p-2 aspect-square',
											viewMode === CourseViewType.Graph &&
												'bg-primary text-primary-foreground'
										)}
									>
										<GitBranchIcon className="w-5 h-5" />
									</Button>
								</TooltipTrigger>
								<TooltipContent>
									<p>Графовое представление — структура с ветвлениями.</p>
								</TooltipContent>
							</Tooltip>

							<Tooltip>
								<TooltipTrigger asChild>
									<Button
										variant="outline"
										onClick={() => handleChangeView(CourseViewType.Linear)}
										className={cn(
											'p-2 aspect-square',
											viewMode === CourseViewType.Linear &&
												'bg-primary text-primary-foreground'
										)}
									>
										<ListOrderedIcon className="w-5 h-5" />
									</Button>
								</TooltipTrigger>
								<TooltipContent>
									<p>Линейное представление — темы идут последовательно.</p>
								</TooltipContent>
							</Tooltip>
						</div>
					</div>
				</TooltipProvider>
			</CardContent>
		</Card>
	);
};
