import { NodeType } from '@/features/node/editor/types/node';

export function getNodeColorByType(type?: string): string {
	switch (type) {
		case NodeType.title:
            
			return '#0070f3';
		case NodeType.topic:
			return '#34d399';
		case NodeType.subtopic:
			return '#facc15';
		case NodeType.paragraph:
			return '#60a5fa';
		case NodeType.label:
			return '#f472b6';
		case NodeType.button:
			return '#f87171';
		case NodeType.todo:
			return '#a78bfa';
		case NodeType.checklist:
			return '#fb923c';
		default:
			return '#d1d5db';
	}
}
