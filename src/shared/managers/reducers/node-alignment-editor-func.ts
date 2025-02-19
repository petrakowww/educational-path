import { PayloadAction } from '@reduxjs/toolkit';
import { NodeInterface } from '../interfaces/node-interface';
import {
	GraphNodeComponent,
	TextAlignmentEnum,
	TextVerticalAlignmentEnum,
} from '@/shared/lib/node/component';
import { GraphNodeAlignmentTextProps } from '@/shared/lib/node/component';
import { updateNodeDataHelper } from '../utils/update-node-data-helper';

export const updateNodeTextAlignmentFunction = (
	state: NodeInterface<GraphNodeComponent<unknown>>,
	action: PayloadAction<{ id: string; textAlignment: TextAlignmentEnum }>
) => {
	updateNodeDataHelper<GraphNodeAlignmentTextProps>(
		state,
		action.payload.id,
		(data) =>
			(data.textAlignmentProps.textAlignType =
				action.payload.textAlignment)
	);
};

export const updateNodeTextVerticalAlignmentFunction = (
	state: NodeInterface<GraphNodeComponent<unknown>>,
	action: PayloadAction<{
		id: string;
		textVerticalAlignment: TextVerticalAlignmentEnum;
	}>
) => {
	updateNodeDataHelper<GraphNodeAlignmentTextProps>(
		state,
		action.payload.id,
		(data) =>
			(data.textAlignmentProps.textJustificationType =
				action.payload.textVerticalAlignment)
	);
};
