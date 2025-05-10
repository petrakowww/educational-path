
import { ViewerSidebarSkeleton } from './viewer-sidebar-skeleton';
import { ViewerHeaderSkeleton } from './viewer-header-skeleton';
import { Skeleton } from '@/shared/ui';
import { SkeletonReactFlow } from './viewer-react-flow-skeleton';

export const ViewerPageSkeleton = () => {
	return (
		<div className="flex flex-row w-full">
			<ViewerSidebarSkeleton />
			<div className="bg-muted/40 border-r">
				<Skeleton className='h-5 w-5 mt-2 mx-1'/>
			</div>
			<div className="flex flex-grow h-screen flex-col">
				<ViewerHeaderSkeleton />
				<div className="flex-1 relative">
                <SkeletonReactFlow/>
				</div>
			</div>
		</div>
	);
};
