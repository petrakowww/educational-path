// features/viewer/components/viewer-drawer.tsx
'use client';

import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from '@/shared/ui';
import { useViewerStore } from '@/shared/managers/store/viewer/view.store';
import { useNodeViewerStore } from '@/shared/managers/store/viewer/node-viewer.store';

export const ViewerDrawer = () => {
	const { isSidebarOpen, toggleSidebar } = useViewerStore();
	const { selectedNodeId, nodes } = useNodeViewerStore();

	const node = nodes.find((n) => n.id === selectedNodeId);

	if (!node) return null;

	return (
		<Drawer open={isSidebarOpen} onOpenChange={toggleSidebar}>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>{node.data.title}</DrawerTitle>
					<DrawerDescription>
						This action cannot be undone.
					</DrawerDescription>
				</DrawerHeader>
			</DrawerContent>
		</Drawer>
	);
};
