import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Sortable from 'sortablejs';
import { TabDataProps } from '../entities/tab-interface';

export const useTabAction = (tabsData: TabDataProps) => {
	const [tabs, setTabs] = useState<TabDataProps[]>([tabsData]);
	const [activeTabId, setActiveTabId] = useState<string | undefined>(
		tabsData.id
	);
	const [isDragging, setIsDragging] = useState(false);
	const sortableRef = useRef<Sortable | null>(null);
	const tabListRef = useRef<HTMLDivElement>(null);

	const isActiveTab = (id: string) => {
		return activeTabId === id;
	};

	const handleTabOpen = (id: string) => {
		if (activeTabId !== id) {
			setActiveTabId(id);
		}
	};

	const handleTabPin = (id: string, isPin: boolean) => {
		const updatedTabs = tabs.map((t) =>
			t.id === id ? { ...t, isPinned: isPin } : t
		);
		const pinnedTabs = updatedTabs.filter((tab) => tab.isPinned);
		const unpinnedTabs = updatedTabs.filter((tab) => !tab.isPinned);
		const newTabs = [...pinnedTabs, ...unpinnedTabs];

		setTabs(newTabs);

		const newActiveTab = newTabs.find((tab) => tab.id === activeTabId);
		if (newActiveTab) {
			setActiveTabId(newActiveTab.id);
		}
	};

	const handleTabClose = (id: string, onNoTabsLeft?: () => void) => {
		const updatedTabs = tabs.filter((t) => t.id !== id);
		setTabs(updatedTabs);

		if (id === activeTabId) {
			const currentIndex = tabs.findIndex((t) => t.id === id);
			const previousTab =
				updatedTabs[currentIndex - 1] || updatedTabs[currentIndex];
			if (!previousTab) {
				return;
			}
			setActiveTabId(previousTab.id || updatedTabs[0].id);
		}

		if (updatedTabs.length === 0) {
			onNoTabsLeft?.();
		}
	};

	const handleTabCloseAll = () => {
		const newTabs = tabs.filter((tab) => tab.isPinned);
		setTabs(newTabs);
		if (newTabs.length > 0) {
			const active = newTabs.find((tab) => tab.id === activeTabId);
			setActiveTabId(active?.id || newTabs[0].id);
		}
	};

	const handleTabCloseOther = (id: string) => {
		const newTabs = tabs.filter((tab) => tab.id === id || tab.isPinned);
		setTabs(newTabs);
		if (newTabs.length > 0) {
			const active = newTabs.find((tab) => tab.id === activeTabId);
			setActiveTabId(active?.id || newTabs[0].id);
		}
	};

	const handleTabAdd = (title: string) => {
		const newTab: TabDataProps = {
			id: uuidv4(),
			title,
			isPinned: false,
		};

		setTabs((prevTabs) => [...prevTabs, newTab]);
		setActiveTabId(newTab.id);
	};

	const useTabDraggableEffect = (callbackEnd?: () => void) => {
		useEffect(() => {
			if (tabListRef.current) {
				sortableRef.current = new Sortable(tabListRef.current, {
					animation: 150,
					ghostClass: 'sortable-ghost',
					handle: '.tab-bar__item-draggable',
					onStart: () => {
						setIsDragging(true);
					},
					onMove: (evt) => {
						const relatedEl = evt.related;

						if (
							relatedEl.classList.contains(
								'tab-bar__item-pinned-tab'
							)
						) {
							return false;
						}
					},
					onEnd: () => {
						setIsDragging(false);
						callbackEnd?.();
					},
				});
			}

			return () => sortableRef.current?.destroy();
		}, [callbackEnd]);
	};

	return {
		handleTabAdd,
		handleTabClose,
		handleTabPin,
		handleTabCloseAll,
		handleTabOpen,
		handleTabCloseOther,
		isActiveTab,
		setIsDragging,
		useTabDraggableEffect,
		tabs,
		isDragging,
		activeTabId,
		tabListRef,
		sortableRef,
	};
};
