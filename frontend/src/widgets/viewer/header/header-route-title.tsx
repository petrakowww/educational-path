import { Badge, Separator } from '@/shared/ui';
import { cn } from '@/shared/lib';
import { VerificationStatus } from '@/shared/graphql/generated/output';

export const HeaderRouteTitle = ({
	title,
	verificationStatus,
}: {
	title: string;
	verificationStatus?: VerificationStatus;
}) => {
	const getBadgeStyle = () => {
		switch (verificationStatus) {
			case VerificationStatus.Verified:
				return 'bg-green-200 text-green-900';
			case VerificationStatus.Pending:
				return 'bg-muted text-muted-foreground';
			default:
				return 'bg-yellow-200 text-yellow-900';
		}
	};

	const getBadgeText = () => {
		switch (verificationStatus) {
			case VerificationStatus.Verified:
				return 'Маршрут проверен';
			case VerificationStatus.Pending:
				return 'Маршрут на проверке';
			default:
				return 'Маршрут не проверен';
		}
	};

	return (
		<div className="flex gap-1 flex-grow flex-row items-center md:gap-3 py-1">
			<h1 className="font-semibold text-lg line-clamp-2 break-all text-ellipsis w-fit">
				{title}
			</h1>

			<div className="flex items-center gap-3 md:w-auto">
				<Separator orientation="vertical" className="h-5" />
				<Badge className={cn('whitespace-nowrap', getBadgeStyle())} variant="secondary">
					{getBadgeText()}
				</Badge>
			</div>
		</div>
	);
};
