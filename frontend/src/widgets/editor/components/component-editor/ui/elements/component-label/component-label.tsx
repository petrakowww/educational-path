import { GraphNodeLabelProps } from '@/shared/lib/node/component';
import { GraphNodeLabelEditor } from '@/shared/lib/node/editor';
import { Input, Label } from '@/shared/ui';
import { Node } from 'reactflow';
import { GraphNodeComponent } from '@/shared/lib/node/component';
import {
	setFocusingLabel,
	useAppDispatch,
	useAppSelector,
} from '@/shared/managers';
import { useEffect, useRef } from 'react';

interface ComponentEditorLabelProps {
	editedNode: Node<GraphNodeComponent<GraphNodeLabelProps>>;
}

export const ComponentEditorLabel = (props: ComponentEditorLabelProps) => {
	const { editedNode } = props;
	const inputRef = useRef<HTMLInputElement>(null);
	const isFocusingLabel = useAppSelector(
		(state) => state.aside_editor.isFocusingOnLabel
	);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		GraphNodeLabelEditor.changeNameNode(e.target.value);
	};
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (isFocusingLabel && inputRef.current) {
			inputRef.current.focus();
			inputRef.current.select();
			dispatch(setFocusingLabel(false));
		}
	}, [dispatch, isFocusingLabel]);

	return (
		<div className="flex flex-col gap-2">
			<Label htmlFor="label" className="text-foreground/80">
				Label
			</Label>
			<Input
				ref={inputRef}
				id="label"
				type="text"
				placeholder="Enter label"
				className="py-1 h-fit text-sm"
				value={editedNode.data.dataTProps.labelProps.label || ''}
				onChange={handleChange}
			/>
		</div>
	);
};
