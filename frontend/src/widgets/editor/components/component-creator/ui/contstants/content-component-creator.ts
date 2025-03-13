import {
	Heading1Icon,
	CircleIcon,
	CircleDashedIcon,
	PilcrowIcon,
	TagIcon,
	LinkIcon,
	GroupIcon,
	ListChecksIcon,
	SquareCheckIcon
} from 'lucide-react';
import { NodeLabelEnum } from '@/shared/lib/node/component';

export const contentComponentCreator = [
	{ title: NodeLabelEnum.title, IconNode: Heading1Icon },
	{ title: NodeLabelEnum.topic, IconNode: CircleIcon },
	{ title: NodeLabelEnum.subtopic, IconNode: CircleDashedIcon },
	{ title: NodeLabelEnum.paragraph, IconNode: PilcrowIcon },
	{ title: NodeLabelEnum.label, IconNode: TagIcon },
	{ title: NodeLabelEnum.button, IconNode: LinkIcon },
	{ title: NodeLabelEnum.legend, IconNode: GroupIcon },
	{ title: NodeLabelEnum.todo, IconNode: SquareCheckIcon},
	{ title: NodeLabelEnum.checklist, IconNode: ListChecksIcon },
];
