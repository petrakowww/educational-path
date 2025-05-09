'use client';

import { useGetPreviewCourseInfoQuery } from '@/shared/graphql/generated/output';
import { useMediaQuery } from '@/shared/lib';
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	Button,
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	Label,
	Separator,
	Sidebar,
	SidebarTrigger,
	Switch,
} from '@/shared/ui';
import { ViewerSidebar } from '@/widgets/viewer/aside/aside';
import { CourseProgressCircle } from '@/widgets/viewer/aside/information/course-progress-circle';
import {
	AsideRouteMapNavigation,
	AsideRouteMapNavigationWrapper,
} from '@/widgets/viewer/aside/links/aside-route-map-navigation';
import { AuthorInfo } from '@/widgets/viewer/aside/route/author-info';
import { RouteDatesCard } from '@/widgets/viewer/aside/route/route-dates-info';
import { RouteDetailsCard } from '@/widgets/viewer/aside/route/route-details-info';
import { RouteSidebarWrapper } from '@/widgets/viewer/aside/route/route-sidebar-wrapper';
import { RouteTagsDetailsCard } from '@/widgets/viewer/aside/route/route-tags-info';
import { LinearViewToggle } from '@/widgets/viewer/aside/settings/linear-view-togle';
import { ModeSwitchToggle } from '@/widgets/viewer/aside/settings/mode-switch-toggle';
import { ResetCourseButton } from '@/widgets/viewer/aside/settings/reset-coure-button';
import { RouteSettingsPanel } from '@/widgets/viewer/aside/settings/route-settings-panel';
import { RouteViewMenubar } from '@/widgets/viewer/board/route-view-menubar';
import { HeaderRouteTitle } from '@/widgets/viewer/header/header-route-title';
import {
	RouteHeaderStatsPanelDesktop,
	RouteHeaderStatsWrapper,
} from '@/widgets/viewer/header/header-stats-panel';
import { ReactFlowViewer } from '@/widgets/viewer/reactflow/viewer-reactflow';
import { ViewerPageSkeleton } from '@/widgets/viewer/skeleton/viewer-page';
import { useParams } from 'next/navigation';
import {
	ReactFlow,
	Background,
	BackgroundVariant,
	MiniMap,
	Controls,
} from 'reactflow';

import 'reactflow/dist/style.css';

export default function Page() {
	const isDesktop = useMediaQuery('(min-width: 1024px)');
	const params = useParams();

	const { data, loading, error, refetch } = useGetPreviewCourseInfoQuery({
		variables: { routeId: String(params?.id) },
		skip: !params?.id,
	});

	if (loading) return <ViewerPageSkeleton/>;
	
	return (
		<div className="flex flex-row w-full">
			<ViewerSidebar
				route={data?.getUserTopicMap.route}
				course={data?.getUserTopicMap.UserCourse}
				error={error}
				refetch={() => refetch?.()}
			/>
			<div className="bg-muted/40 border-r">
				<SidebarTrigger />
			</div>
			<div className="flex flex-grow h-screen flex-col">
				<header className="relative min-h-16 border-b px-6 flex items-center justify-between bg-background">
					<HeaderRouteTitle
						title={data?.getUserTopicMap.route?.title ?? ''}
						isVerified={false}
					/>
					<RouteHeaderStatsWrapper
						progress={6}
						completed={1}
						inProgress={0}
						skipped={0}
						topicCount={5}
						nodeCount={18}
						isDesktop={isDesktop}
					/>
				</header>

				<div className="flex-1 relative">
					<ReactFlowViewer nodes={data?.getUserTopicMap.nodes} edges={data?.getUserTopicMap.edges}/>
					<div className="absolute bottom-4 left-3">
						<RouteViewMenubar
							isLinearMode={true}
							onModeChange={(val) => console.log('mode:', val)}
							view="graph"
							onViewChange={(val) => console.log('view:', val)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
