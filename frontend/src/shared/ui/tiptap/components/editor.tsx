'use client';

import { Separator } from '@/shared/ui';
import { Color } from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';
import Link from '@tiptap/extension-link';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import { EditorContent, type Extension, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { ImagePlaceholder } from './extensions/image-placeholder';
import SearchAndReplace from './extensions/search-and-replace';
import { ToolbarProvider } from './providers/toolbar-provider';
import { AlignmentTooolbar } from './toolbars/alignment';
import { BoldToolbar } from './toolbars/bold';
import { BulletListToolbar } from './toolbars/bullet-list';
import { ColorHighlightToolbar } from './toolbars/color-and-highlight';
import { ImagePlaceholderToolbar } from './toolbars/image-placeholder-toolbar';
import { ItalicToolbar } from './toolbars/italic';
import { LinkToolbar } from './toolbars/link';
import { OrderedListToolbar } from './toolbars/ordered-list';
import { RedoToolbar } from './toolbars/redo';
import { SearchAndReplaceToolbar } from './toolbars/search-and-replace-toolbar';
import { UnderlineToolbar } from './toolbars/underline';
import { UndoToolbar } from './toolbars/undo';
import { ImageExtension } from './extensions/image';

const extensions = [
	StarterKit.configure({
		orderedList: {
			HTMLAttributes: {
				class: 'list-decimal',
			},
		},
		bulletList: {
			HTMLAttributes: {
				class: 'list-disc',
			},
		},
		heading: {
			levels: [1, 2, 3, 4],
			HTMLAttributes: {
				class: 'tiptap-heading',
			},
		},
	}),
	TextAlign.configure({
		types: ['heading', 'paragraph'],
	}),
	TextStyle,
	Subscript,
	Superscript,
	Underline,
	Link,
	Color,
	Highlight.configure({
		multicolor: true,
	}),
	SearchAndReplace,
];

interface ITipTapEditor {
	onUpdate?: (html: string) => void;
	initialContent?: string;
}

export const TiptapEditor = (props: ITipTapEditor) => {
	const { initialContent, onUpdate } = props;
	const editor = useEditor({
		extensions: extensions as Extension[],
		immediatelyRender: false,
		content: initialContent,
		onUpdate: ({ editor }) => {
			onUpdate?.(editor.getHTML());
		},
	});

	if (!editor) {
		return null;
	}
	return (
		<div className="border relative rounded-md overflow-hidden pb-3">
			<div className="flex w-full items-center py-2 px-2 justify-between border-b  sticky top-0 left-0 bg-background">
				<ToolbarProvider editor={editor}>
					<div>
						<div className="flex items-center gap-2">
							<div className="flex gap-2 items-center">
								<UndoToolbar />
								<RedoToolbar />
								<Separator
									orientation="vertical"
									className="h-7"
								/>
							</div>
							<div className="flex gap-2 items-center">
								<BoldToolbar />
								<ItalicToolbar />
								<UnderlineToolbar />
								<Separator
									orientation="vertical"
									className="h-7"
								/>
							</div>
							<div className="flex gap-2 items-center ml-auto">
								<Separator
									orientation="vertical"
									className="h-7"
								/>
								<OrderedListToolbar />
								<BulletListToolbar />
							</div>
						</div>
						<div className="flex items-center gap-2">
							<AlignmentTooolbar />
							<SearchAndReplaceToolbar />
							<LinkToolbar />
							<div className="ml-auto">
								<ColorHighlightToolbar />
							</div>
						</div>
					</div>
				</ToolbarProvider>
			</div>
			<div
				onClick={() => {
					editor?.chain().focus().run();
				}}
				className="cursor-text min-h-[18rem] bg-background"
			>
				<EditorContent
					className="outline-none w-full max-w-[400px] mx-auto overflow-auto"
					editor={editor}
				/>
			</div>
		</div>
	);
};
