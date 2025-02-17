import { Node } from "reactflow";
import { GraphNodeComponent, GraphNodeLabelProps } from "@/shared/lib/node/component";
import { GraphNodeTimeProps } from "@/shared/lib/node/component/interfaces/auxiliary/type-time";
import { GraphNodeLinkProps } from "@/shared/lib/node/component/interfaces/auxiliary/type-link";
import { GraphNodeProgressProps } from "@/shared/lib/node/component/interfaces/auxiliary/type-progress";

// TODO: разнести

export const hasLabel = <T extends GraphNodeComponent<GraphNodeLabelProps>>(
    component: Node<T>
): boolean => {
    return 'label' in component.data.dataTProps;
};

export const hasTimeProps = <T extends GraphNodeComponent<GraphNodeTimeProps>>(
    component: Node<T>
): boolean => {
    return 'timeProps' in component.data.dataTProps;
};

export const hasLinkProps = <T extends GraphNodeComponent<GraphNodeLinkProps>>(
    component: Node<T>
): boolean => {
    return 'linkProps' in component.data.dataTProps;
};

export const hasProgressProps = <T extends GraphNodeComponent<GraphNodeProgressProps>>(
    component: Node<T>
): boolean => {
    return 'progressProps' in component.data.dataTProps;
};