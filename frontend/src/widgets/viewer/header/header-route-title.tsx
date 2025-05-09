import { Badge, Separator } from '@/shared/ui';
import { cn } from '@/shared/lib';

export const HeaderRouteTitle = ({
	title,
	isVerified,
}: {
	title: string;
	isVerified?: boolean;
}) => {
	return (
		<div className="flex gap-1 flex-row items-center md:gap-3 py-1">
			<h1 className="font-semibold text-lg line-clamp-2 break-all text-ellipsis w-fit">
				{title}
			</h1>

			<div className="flex items-center gap-3 w-full md:w-auto">
				<Separator orientation="vertical" className="h-5" />
				<Badge
					className={cn(
						'whitespace-nowrap',
						isVerified
							? 'bg-green-200 text-green-900'
							: 'bg-yellow-200 text-yellow-900'
					)}
					variant="secondary"
				>
					{isVerified ? 'Маршрут проверен' : 'Маршрут не проверен'}
				</Badge>
			</div>
		</div>
	);
};
