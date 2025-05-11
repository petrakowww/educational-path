import { memo } from 'react';
import { AsideBarConstants } from '@/widgets/editor/components/side-bar/side-bar-states';
import { AsideBarComponentCreator } from '@/features/node/editor/components/actions/creator/dnd/component-creator';
import { SearchComponents } from './search/search-components';
import { AsideBarExtendedSettings } from './settings/editor-settings';
import { RoadmapListPanel } from './routes/roadmap-list-panel';

export const AsideBarTabContent = memo(
	({ activeTab }: { activeTab: AsideBarConstants | null }) => {
		if (activeTab === AsideBarConstants.Components)
			return <AsideBarComponentCreator />;
		if (activeTab === AsideBarConstants.Search) return <SearchComponents />;
		if (activeTab === AsideBarConstants.RoadMaps)
			return <RoadmapListPanel />;
		if (activeTab === AsideBarConstants.Settings)
			return <AsideBarExtendedSettings />;
		return null;
	}
);

AsideBarTabContent.displayName = 'AsideBarTabContent';
