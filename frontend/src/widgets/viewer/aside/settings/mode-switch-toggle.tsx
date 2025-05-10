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
import { ChevronsLeftRightEllipsisIcon, Rows4Icon } from 'lucide-react';
import { cn } from '@/shared/lib';
import { useCourseSettingsController } from '@/features/view/hooks/use-course-settings-controller';
import { useViewerStore } from '@/shared/managers/store/viewer/view.store';
import { shallow } from 'zustand/shallow';
import { CourseModeType } from '@/shared/graphql/generated/output';

export const ModeSwitchToggle = () => {
	const { topicMapId, courseMode } = useViewerStore(
		(s) => ({
			topicMapId: s.topicMapId,
			courseMode: s.courseMode,
		}),
		shallow
	);

	const { handleModeChange } = useCourseSettingsController(topicMapId);

	const handlerModeType = (type: CourseModeType) => {
		if (type !== courseMode) {
			handleModeChange(type);
		}
	};

	return (
		<Card>
			<CardContent className="p-2 flex flex-col gap-3">
				<div className="text-sm font-medium">Режим прохождения</div>

				<TooltipProvider>
					<div className="flex flex-col gap-2">
						<Separator />
						<p className="text-xs text-foreground/80">
							Выберите формат прохождения маршрута
						</p>
						<div className="flex flex-row justify-start items-center gap-2">
							<Tooltip>
								<TooltipTrigger asChild>
									<Button
										variant="outline"
										onClick={() => handlerModeType(CourseModeType.Strict)}
										className={cn(
											'p-2 aspect-square',
											courseMode === CourseModeType.Strict &&
												'bg-primary text-primary-foreground'
										)}
									>
										<Rows4Icon className="w-5 h-5" />
									</Button>
								</TooltipTrigger>
								<TooltipContent>
									<p>
										Строго линейный — темы идут по порядку,
										без возможности пропуска.
									</p>
								</TooltipContent>
							</Tooltip>

							<Tooltip>
								<TooltipTrigger asChild>
									<Button
										variant="outline"
										onClick={() => handlerModeType(CourseModeType.Flexible)}
										className={cn(
											'p-2 aspect-square',
											courseMode === CourseModeType.Flexible &&
												'bg-primary text-primary-foreground'
										)}
									>
										<ChevronsLeftRightEllipsisIcon className="w-5 h-5" />
									</Button>
								</TooltipTrigger>
								<TooltipContent>
									<p>
										Смешанный — можно выбирать темы в
										произвольном порядке.
									</p>
								</TooltipContent>
							</Tooltip>
						</div>
					</div>
				</TooltipProvider>
			</CardContent>
		</Card>
	);
};
