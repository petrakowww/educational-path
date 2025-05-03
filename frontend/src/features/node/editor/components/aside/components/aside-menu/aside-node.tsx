import {
	Tabs,
	TabsList,
	TabsTrigger,
	TabsContent,
	Separator,
	Button,
} from '@/shared/ui';
import { nodeSettingsFactory } from '../../editor-factory';
import { XIcon } from 'lucide-react';
import { useNodeStore } from '@/shared/managers/store/nodes.store';

interface IAsideBarNodeEditor {
	handleCloseEditor?: () => void;
	asideClassName: string;
}

export const AsideBarNodeEditor = (props: IAsideBarNodeEditor) => {
	const { handleCloseEditor, asideClassName } = props;

	const { selectedNode, setNode } = useNodeStore(
		(state) => ({
			selectedNode: state.selectedNode,
			setNode: state.setNode,
		}),
		(a, b) => a?.selectedNode?.id === b?.selectedNode?.id
	);

	if (!selectedNode) return null;

	const { General, Content, hasContent, Advanced } =
		nodeSettingsFactory(selectedNode);

	const handleCloseNodeEditor = () => {
		setNode(null);
		handleCloseEditor?.();
	};

	return (
		<aside className={asideClassName}>
			<Tabs defaultValue="general">
				<TabsList className="grid w-full grid-flow-col gap-x-1 justify-between">
					<TabsTrigger value="general">Стили</TabsTrigger>
					{hasContent && Content && (
						<TabsTrigger value="content">Основа</TabsTrigger>
					)}
					<TabsTrigger value="settings">Настройки</TabsTrigger>
					<Button
						className="h-full w-full p-0 m-0 aspect-square"
						onClick={handleCloseNodeEditor}
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
