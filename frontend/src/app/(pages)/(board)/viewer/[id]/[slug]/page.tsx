'use client';

import { useInitializationMapInfo } from '@/features/view/hooks/use-initialization-card-info';
import { CourseViewType } from '@/shared/graphql/generated/output';
import { cn, useMediaQuery } from '@/shared/lib';
import { useViewerStore } from '@/shared/managers/store/viewer/view.store';
import { Separator, SidebarTrigger } from '@/shared/ui';
import { ViewerSidebar } from '@/widgets/viewer/aside/aside';
import { RouteViewMenubar } from '@/widgets/viewer/board/route-view-menubar';
import { ViewerDrawer } from '@/widgets/viewer/content-menu/viewer-drawer';
import { HeaderRouteTitle } from '@/widgets/viewer/header/header-route-title';
import { RouteHeaderStatsWrapper } from '@/widgets/viewer/header/header-stats-panel';
import { LinearViewViewer } from '@/widgets/viewer/linear/linear-viewer';
import { ReactFlowViewer } from '@/widgets/viewer/reactflow/viewer-reactflow';
import { ViewerPageSkeleton } from '@/widgets/viewer/skeleton/viewer-page';
import { useParams } from 'next/navigation';
import 'reactflow/dist/style.css';

export default function Page() {
	const isDesktop = useMediaQuery('(min-width: 1024px)');
	const { viewMode } = useViewerStore(
		(state) => ({ viewMode: state.viewMode }),
		(a, b) => a.viewMode === b.viewMode
	);
	const params = useParams();

	const { data, loading, error, refetch } = useInitializationMapInfo(
		String(params?.id)
	);

	if (loading) return <ViewerPageSkeleton />;

	return (
		<div className="flex flex-row w-full">
			
			<ViewerSidebar
				route={data?.getUserTopicMap.route}
				course={data?.getUserTopicMap.userCourse}
				error={error}
				refetch={() => refetch?.()}
			/>
			<div className="bg-muted/40 border-r">
				<SidebarTrigger />
			</div>
			<div
				className={cn(
					'flex flex-grow h-full flex-col',
					viewMode === CourseViewType.Graph ? 'h-screen' : 'h-full'
				)}
			>
				<header className="relative min-h-16 border-b px-6 flex items-center justify-between bg-background">
					<HeaderRouteTitle
						title={data?.getUserTopicMap.route?.title ?? ''}
						verificationStatus={
							data?.getUserTopicMap.route?.isVerified
						}
					/>
					<RouteHeaderStatsWrapper isDesktop={isDesktop} />
				</header>

				{viewMode === CourseViewType.Linear && (
					<div className='mx-6 flex flex-col gap-2'>
						<div className="ml-auto mt-3">
							<RouteViewMenubar />
						</div>
						<Separator />
					</div>
				)}

				<div className="flex-1 relative">
					{viewMode === CourseViewType.Graph ? (
						<ReactFlowViewer
							nodes={data?.getUserTopicMap.nodes}
							edges={data?.getUserTopicMap.edges}
							course={data?.getUserTopicMap.userCourse}
						/>
					) : (
						<LinearViewViewer
							nodes={data?.getUserTopicMap.nodes}
							edges={data?.getUserTopicMap.edges}
							course={data?.getUserTopicMap.userCourse}
						/>
					)}

					<ViewerDrawer />
					{viewMode === CourseViewType.Graph && (
						<div className="absolute bottom-4 left-4 z-50 inline-block">
							<RouteViewMenubar />
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
