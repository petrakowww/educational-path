import { Editor } from '@tiptap/react';

export const duplicateContent = (editor: Editor) => {
	const { view } = editor;
	const { state } = view;
	const { selection } = state;

	editor
		.chain()
		.insertContentAt(
			selection.to,
			selection.content().content.firstChild?.toJSON(),
			{
				updateSelection: true,
			}
		)
		.focus(selection.to)
		.run();
};
