import { Edge } from 'reactflow';

export const createsCycle = (fromId: string, toId: string, allEdges: Edge[]): boolean => {
  const visited = new Set<string>();

  const dfs = (nodeId: string): boolean => {
    if (nodeId === fromId) return true;
    if (visited.has(nodeId)) return false;
    visited.add(nodeId);

    const incoming = allEdges
      .filter((e) => e.source === nodeId)
      .map((e) => e.target);

    return incoming.some(dfs);
  };

  return dfs(toId);
};

