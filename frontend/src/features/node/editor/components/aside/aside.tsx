import { cn } from '@/shared/lib';
import {
	Tabs,
	TabsList,
	TabsTrigger,
	TabsContent,
	Separator,
	Button,
} from '@/shared/ui';
import { XIcon } from 'lucide-react';
import { useCallback } from 'react';
import { nodeSettingsFactory } from './editor-factory';
import { useEditorAsideStore } from '@/shared/managers/store/editor.store';
import { useNodeStore } from '@/shared/managers/store/nodes.store';

export const AsideBarComponentEditor = () => {
	const { isOpenMenu, setEditorStatusMenu } = useEditorAsideStore();
	const selectedNode = useNodeStore(
		(state) => state.selectedNode,
		(a, b) => a?.id === b?.id
	);

	const handleCloseEditor = useCallback(() => {
		setEditorStatusMenu(false);
	}, [setEditorStatusMenu]);

	if (!isOpenMenu || !selectedNode) {
		return null;
	}

	const finalClassName = cn(
		isOpenMenu ? 'block' : 'hidden',
		'absolute top-0 right-0 h-full shadow-left',
		'p-4 px-3 bg-background overflow-y-auto'
	);

	const { General, Content, hasContent, Advanced } =
		nodeSettingsFactory(selectedNode);

	return (
		<aside className={finalClassName}>
			<Tabs defaultValue="general">
				<TabsList className="grid w-full grid-flow-col gap-x-1 justify-between">
					<TabsTrigger value="general">Стили</TabsTrigger>
					{hasContent && Content && (
						<TabsTrigger value="content">Основа</TabsTrigger>
					)}
					<TabsTrigger value="settings">Настройки</TabsTrigger>
					<Button
						className="h-full w-full p-0 m-0 aspect-square"
						onClick={handleCloseEditor} // Можно спокойно использовать, так как хук всегда вызывается
						variant={'outline'}
					>
						<XIcon />
					</Button>
				</TabsList>
				<Separator className="mt-2 mb-3" />

				<TabsContent value="general">
					<div className="flex flex-col gap-6">
						<General node={selectedNode} />
					</div>
				</TabsContent>

				{hasContent && Content && (
					<TabsContent value="content">
						<div className="fkex flex-col gap-6">
							<Content node={selectedNode} />
						</div>
					</TabsContent>
				)}

				<TabsContent value="settings">
					<div className="flex flex-col gap-6">
						<Advanced node={selectedNode} />
					</div>
				</TabsContent>
			</Tabs>
		</aside>
	);
};
