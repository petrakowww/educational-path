'use client';

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
	Switch,
} from '@/shared/ui';
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
import {
	ReactFlow,
	Background,
	BackgroundVariant,
	MiniMap,
	Controls,
} from 'reactflow';

import 'reactflow/dist/style.css';

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

export default function Page() {
	const isDesktop = useMediaQuery('(min-width: 1024px)');

	return (
		<div className="flex flex-grow h-screen flex-col">
			<header className="relative min-h-16 border-b px-6 flex items-center justify-between bg-background">
				<HeaderRouteTitle title={mockRoute.title} isVerified={false} />
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
				<ReactFlow
					nodes={[]} // временно пусто
					edges={[]} // временно пусто
					fitView
				>
					<Background
						variant={BackgroundVariant.Dots}
						gap={12}
						size={1}
					/>
					<MiniMap pannable zoomable />
					<Controls position="top-right" />
				</ReactFlow>
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
	);
}
