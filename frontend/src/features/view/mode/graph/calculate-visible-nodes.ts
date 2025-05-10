import {
	TopicEdge,
	CourseModeType,
	NodeStatus,
} from '@/shared/graphql/generated/output';
import { isManualNode } from '@/shared/node/utils/is-openable-node';
import { buildGraph } from './build-graph';
import { ProgressLite, TopicNodeLite } from './types';

type ProgressMap = Record<string, boolean>; 

export function calculateVisibleNodes(
	nodes: TopicNodeLite[],
	progress: ProgressLite[],
	edges: TopicEdge[],
	mode: CourseModeType
): Set<string> {
	const { predecessors } = buildGraph(edges);
	const completedMap: ProgressMap = {};
    
	for (const item of progress) {
		if (item.status === NodeStatus.Completed) {
			completedMap[item.topicNodeId] = true;
		}
	}

	const visible = new Set<string>();

	for (const node of nodes) {
		const { id, type } = node;
		const isManual = isManualNode(type);

		if (!isManual) {
			visible.add(id); // всегда отображаем визуальные/неучебные узлы
			continue;
		}
        
		if (mode === CourseModeType.Flexible) {
			visible.add(id); // в свободном режиме всё видно
			continue;
		}

		if (completedMap[id]) {
			visible.add(id); // узел уже завершён — показываем
			continue;
		}

		const preds = predecessors[id] ?? [];
		const allPrereqsCompleted = preds.every((p) => completedMap[p]);

		if (allPrereqsCompleted) {
			visible.add(id); // все предыдущие завершены — показываем
		}
	}
    console.log(visible);
	return visible;
}
