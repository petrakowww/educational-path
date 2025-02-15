'use client';

import { Tabs, TabsList, TabsTrigger } from '@/shared/ui';
import { Component, Map, Search, Settings } from 'lucide-react';

import { Dispatch, SetStateAction } from 'react';
import { AsideBarConstants } from '@/widgets/editor/components';

interface AsideBarWidgetFunctionalTabsProps {
	activeTab: AsideBarConstants | null;
	onTabSelect?: Dispatch<SetStateAction<AsideBarConstants | null>>;
}

export const AsideBarWidgetFunctionalTabs = (
	props: AsideBarWidgetFunctionalTabsProps
) => {
	const { activeTab, onTabSelect } = props;

	const handleTabSelect = (tab: AsideBarConstants): void => {
		if (onTabSelect) {
			onTabSelect((prevTab) => (prevTab === tab ? null : tab));
		}
	};

	return (
		<Tabs className="mt-1" value={activeTab || ''}>
			<TabsList className="grid h-full grid-cols-1 gap-y-4 p-0 rounded-none bg-background">
				<TabsTrigger
					value={AsideBarConstants.Components}
					onClick={() =>
						handleTabSelect(AsideBarConstants.Components)
					}
					className="bg-secondary py-2 hover:bg-primary/90 hover:text-primary-foreground m-0"
				>
					<Component className="p-0" />
				</TabsTrigger>
				<TabsTrigger
					value={AsideBarConstants.Search}
					onClick={() => handleTabSelect(AsideBarConstants.Search)}
					className="bg-secondary py-2 hover:bg-primary/90 hover:text-primary-foreground m-0"
				>
					<Search className="p-0" />
				</TabsTrigger>
				<TabsTrigger
					value={AsideBarConstants.RoadMaps}
					onClick={() => handleTabSelect(AsideBarConstants.RoadMaps)}
					className="bg-secondary py-2 hover:bg-primary/90 hover:text-primary-foreground m-0"
				>
					<Map className="p-0" />
				</TabsTrigger>
				<TabsTrigger
					value={AsideBarConstants.Settings}
					onClick={() => handleTabSelect(AsideBarConstants.Settings)}
					className="bg-secondary py-2 hover:bg-primary/90 hover:text-primary-foreground m-0"
				>
					<Settings className="p-0" />
				</TabsTrigger>
			</TabsList>
		</Tabs>
	);
};
