import { GraphNodeComponent, TopicNodeComponent } from "@/shared/lib/node/component";
import { Node } from "reactflow";

export const hasTopicProps = <T extends GraphNodeComponent>(
    component: Node<T>
): boolean => {
    return component.data.componentType === TopicNodeComponent.name;
};
