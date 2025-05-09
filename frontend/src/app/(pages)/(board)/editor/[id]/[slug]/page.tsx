'use client';

import { useEffect, useRef, useState } from 'react';
import { useComponentDimensions, useMediaQuery } from '@/shared/lib';

import { ThemeButton } from '@/widgets/ui';
import { Board } from '@/features/node/editor/components/board';
import { AsideBarComponentEditor } from '@/features/node/editor/components/aside/components/aside-menu/aside-path';
import { AsideBarConstants } from '@/widgets/editor/components/side-bar/side-bar-states';
import { LinkToControlPanel } from '@/widgets/editor/components/to-control-panel';
import { TabBar } from '@/widgets/editor/components/tab-bar/ui/tab-bar';
import { VisibilityDialogMenu } from '@/widgets/editor/components/visibility-menu';
import { ViewBoard } from '@/widgets/editor/components/view';
import { SaveRoadmap } from '@/widgets/editor/components/save/save-board';
import { MobileMenu } from '@/widgets/editor/components/mobile-menu';
import { AsideBarFunctionalTabs } from '@/widgets/editor/components/side-bar/side-bar';
import { AsideBarTabContent } from '@/features/node/editor/components/actions/creator/tab-content';
import { useParams } from 'next/navigation';
import { useGetTopicMapQuery } from '@/shared/graphql/generated/output';
import { useNodeStore } from '@/shared/managers/store/nodes.store';
import { useEdgeStore } from '@/shared/managers/store/edge.store';
import { shallow } from 'zustand/shallow';
import { useInitializationMap } from '@/features/node/editor/hooks/use-initialization-map';
import { SpinnerOverlay } from '@/shared/ui/spinner-overlay/spinner-overlay';

export default function Page() {
	const initialized = useRef(false);
	const params = useParams<{ id: string; slug: string }>();

	if (!params?.id) {
		return null;
	}

	const { loading, error, isReady } = useInitializationMap();

	const showSpinner = loading || !isReady;

	const sidePartOfEditorRef = useRef<HTMLDivElement | null>(null);
	const [activeTab, setActiveTab] = useState<AsideBarConstants | null>(null);

	const isDesktop = useMediaQuery('(min-width: 1024px)');
	const { width } = useComponentDimensions(sidePartOfEditorRef);

	return (
		<div className="relative">
			{showSpinner && <SpinnerOverlay />}
			<div className="grid grid-rows-[auto_1fr] grid-cols-[auto_1fr] min-h-[100vh] min-w-[100vw] max-w-full max-h-full">
				{/* LINK */}
				<div
					ref={sidePartOfEditorRef}
					className="row-start-1 col-start-1 p-1 border-b border-r justify-center"
				>
					<LinkToControlPanel />
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
							<TabBar />
						</div>
						{isDesktop ? (
							<div className="flex gap-2 h-full ml-1">
								<VisibilityDialogMenu />
								<ViewBoard />
								<SaveRoadmap />
							</div>
						) : (
							<div className="h-full ml-1">
								<MobileMenu>
									<div className="flex flex-col gap-4">
										<VisibilityDialogMenu />
										<ViewBoard />
										<SaveRoadmap />
									</div>
								</MobileMenu>
							</div>
						)}
					</nav>
				</header>

				{/* SIDEBAR */}
				<aside className="row-start-2 col-start-1 p-1 border-r flex flex-col items-center justify-between">
					<nav>
						<AsideBarFunctionalTabs
							activeTab={activeTab}
							onTabChange={setActiveTab}
						/>
					</nav>
					<div className="my-2">
						<ThemeButton />
					</div>
				</aside>

				{/* MAIN CONTENT */}
				<main className="row-start-2 col-start-2">
					<div className="h-full w-full flex relative">
						<AsideBarTabContent activeTab={activeTab} />
						<Board />
						<AsideBarComponentEditor />
					</div>
				</main>
			</div>
		</div>
	);
}
