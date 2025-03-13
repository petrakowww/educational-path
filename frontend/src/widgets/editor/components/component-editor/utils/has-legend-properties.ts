import {
    GraphNodeComponent,
} from '@/shared/lib/node/component';
import { Node } from 'reactflow';
import { GraphNodeLegendProps } from '@/shared/lib/node/component';


export const hasLegendProps = <T extends GraphNodeComponent<GraphNodeLegendProps>>(
    component: Node<T>
): boolean => {
    return 'legendProps' in component.data.dataTProps;
};
