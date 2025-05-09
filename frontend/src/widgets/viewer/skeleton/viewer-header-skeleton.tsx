import { Skeleton } from "@/shared/ui";

export const ViewerHeaderSkeleton = () => {
	return (
		<header className="relative h-16 border-b px-6 flex items-center justify-between bg-background">
			<Skeleton className="h-6 w-2/3" />
			<Skeleton className="h-6 w-1/4" />
		</header>
	);
};
