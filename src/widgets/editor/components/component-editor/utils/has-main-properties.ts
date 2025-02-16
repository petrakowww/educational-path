import { Node } from "reactflow";
import { GraphNodeComponent } from "@/shared/lib/node/component";

export const hasLabel = <T extends GraphNodeComponent>(
    component: Node<T>
): boolean => {
    return 'label' in component.data;
};

export const hasTimeProps = <T extends GraphNodeComponent>(
    component: Node<T>
): boolean => {
    return 'timeProps' in component.data;
};

export const hasLinkProps = <T extends GraphNodeComponent>(
    component: Node<T>
): boolean => {
    return 'linkProps' in component.data;
};

export const hasProgressProps = <T extends GraphNodeComponent>(
    component: Node<T>
): boolean => {
    return 'progressProps' in component.data;
};