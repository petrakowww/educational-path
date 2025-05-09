import { NodeChange } from 'reactflow';

export type CustomNodeChange = {
	type: 'editor-remove';
	id: string;
};

export type NodeChangeExtended = NodeChange | CustomNodeChange;
