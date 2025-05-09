import { NodeDataShapeToDo } from "@/features/node/editor/types/node";
import { SaveTopicMapInput, UpdateTopicNodeInput, ChecklistItemInput, UpdateTopicEdgeInput } from "@/shared/graphql/generated/output";
import { Edge, Node } from "reactflow";

export function transformNodesAndEdgesForMutation(
    routeId: string,
    nodesList: Node<NodeDataShapeToDo>[],
    edgesList: Edge[]
  ): SaveTopicMapInput {
    const nodes: UpdateTopicNodeInput[] = nodesList.map((node) => {
      const {
        id,
        type,
        position,
        width,
        height,
        style,
        zIndex,
        data: {
          title,
          completionType,
          kind,
          todos,
        },
      } = node;

      const { data } = node;

      const posxy = {
        x: position.x,
        y: position.y,
        width,
        height,
        styleWidth: style?.width,
        styleHeight: style?.height,
      }
  
      const checklist: ChecklistItemInput[] | undefined = todos?.map(({ id, text }) => ({ id, text }));

      return {
        id,
        title,
        type,
        kind,
        completionType,
        meta: JSON.stringify(data),
        posxy: posxy,
        zIndex: zIndex ?? 0,
        ...(checklist?.length ? { checklist } : {}),
      };
    });
  
    const edges: UpdateTopicEdgeInput[] = edgesList.map((edge) => {
        console.log(edge);
        const meta = Object.keys(edge).length > 0 ? JSON.stringify(edge) : undefined;
    
        return {
            id: edge.id,
            sourceId: edge.source,
            targetId: edge.target,
            meta,
        };
    });
  
    return {
      routeId,
      nodes,
      edges,
    };
  }
  