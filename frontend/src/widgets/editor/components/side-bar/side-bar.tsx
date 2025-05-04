'use client';

import { memo, useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/shared/ui';
import { ComponentIcon, MapIcon, SearchIcon, SettingsIcon } from 'lucide-react';
import { AsideBarConstants } from './side-bar-states';

interface Props {
	onTabChange?: (tab: AsideBarConstants | null) => void;
	activeTab?: AsideBarConstants | null;
}

const tabItems = [
	{ value: AsideBarConstants.Components, icon: ComponentIcon },
	{ value: AsideBarConstants.Search, icon: SearchIcon },
	{ value: AsideBarConstants.RoadMaps, icon: MapIcon },
	{ value: AsideBarConstants.Settings, icon: SettingsIcon },
];

export const AsideBarFunctionalTabs = memo(({ onTabChange, activeTab }: Props) => {
	const [localTab, setLocalTab] = useState<AsideBarConstants | null>(activeTab || null);
	const currentTab = activeTab ?? localTab;

	const handleTabSelect = (tab: AsideBarConstants): void => {
		const newTab = currentTab === tab ? null : tab;
		setLocalTab(newTab);
		onTabChange?.(newTab);
	};

	return (
		<Tabs className="mt-1" value={currentTab || ''}>
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
});

AsideBarFunctionalTabs.displayName = 'AsideBarFunctionalTabs';
