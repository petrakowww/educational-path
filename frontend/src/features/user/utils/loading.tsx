import { Skeleton } from '@/shared/ui';

interface LoafingFormInfoProps {
	textInformation: string;
}

export const LoadingFormInfo = (props: LoafingFormInfoProps) => {
	const { textInformation } = props;
	return (
		<Skeleton className="w-full p-5 text-center text-sm">
			{textInformation}
		</Skeleton>
	);
};
