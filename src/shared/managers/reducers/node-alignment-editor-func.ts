import { PayloadAction } from '@reduxjs/toolkit';
import { NodeInterface } from '../interfaces/node-interface';
import { TextAlignmentEnum, TextVerticalAlignmentEnum } from '@/shared/lib/node/component';

export const updateNodeTextAlignmentFunction = (
	state: NodeInterface,
	action: PayloadAction<{ id: string; textAlignment: TextAlignmentEnum }>
) => {
	const node = state.nodes.find((n) => n.id === action.payload.id);
	if (node) {
		node.data.textAlignmentProps = {
			...node.data.textAlignmentProps,
			textAlignType: action.payload.textAlignment,
		};
	}
};

export const updateNodeTextVerticalAlignmentFunction = (
	state: NodeInterface,
	action: PayloadAction<{
		id: string;
		textVerticalAlignment: TextVerticalAlignmentEnum;
	}>
) => {
	const node = state.nodes.find((n) => n.id === action.payload.id);
	if (node) {
		node.data.textAlignmentProps = {
			...node.data.textAlignmentProps,
			textVerticalAlignType: action.payload.textVerticalAlignment,
		};
	}
};
