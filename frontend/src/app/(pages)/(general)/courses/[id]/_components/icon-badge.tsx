import { cn } from '@/shared/lib';
import { ReactNode } from 'react';

interface IconBadgeProps {
	icon: ReactNode;
	className?: string;
}

export const IconBadge = ({ icon, className }: IconBadgeProps) => {
	return (
		<div
			className={cn(
				'bg-primary/10 text-primary rounded-full p-2',
				className
			)}
		>
			{icon}
		</div>
	);
};
