import { cn } from '@/shared/lib';
import { useCallback } from 'react';
import { useEditorAsideStore } from '@/shared/managers/store/editor.store';
import { AsideBarNodeEditor } from './aside-node';
import { AsideBarEdgeEditor } from './aside-edge';

export const AsideBarComponentEditor = () => {
	const { isOpenMenu, selectedEditorType, closeEditor } =
		useEditorAsideStore();

	const handleCloseEditor = useCallback(() => {
		closeEditor();
	}, [closeEditor]);

	if (!isOpenMenu && !selectedEditorType) {
		return null;
	}

	const finalClassName = cn(
		isOpenMenu ? 'block' : 'hidden',
		'absolute top-0 right-0 h-full shadow-left',
		'p-4 px-3 bg-background overflow-y-auto'
	);

	return (
		<>
			{selectedEditorType === 'node' && (
				<AsideBarNodeEditor
					handleCloseEditor={handleCloseEditor}
					asideClassName={finalClassName}
				/>
			)}
			{selectedEditorType === 'edge' && (
				<AsideBarEdgeEditor
					handleCloseEditor={handleCloseEditor}
					asideClassName={finalClassName}
				/>
			)}
		</>
	);
};
