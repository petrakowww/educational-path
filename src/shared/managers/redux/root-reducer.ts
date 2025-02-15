import { combineReducers } from '@reduxjs/toolkit';
import { nodeReducer } from '../reducers/node-slice';
import { nodeEditorAsideReducer } from '../reducers/node-aside-editor-func';
import { dndEditorReduser } from '../reducers/dnd-slice';

export const rootReducer = combineReducers({
	editor: nodeReducer,
	aside_editor: nodeEditorAsideReducer,
	dnd_editor: dndEditorReduser,
});
