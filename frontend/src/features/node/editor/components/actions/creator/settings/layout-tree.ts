import { Node, Edge } from 'reactflow';

export function layoutAsHorizontalTree({
	nodes,
	edges,
	xStep = 200,
	yStep = 100,
}: {
	nodes: Node[];
	edges: Edge[];
	xStep?: number;
	yStep?: number;
}): Node[] {
	const incomingMap = new Map<string, string[]>();
	const outgoingMap = new Map<string, string[]>();
	const nodeMap = new Map(nodes.map((n) => [n.id, { ...n }]));

	for (const edge of edges) {
		if (!incomingMap.has(edge.target)) incomingMap.set(edge.target, []);
		if (!outgoingMap.has(edge.source)) outgoingMap.set(edge.source, []);
		incomingMap.get(edge.target)!.push(edge.source);
		outgoingMap.get(edge.source)!.push(edge.target);
	}

	const visited = new Set<string>();
	const isolatedNodes: Node[] = [];

	const dfs = (id: string, depth: number, y: number) => {
		const node = nodeMap.get(id);
		if (!node || visited.has(id)) return;

		visited.add(id);
		node.position = { x: depth * xStep, y: y * yStep };

		const children = outgoingMap.get(id) ?? [];
		children.forEach((childId, index) => {
			dfs(childId, depth + 1, y + index);
		});
	};

	let yOffset = 0;
	for (const node of nodes) {
		if (visited.has(node.id)) continue;

		const isIsolated = !incomingMap.has(node.id) && !outgoingMap.has(node.id);
		if (isIsolated) {
			isolatedNodes.push(nodeMap.get(node.id)!);
			continue;
		}

		if (!incomingMap.has(node.id)) {
			dfs(node.id, 0, yOffset);
			yOffset += 1;
		}
	}

	const maxX = Math.max(0, ...[...visited].map((id) => nodeMap.get(id)?.position?.x ?? 0));
	isolatedNodes.forEach((node, idx) => {
		node.position = { x: maxX + xStep, y: idx * yStep };
	});

	return [...nodeMap.values()];
}


export function layoutAsTree({
	nodes,
	edges,
	xStep = 300,
	yStep = 100,
}: {
	nodes: Node[];
	edges: Edge[];
	xStep?: number;
	yStep?: number;
}): Node[] {
	const incomingMap = new Map<string, string[]>();
	const outgoingMap = new Map<string, string[]>();
	const nodeMap = new Map(nodes.map((n) => [n.id, { ...n }]));

	for (const edge of edges) {
		if (!incomingMap.has(edge.target)) incomingMap.set(edge.target, []);
		if (!outgoingMap.has(edge.source)) outgoingMap.set(edge.source, []);
		incomingMap.get(edge.target)!.push(edge.source);
		outgoingMap.get(edge.source)!.push(edge.target);
	}

	const visited = new Set<string>();
	const isolatedNodes: Node[] = [];

	const dfs = (id: string, depth: number, x: number) => {
		const node = nodeMap.get(id);
		if (!node || visited.has(id)) return;

		visited.add(id);
		node.position = { x: x * xStep, y: depth * yStep };

		const children = outgoingMap.get(id) ?? [];
		children.forEach((childId, index) => {
			dfs(childId, depth + 1, x + index);
		});
	};

	let xOffset = 0;
	for (const node of nodes) {
		if (visited.has(node.id)) continue;

		const isIsolated =
			!incomingMap.has(node.id) && !outgoingMap.has(node.id);

		if (isIsolated) {
			isolatedNodes.push(nodeMap.get(node.id)!);
			continue;
		}

		const isRoot = !incomingMap.has(node.id);
		if (isRoot) {
			dfs(node.id, 0, xOffset);
			xOffset += 1;
		}
	}

	// считаем maxY только по узлам, прошедшим через dfs (т.е. не isolated)
	const maxY = Math.max(
		0,
		...[...visited].map((id) => nodeMap.get(id)?.position?.y ?? 0)
	);

	isolatedNodes.forEach((node, idx) => {
		node.position = {
			x: idx * xStep,
			y: maxY + yStep,
		};
	});

	return [...nodeMap.values()];
}

export function layoutAsGrid({
	nodes,
	xStep = 250,
	yStep = 150,
	columns = 4,
}: {
	nodes: Node[];
	xStep?: number;
	yStep?: number;
	columns?: number;
}): Node[] {
	return nodes.map((node, index) => ({
		...node,
		position: {
			x: (index % columns) * xStep,
			y: Math.floor(index / columns) * yStep,
		},
	}));
}
