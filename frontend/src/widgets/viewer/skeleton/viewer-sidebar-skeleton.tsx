import { Card, CardContent, Separator, Skeleton } from '@/shared/ui';

export const ViewerSidebarSkeleton = () => {
	return (
		<div className="w-64 p-4 space-y-4 border-r">
			<Skeleton className="h-10 w-full" />
			<Skeleton className="h-24 w-full" />
			<Separator />

			<Card>
				<CardContent className="p-2 space-y-3">
					<Skeleton className="h-5 w-3/4" />
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-2/3" />
				</CardContent>
			</Card>

			<Separator />

			<Skeleton className="h-5 w-full" />
			<Skeleton className="h-5 w-5/6" />
			<Skeleton className="h-5 w-2/3" />
		</div>
	);
};
