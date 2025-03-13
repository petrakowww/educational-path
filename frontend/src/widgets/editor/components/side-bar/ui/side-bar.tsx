'use client';

import { Tabs, TabsList, TabsTrigger } from '@/shared/ui';
import { ComponentIcon, MapIcon, SearchIcon, SettingsIcon } from 'lucide-react';

import { Dispatch, SetStateAction } from 'react';
import { AsideBarConstants } from '../constants/side-bar-states';

interface AsideBarWidgetFunctionalTabsProps {
	activeTab: AsideBarConstants | null;
	onTabSelect?: Dispatch<SetStateAction<AsideBarConstants | null>>;
}

const tabItems = [
	{ value: AsideBarConstants.Components, icon: ComponentIcon },
	{ value: AsideBarConstants.Search, icon: SearchIcon },
	{ value: AsideBarConstants.RoadMaps, icon: MapIcon },
	{ value: AsideBarConstants.Settings, icon: SettingsIcon },
];

export const AsideBarWidgetFunctionalTabs = ({
	activeTab,
	onTabSelect,
}: AsideBarWidgetFunctionalTabsProps) => {
	const handleTabSelect = (tab: AsideBarConstants): void => {
		if (onTabSelect) {
			onTabSelect((prevTab) => (prevTab === tab ? null : tab));
		}
	};

	return (
		<Tabs className="mt-1" value={activeTab || ''}>
			<TabsList className="grid h-full grid-cols-1 gap-y-4 p-0 rounded-none bg-background">
				{tabItems.map(({ value, icon: Icon }) => (
					<TabsTrigger
						key={value}
						value={value}
						onClick={() => handleTabSelect(value)}
						className="bg-secondary py-2 hover:bg-primary/90 hover:text-primary-foreground m-0 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
					>
						<Icon className="p-0" />
					</TabsTrigger>
				))}
			</TabsList>
		</Tabs>
	);
};
