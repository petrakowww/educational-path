import {
	Heading1Icon,
	CircleIcon,
	CircleDashedIcon,
	PilcrowIcon,
	TagIcon,
	LinkIcon,
	ListChecksIcon,
	SquareCheckIcon,
	FileJsonIcon,
} from 'lucide-react';
import { NodeLabel, NodeType } from '../../../../types/node';

export const nodeLabels = [
	{ title: NodeLabel.title, type: NodeType.title, IconNode: Heading1Icon },
	{ title: NodeLabel.topic, type: NodeType.topic, IconNode: CircleIcon },
	{
		title: NodeLabel.subtopic,
		type: NodeType.subtopic,
		IconNode: CircleDashedIcon,
	},
	{
		title: NodeLabel.paragraph,
		type: NodeType.paragraph,
		IconNode: PilcrowIcon,
	},
	{ title: NodeLabel.label, type: NodeType.label, IconNode: TagIcon },
	{ title: NodeLabel.button, type: NodeType.button, IconNode: LinkIcon },
	{ title: 'Ресурс-кнопка', type: 'RESOURCE-BUTTON', IconNode: FileJsonIcon },
	{ title: NodeLabel.todo, type: NodeType.todo, IconNode: SquareCheckIcon },
	{
		title: NodeLabel.checklist,
		type: NodeType.checklist,
		IconNode: ListChecksIcon,
	},
];
