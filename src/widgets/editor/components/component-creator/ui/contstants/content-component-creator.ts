import {
	Heading1Icon,
	CircleIcon,
	CircleDashedIcon,
	PilcrowIcon,
} from 'lucide-react';
import { NodeLabelEnum } from '@/shared/lib/node/component';

export const contentComponentCreator = [
	{ title: NodeLabelEnum.title, IconNode: Heading1Icon },
	{ title: NodeLabelEnum.topic, IconNode: CircleIcon },
	{ title: NodeLabelEnum.subtopic, IconNode: CircleDashedIcon },
	{ title: NodeLabelEnum.paragraph, IconNode: PilcrowIcon },
];
