import { GraphNodeLabelProps } from '@/shared/lib/node/component';
import { GraphNodeLabelEditor } from '@/shared/lib/node/editor';
import { Input, Label } from '@/shared/ui';
import { Node } from 'reactflow';
import { GraphNodeComponent } from '@/shared/lib/node/component';

interface ComponentEditorLabelProps {
	editedNode: Node<GraphNodeComponent<GraphNodeLabelProps>>;
}

export const ComponentEditorLabel = (props: ComponentEditorLabelProps) => {
	const { editedNode } = props;
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		GraphNodeLabelEditor.renameNode(e.target.value);
	};

	return (
		<div className="flex flex-col gap-2">
			<Label htmlFor="label" className="text-foreground/80">
				Label
			</Label>
			<Input
				id="label"
				type="text"
				placeholder="Enter label"
				className="py-1 h-fit text-sm"
				value={editedNode.data.dataTProps.label || ''}
				onChange={handleChange}
			/>
		</div>
	);
};
