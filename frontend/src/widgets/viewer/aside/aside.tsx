import { Button, Separator, Sidebar, SidebarContent } from '@/shared/ui';
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

const mockRoute = {
	title: 'Изучение JavaScript',
	description:
		'Маршрут включает в себя изучение основ JS, DOM, ES6 и асинхронности.',
	topicCount: 12,
	nodeCount: 21,
	isLinear: false,
	isStarted: true,
	createdAt: '2025-05-08T16:36:52+00:00',
	updatedAt: '1746722212',
	author: {
		id: 'user-123',
		name: 'Иван Петровыыыыыыыыыыыыыыыыыы',
		avatarUrl: '',
	},
};

export function ViewerSidebar() {
	return (
		<Sidebar>
			<SidebarContent className='bg-muted p-4'>
				<AsideRouteMapNavigationWrapper />

				{true ? (
					<div className="flex flex-col gap-2">
						<CourseProgressCircle progress={45} />
					</div>
				) : (
					<Button variant="default" className="w-full">
						Начать прохождение
					</Button>
				)}

				<Separator />

				<RouteSidebarWrapper
					details={
						<>
							<AuthorInfo
								id={mockRoute.author.id}
								name={mockRoute.author.name}
								avatarUrl="https://github.com/shadcn.png"
							/>
							<RouteDetailsCard
								title="О маршруте"
								description={mockRoute.description}
							/>
							<Separator />
							<RouteDatesCard
								createdAt={mockRoute.createdAt}
								updatedAt={mockRoute.updatedAt}
							/>
							<Separator />
							<RouteTagsDetailsCard
								tags={['JavaScript', 'Асинхронность', 'ES6']}
							/>
							<Separator />
						</>
					}
					settings={
						<RouteSettingsPanel
							isAddedByUser={true}
							publicSettings={<LinearViewToggle />}
							privateSettings={
								<>
									<ModeSwitchToggle isLinear={true} />
									<Separator />
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
