'use client';

import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import Color from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';
import SearchAndReplace from '@/shared/ui/tiptap/components/extensions/search-and-replace';

interface ViewerEditorProps {
	content: string;
}

const extensions = [
	StarterKit.configure({
		orderedList: { HTMLAttributes: { class: 'list-decimal' } },
		bulletList: { HTMLAttributes: { class: 'list-disc' } },
		heading: {
			levels: [1, 2, 3, 4],
			HTMLAttributes: { class: 'tiptap-heading' },
		},
	}),
	TextAlign.configure({ types: ['heading', 'paragraph'] }),
	TextStyle,
	Subscript,
	Superscript,
	Underline,
	Link,
	Color,
	Highlight.configure({ multicolor: true }),
	SearchAndReplace,
];

export const ViewerEditor = ({ content }: ViewerEditorProps) => {
	const editor = useEditor({
		extensions,
		content,
		editable: false,
		immediatelyRender: false,
	});

	if (!editor) return null;

	return (
		<div className="prose max-w-none px-2 pb-4 py-2 border-border border rounded-md">
			<EditorContent editor={editor} />
		</div>
	);
};
