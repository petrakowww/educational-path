'use client';

import {
	Background,
	BackgroundVariant,
	Controls,
	MiniMap,
	ReactFlowProvider,
} from 'reactflow';
import { Skeleton } from '@/shared/ui';
import { cn } from '@/shared/lib';

export const SkeletonReactFlow = () => {
	return (
		<ReactFlowProvider>
			<div className="w-full h-full relative overflow-hidden">
				<Background
					variant={BackgroundVariant.Dots}
					gap={12}
					size={1}
				/>

				<div className="absolute top-[100px] left-[150px]">
					<SkeletonNode />
				</div>
				<div className="absolute top-[300px] left-[400px]">
					<SkeletonNode />
				</div>
				<div className="absolute top-[200px] left-[700px]">
					<SkeletonNode />
				</div>
				<div className="absolute top-[400px] left-[250px]">
					<SkeletonNode />
				</div>

				<MiniMap pannable zoomable />
				<Controls position="top-right" />
			</div>
		</ReactFlowProvider>
	);
};

const SkeletonNode = () => (
	<Skeleton className={cn('w-[150px] h-[60px] rounded-md shadow-md')} />
);
