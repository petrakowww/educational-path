import { memo } from 'react';
import { NodeProps } from 'reactflow';
import { NodeMain } from '@/features/node/editor/types/node';
import { SkeletonViewNode } from './base/skeleton-view-node';
import { EdgeConnectableViewNodes } from './base/edge-connectable-view';

export const TitleViewNode = (props: NodeProps<NodeMain>) => {
    const { data } = props;

    return (
        <SkeletonViewNode nodeProps={props}>
            <EdgeConnectableViewNodes nodeProps={props} canHandle={true}>
                <p
                    className="leading-none whitespace-normal text-nowrap text-center p-3 flex-shrink-0"
                    style={{
                        fontSize: data.meta.fontProps?.fontSize,
                    }}
                >
                    {data.title}
                </p>
            </EdgeConnectableViewNodes>
        </SkeletonViewNode>
    );
};

export const TitleViewNodeMemo = memo(TitleViewNode);
