'use client';

import {
	ToggleGroup,
	ToggleGroupItem,
} from '@/shared/ui/toggle-group/toggle-group';
import { useRouteStore } from '@/shared/managers/store/maps/filters.store';
import { Grid, List } from 'lucide-react';

function LayoutToggle() {
	const layout = useRouteStore((state) => state.layout);
	const setLayout = useRouteStore((state) => state.setLayout);

	return (
		<ToggleGroup
			type="single"
			value={layout}
			onValueChange={(val) => val && setLayout(val as 'grid' | 'list')}
		>
			<ToggleGroupItem
				value="grid"
				aria-label="Grid view"
				className={layout === 'grid' ? '' : ''}
			>
				<Grid className="w-4 h-4" />
			</ToggleGroupItem>
			<ToggleGroupItem value="list" aria-label="List view">
				<List className="w-4 h-4" />
			</ToggleGroupItem>
		</ToggleGroup>
	);
}

export default LayoutToggle;
