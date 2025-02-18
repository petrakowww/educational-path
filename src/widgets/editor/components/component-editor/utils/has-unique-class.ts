import { TopicNodeComponent, SubTopicNodeComponent } from "@/shared/lib/node/component";
import { Node } from "reactflow";

export const hasTopicProps = <T extends TopicNodeComponent>(
    component: Node<T>
): boolean => {
    return (
        component.data.componentType === TopicNodeComponent.name ||
        component.data.componentType === SubTopicNodeComponent.name
    );
};

