import { memo } from 'react';
import { NodeProps } from 'reactflow';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { NodeDataShapeButton } from '@/features/node/editor/types/node';
import { SkeletonViewNode } from './base/skeleton-view-node';
import { EdgeConnectableViewNodes } from './base/edge-connectable-view';

export const ButtonViewNode = (props: NodeProps<NodeDataShapeButton>) => {
	const { data } = props;
	const router = useRouter();

	const handleClick = () => {
		const url = data.buttonProps.url?.trim();

		if (!url || !url.startsWith('/')) {
			toast.warning('Некорректная ссылка. Укажите путь, начинающийся с "/".');
			return;
		}

		router.push(url);
	};

	return (
		<SkeletonViewNode
			nodeProps={props}
			style={{
				backgroundColor: data.meta.blockProps?.backgroundColor as string,
				borderRadius: data.meta.blockProps?.borderRadius,
				borderWidth: data.meta.blockProps?.borderWidth as number,
				borderColor: data.meta.blockProps?.borderColor as string,
			}}
			stylesForComponent="bg-primary"
			onClick={handleClick}
		>
			<EdgeConnectableViewNodes nodeProps={props} canHandle={true}>
				<p
					className="p-3 leading-none whitespace-pre-wrap text-nowrap text-center flex-shrink-0 text-primary-foreground"
					style={{
						fontSize: data.meta.fontProps?.fontSize,
						color: data.meta.fontProps?.fontColor as string,
						fontWeight: data.meta.fontProps?.fontWeight,
					}}
				>
					{data.title}
				</p>
			</EdgeConnectableViewNodes>
		</SkeletonViewNode>
	);
};

export const ButtonViewNodeMemo = memo(ButtonViewNode);
