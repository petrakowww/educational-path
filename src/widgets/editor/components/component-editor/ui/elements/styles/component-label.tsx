import { GraphNodeLabelEditor } from '@/shared/lib/node/editor';
import { Input, Label } from '@/shared/ui';

interface ComponentEditorLabelProps {
	label?: string;
}

export const ComponentEditorLabel = (props: ComponentEditorLabelProps) => {
	const { label } = props;
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
				value={label || ''}
				onChange={handleChange}
			/>
		</div>
	);
};
