import {
	Button,
	Separator,
	Sidebar,
	SidebarContent,
	Skeleton,
} from '@/shared/ui';
import { CourseProgressCircle } from './information/course-progress-circle';
import { AsideRouteMapNavigationWrapper } from './links/aside-route-map-navigation';
import { AuthorInfo } from './route/author-info';
import { RouteDatesCard } from './route/route-dates-info';
import { RouteDetailsCard } from './route/route-details-info';
import { RouteSidebarWrapper } from './route/route-sidebar-wrapper';
import { RouteTagsDetailsCard } from './route/route-tags-info';
import { LinearViewToggle } from './settings/linear-view-togle';
import { ModeSwitchToggle } from './settings/mode-switch-toggle';
import { ResetCourseButton } from './settings/reset-coure-button';
import { RouteSettingsPanel } from './settings/route-settings-panel';
import { GetPreviewCourseInfoQuery } from '@/shared/graphql/generated/output';
import { ApolloError } from '@apollo/client';
import { StartCourseButton } from '@/features/view/components/start-course-button';
import { useViewerStore } from '@/shared/managers/store/viewer/view.store';
import { shallow } from 'zustand/shallow';
import { CourseDeadlineCalendarWrapper } from './calendar/calendar-wrapper';

interface ViewerSidebarProps {
	route?: GetPreviewCourseInfoQuery['getUserTopicMap']['route'];
	course?: GetPreviewCourseInfoQuery['getUserTopicMap']['userCourse'];
	error?: ApolloError;
	refetch?: () => void;
}

export function ViewerSidebar(props: ViewerSidebarProps) {
	const { route, error, course, refetch } = props;

	const { isCourseAdded, topicMapId } = useViewerStore(
		(state) => ({
			isCourseAdded: state.isCourseAdded,
			topicMapId: state.topicMapId,
		}),
		shallow
	);

	console.log(route?.tags);

	if (error) {
		return (
			<Sidebar>
				<SidebarContent className="p-4 bg-muted">
					<AsideRouteMapNavigationWrapper />
					<p className="text-sm text-destructive">
						Не удалось загрузить маршрут.
					</p>
					<Button variant="outline" onClick={refetch}>
						Повторить попытку
					</Button>
				</SidebarContent>
			</Sidebar>
		);
	}

	if (!route) {
		return (
			<Sidebar>
				<SidebarContent className="p-4 bg-muted space-y-4">
					<Skeleton className="h-10 w-full" />
					<Separator />
					<Skeleton className="h-6 w-1/2" />
					<Skeleton className="h-24 w-full" />
					<Separator />
					<Skeleton className="h-6 w-1/3" />
					<Skeleton className="h-16 w-full" />
				</SidebarContent>
			</Sidebar>
		);
	}

	return (
		<Sidebar>
			<SidebarContent className="bg-muted p-4 overflow-y-auto">
				<AsideRouteMapNavigationWrapper />

				{isCourseAdded ? (
					<div className="flex flex-col gap-2">
						<CourseProgressCircle />
					</div>
				) : (
					topicMapId && <StartCourseButton topicMapId={topicMapId} />
				)}

				<Separator />

				<RouteSidebarWrapper
					details={
						<>
							<AuthorInfo
								id={route.user.id}
								name={route.user.name}
								avatarUrl={route.user.avatar ?? ''}
							/>
							<RouteDetailsCard
								title="О маршруте"
								description={route.description}
							/>
							<Separator />
							<RouteDatesCard
								createdAt={route.createdAt}
								updatedAt={route.updatedAt}
							/>
							<Separator />
							<RouteTagsDetailsCard
								tags={route.tags?.map((routeTag) => routeTag?.tag?.name ?? '')}
							/>
							<Separator />
							<Button className='w-full bg-yellow-500'>Добавить в избранное</Button>
						</>
					}
					settings={
						<RouteSettingsPanel
							isAddedByUser={isCourseAdded}
							publicSettings={
								<>
									<LinearViewToggle />
									<Separator />
									<ModeSwitchToggle />
									<Separator />
								</>
							}
							privateSettings={
								<>
									<CourseDeadlineCalendarWrapper
										initialDeadline={course?.deadline}
									/>
									<ResetCourseButton />
								</>
							}
						/>
					}
				/>
			</SidebarContent>
		</Sidebar>
	);
}
