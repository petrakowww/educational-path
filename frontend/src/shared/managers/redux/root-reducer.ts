import { combineReducers } from '@reduxjs/toolkit';
import { nodeReducer } from '../reducers/management-node.slice';
import { nodeEditorAsideReducer } from '../reducers/editor.slice';
import { dndEditorReduser } from '../reducers/dnd.slice';

export const rootReducer = combineReducers({
	node: nodeReducer,
	editor: nodeEditorAsideReducer,
	dnd: dndEditorReduser,
});
