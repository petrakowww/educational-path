'use client';

import { useComponentDimensions, useMediaQuery } from '@/shared/lib';
import {
	AsideBarConstants,
	AsideBarWidgetFunctionalTabs,
	ButtonWidgetSaveRoadmap,
	ButtonWidgetVisibilityDialog,
	Board,
	LinkWidgetViewBoard,
	TabBarWidgetOpenBoards,
	AsideBarWidgetComponentEditor,
	MobileMenuWidget,
	LinkWidgetToDashboardWidget,
	AsideBarWidgetComponentCreator,
} from '@/widgets/editor/components';
import { useRef, useState } from 'react';
import { ThemeButton } from '@/widgets/ui';

// TODO: проблема с загрузкой (ширина сначала не вычислена из-за чего появляется прокрутка)

export default function Page() {
	const sidePartOfEditorRef = useRef<HTMLDivElement | null>(null);
	const [activeTab, setActiveTab] = useState<AsideBarConstants | null>(null);

	const isDesktop = useMediaQuery('(min-width: 1024px)');
	const { width } = useComponentDimensions(sidePartOfEditorRef);

	return (
		<div className="grid grid-rows-[auto_1fr] grid-cols-[auto_1fr] min-h-[100vh] min-w-[100vw] max-w-full max-h-full">
			{/* LINK */}
			<div
				ref={sidePartOfEditorRef}
				className="row-start-1 col-start-1 p-1 border-b border-r justify-center"
			>
				<LinkWidgetToDashboardWidget />
			</div>

			{/* HEADER */}
			<header
				className="row-start-1 col-start-2 col-span-1 border-b"
				style={{
					maxWidth: `calc(100vw - ${width}px)`,
				}}
			>
				<nav className="flex justify-between items-center py-1 px-1 h-full">
					<div className="relative flex-1 overflow-hidden">
						<TabBarWidgetOpenBoards />
					</div>
					{isDesktop ? (
						<div className="flex gap-2 h-full ml-1">
							<ButtonWidgetVisibilityDialog />
							<LinkWidgetViewBoard />
							<ButtonWidgetSaveRoadmap />
						</div>
					) : (
						<div className="h-full ml-1">
							<MobileMenuWidget>
								<div className="flex flex-col gap-4">
									<ButtonWidgetVisibilityDialog />
									<LinkWidgetViewBoard />
									<ButtonWidgetSaveRoadmap />
								</div>
							</MobileMenuWidget>
						</div>
					)}
				</nav>
			</header>

			{/* SIDEBAR */}
			<aside className="row-start-2 col-start-1 p-1 border-r flex flex-col items-center justify-between">
				<nav>
					<AsideBarWidgetFunctionalTabs
						activeTab={activeTab}
						onTabSelect={setActiveTab}
					/>
				</nav>
				<div className="my-2">
					<ThemeButton />
				</div>
			</aside>

			{/* MAIN CONTENT */}
			<main className="row-start-2 col-start-2">
				<div className="h-full w-full flex relative">
					{activeTab === AsideBarConstants.Components && (
						<AsideBarWidgetComponentCreator/>
					)}
					{activeTab === AsideBarConstants.Search && (
						<p>Content for Tab 2</p>
					)}
					{activeTab === AsideBarConstants.RoadMaps && (
						<p>Content for Tab 3</p>
					)}
					{activeTab === AsideBarConstants.Settings && (
						<p>Content for Tab 4</p>
					)}
					<Board />
					<AsideBarWidgetComponentEditor />
				</div>
			</main>
		</div>
	);
}
