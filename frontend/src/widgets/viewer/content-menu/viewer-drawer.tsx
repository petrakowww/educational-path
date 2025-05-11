'use client';

import {
	Drawer,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	Badge,
	Skeleton,
	Separator,
} from '@/shared/ui';
import { NodeStatusSelect } from './components/node-status-select';
import { useViewerStore } from '@/shared/managers/store/viewer/view.store';
import { useNodeViewerStore } from '@/shared/managers/store/viewer/node-viewer.store';
import { useMemo } from 'react';
import { NodeType } from '@/features/node/editor/types/node';
import { ViewerEditor } from './components/tiptap-content';
import {
	useGetUserTopicProgressQuery,
	NodeStatus,
} from '@/shared/graphql/generated/output';
import { shallow } from 'zustand/shallow';
import { ProgressSlider } from './components/progress-slider';
import { NodeLinksSection } from './components/node-links-section';

export const ViewerDrawer = () => {
	const { isSidebarOpen, toggleSidebar } = useViewerStore(
		(state) => ({
			isSidebarOpen: state.isSidebarOpen,
			toggleSidebar: state.toggleSidebar,
			topicMapId: state.topicMapId,
		}),
		(a, b) => a.isSidebarOpen === b.isSidebarOpen
	);
	const { selectedNodeId, nodes } = useNodeViewerStore(
		(state) => ({
			nodes: state.nodes,
			selectedNodeId: state.selectedNodeId,
		}),
		(a, b) => a.selectedNodeId === b.selectedNodeId
	);
	const isCourseAdded = useViewerStore((s) => s.isCourseAdded, shallow);

	const node = useMemo(
		() => nodes.find((n) => n.id === selectedNodeId),
		[nodes, selectedNodeId]
	);
	const nodeId = node?.id;
	const {
		data: progressData,
		loading: progressLoading,
	} = useGetUserTopicProgressQuery({
		variables: { topicNodeId: nodeId ?? '' },
		skip: !nodeId,
	});

	const progressValue = progressData?.getUserTopicProgress.progressValue ?? 0;
	const currentStatus = progressData?.getUserTopicProgress.status;

	if (!node || progressLoading) {
		return (
			<Drawer
				direction="right"
				open={isSidebarOpen}
				onOpenChange={toggleSidebar}
			>
				<DrawerContent className="pointer-events-auto touch-none">
					<DrawerHeader className="mb-4 space-y-3">
						<DrawerTitle>
							<Skeleton className="h-6 w-full" />
						</DrawerTitle>
						<Skeleton className="h-6 w-2/3" />
						<Skeleton className="h-4 w-1/3" />
						<Skeleton className="h-[100px] w-full mt-4" />
					</DrawerHeader>
				</DrawerContent>
			</Drawer>
		);
	}

	const isTopic = node.type === NodeType.topic;
	const isSubTopic = node.type === NodeType.subtopic;
	const title = node.data.title;
	const content = node.data.topicProps?.topicContent ?? '';
	const links = node.data.linkProps?.links ?? [];

	return (
		<Drawer
			direction="right"
			open={isSidebarOpen}
			onOpenChange={toggleSidebar}
		>
			<DrawerContent className="pointer-events-auto touch-none max-w-[550px] overflow-y-auto overflow-x-hidden">
				<DrawerHeader>
					<div>
						<div className="flex items-start justify-between mb-4">
							<div className="flex items-center gap-2">
								<DrawerTitle
									className={isTopic ? 'text-2xl' : 'text-xl'}
								>
									{title}
								</DrawerTitle>
								<Badge variant="outline" className="text-xs">
									{isTopic
										? 'Основная тема'
										: isSubTopic
											? 'Подтема'
											: 'Блок'}
								</Badge>
							</div>

							{isCourseAdded && (
								<NodeStatusSelect
									topicNodeId={node.id}
									value={currentStatus}
								/>
							)}
						</div>
						<Separator />
					</div>

					{!isCourseAdded && (
						<p className="text-sm text-muted-foreground mt-2">
							Добавьте данный курс, чтобы начать проходить
							маршрут.
						</p>
					)}

					{isCourseAdded &&
						(currentStatus === NodeStatus.InProgress ||
							currentStatus === NodeStatus.Completed) && (
							<div className="my-4">
								<ProgressSlider
									topicNodeId={node.id}
									progressValue={progressValue}
									enabled={
										isCourseAdded &&
										[
											NodeStatus.InProgress,
											NodeStatus.Completed,
										].includes(currentStatus)
									}
								/>
							</div>
						)}

					{content && <ViewerEditor content={content} />}
				</DrawerHeader>

				<NodeLinksSection links={links} />
			</DrawerContent>
		</Drawer>
	);
};
