import { memo } from 'react';
import { AsideBarConstants } from '@/widgets/editor/components/side-bar/side-bar-states';
import { AsideBarComponentCreator } from '@/features/node/editor/components/actions/creator/dnd/component-creator';
import { SearchComponents } from './search/search-components';

export const AsideBarTabContent = memo(
	({ activeTab }: { activeTab: AsideBarConstants | null }) => {
		if (activeTab === AsideBarConstants.Components)
			return <AsideBarComponentCreator />;
		if (activeTab === AsideBarConstants.Search) return <SearchComponents />;
		if (activeTab === AsideBarConstants.RoadMaps)
			return <p>Content for Tab 3</p>;
		if (activeTab === AsideBarConstants.Settings)
			return <p>Content for Tab 4</p>;
		return null;
	}
);

AsideBarTabContent.displayName = 'AsideBarTabContent';
