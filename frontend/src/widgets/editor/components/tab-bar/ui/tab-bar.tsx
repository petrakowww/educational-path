'use client';

import { Tabs } from '@/shared/ui';
import { useTabAction } from '../hook/use-tab-action';

import { cn, useScrollable } from '@/shared/lib';
import { useRef } from 'react';
import { Tab } from './tab';
import { TabContextMenu } from './context-menu';
import { TabDialogMenu } from './dialog-menu';
import { TabListScrollableContainer } from './scrollable-container';

const untitledExample = { id: 'tab1', title: 'Pinned Tab 1', isPinned: true };

export const TabBar = () => {
	const {
		isDragging,
		activeTabId,
		tabs,
		isActiveTab,
		handleTabOpen,
		handleTabClose,
		handleTabCloseOther,
		handleTabCloseAll,
		handleTabAdd,
		handleTabPin,
		useTabDraggableEffect,
		tabListRef,
	} = useTabAction(untitledExample);

	const { scrollToElement, scrollToEnd } = useScrollable(tabListRef);

	const tabRefs = useRef<Record<string, HTMLDivElement | null>>({});

	useTabDraggableEffect();

	const handleTabOpenWithScrollEffect = (id: string) => {
		handleTabOpen(id);
		requestAnimationFrame(() => {
			const tabRef = tabRefs.current[id];
			if (tabRef && !isDragging) {
				scrollToElement(tabRef);
			}
		});
	};

	const handleTabAddWithScrollEffect = (title: string) => {
		handleTabAdd(title);
		requestAnimationFrame(() => {
			if (!isDragging) {
				scrollToEnd();
			}
		});
	};

	return (
		<Tabs value={activeTabId} className="flex gap-1">
			<TabListScrollableContainer
				ref={tabListRef}
				isMustTouchMove={isDragging}
			>
				{tabs.map((tab) => (
					<div
						key={tab.id}
						className={cn(
							'relative flex items-center',
							tab.isPinned
								? 'tab-bar__item-pinned-tab'
								: 'tab-bar__item-draggable'
						)}
						ref={(el) => {
							tabRefs.current[tab.id] = el;
						}}
					>
						<TabContextMenu
							tab={tab}
							onPin={handleTabPin}
							onFocus={handleTabOpen}
							onClose={handleTabClose}
							onCloseOther={handleTabCloseOther}
							onCloseAll={handleTabCloseAll}
						>
							<Tab
								tab={tab}
								isActive={isActiveTab(tab.id)}
								isDragging={isDragging}
								onSelect={handleTabOpenWithScrollEffect}
								onClose={handleTabClose}
							/>
						</TabContextMenu>
					</div>
				))}
			</TabListScrollableContainer>
			<div className="mx-2">
				<TabDialogMenu
					onAddNewCardCallback={handleTabAddWithScrollEffect}
				/>
			</div>
		</Tabs>
	);
};
