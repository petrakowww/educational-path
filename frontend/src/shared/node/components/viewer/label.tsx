import { memo } from 'react';
import { NodeProps } from 'reactflow';
import { NodeMain } from '@/features/node/editor/types/node';
import { SkeletonViewNode } from './base/skeleton-view-node';
import { EdgeConnectableViewNodes } from './base/edge-connectable-view';

export const LabelViewNode = (props: NodeProps<NodeMain>) => {
    const { data } = props;

    return (
        <SkeletonViewNode nodeProps={props}>
            <EdgeConnectableViewNodes nodeProps={props} canHandle={false}>
                <p
                    className="leading-none whitespace-pre-wrap text-nowrap text-center flex-shrink-0 px-3 py-2"
                    style={{
                        fontSize: data.meta.fontProps?.fontSize,
                        color: data.meta.fontProps?.fontColor as string,
                    }}
                >
                    {data.title}
                </p>
            </EdgeConnectableViewNodes>
        </SkeletonViewNode>
    );
};

export const LabelViewNodeMemo = memo(LabelViewNode);
