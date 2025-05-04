import React from 'react';
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
import { useState, useEffect } from 'react';

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
		(a, b) =>
			a?.selectedNode?.id === b?.selectedNode?.id &&
			a?.selectedNode?.type === b?.selectedNode?.type
	);

	const [activeTab, setActiveTab] = useState('general');

	useEffect(() => {
		// При смене узла сбрасываем вкладку на general
		setActiveTab('general');
	}, [selectedNode]);

	if (!selectedNode) return null;

	const { General, Content, hasContent, Advanced } =
		nodeSettingsFactory(selectedNode);

	const handleCloseNodeEditor = () => {
		setNode(null);
		handleCloseEditor?.();
	};

	return (
		<aside className={asideClassName}>
			<Tabs value={activeTab} onValueChange={setActiveTab}>
				<TabsList className="flex items-center justify-end gap-2">
					<TabsTrigger value="general">Стили</TabsTrigger>
					{hasContent && Content && (
						<TabsTrigger value="content">Основа</TabsTrigger>
					)}
					<TabsTrigger value="settings">Настройки</TabsTrigger>
					<Button
						className="p-0 m-0 aspect-square h-8 w-8"
						onClick={handleCloseNodeEditor}
						variant={'outline'}
					>
						<XIcon className="w-4 h-4" />
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
						<div className="flex flex-col gap-6">
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
