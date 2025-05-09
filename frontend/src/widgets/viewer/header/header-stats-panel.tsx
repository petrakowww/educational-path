'use client';

import { Badge, Button, Separator } from '@/shared/ui';
import { cn } from '@/shared/lib';
import { useState } from 'react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';

interface RouteHeaderStatsPanelProps {
	progress: number;
	completed: number;
	inProgress: number;
	skipped: number;
	topicCount: number;
	nodeCount: number;
	className?: string;
}

export const RouteHeaderStatsWrapper = (
	props: RouteHeaderStatsPanelProps & { isDesktop: boolean }
) => {
	const { isDesktop } = props;
	return isDesktop ? (
		<RouteHeaderStatsPanelDesktop {...props} />
	) : (
		<RouteHeaderStatsPanelMobile {...props} />
	);
};

export const RouteHeaderStatsPanelDesktop = ({
	progress,
	completed,
	inProgress,
	skipped,
	topicCount,
	nodeCount,
	className,
}: RouteHeaderStatsPanelProps) => {
	return (
		<div
			className={cn(
				'absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[70%] z-10 w-full max-w-2xl border bg-background px-4 py-1 shadow-sm rounded-md flex flex-col items-center justify-between text-sm md:flex-row text-muted-foreground',
				className
			)}
		>
			<Badge
				variant="secondary"
				className="whitespace-nowrap text-xs font-semibold bg-yellow-200 text-yellow-900 px-2 py-1"
			>
				{progress}% Выполнено
			</Badge>
			<Separator orientation="vertical" className="h-7" />
			<span>{completed} выполнено</span>
			<Separator orientation="vertical" className="h-7" />
			<span>{inProgress} в прогрессе</span>
			<Separator orientation="vertical" className="h-7" />
			<span>{skipped} пропущено</span>
			<Separator orientation="vertical" className="h-7" />
			<span>{topicCount} топиков</span>
			<Separator orientation="vertical" className="h-7" />
			<span>{nodeCount} узлов</span>
		</div>
	);
};

interface RouteHeaderStatsPanelProps {
	progress: number;
	completed: number;
	inProgress: number;
	skipped: number;
	topicCount: number;
	nodeCount: number;
	className?: string;
}

export const RouteHeaderStatsPanelMobile = ({
	progress,
	completed,
	inProgress,
	skipped,
	topicCount,
	nodeCount,
	className,
}: RouteHeaderStatsPanelProps) => {
	const [isExpanded, setIsExpanded] = useState(true);

	return (
		<div
			className={cn(
				'absolute left-[10px] bottom-[-10px] translate-y-[100%] z-10 rounded-md border bg-background px-3 py-2 text-xs shadow-md w-fit',
				className
			)}
		>
			<div
				className={cn(
					'flex items-center justify-between gap-2',
					isExpanded && 'mb-2'
				)}
			>
				<Badge
					variant="secondary"
					className="text-xs font-semibold bg-yellow-200 text-yellow-900"
				>
					{progress}% Выполнено
				</Badge>
				<Button
					variant="ghost"
					size="icon"
					className="w-5 h-5 text-muted-foreground hover:text-foreground"
					onClick={() => setIsExpanded(!isExpanded)}
				>
					{isExpanded ? (
						<EyeOffIcon className="w-4 h-4" />
					) : (
						<EyeIcon className="w-4 h-4" />
					)}
				</Button>
			</div>

			{isExpanded && (
				<div className="space-y-1 text-muted-foreground">
					<Separator />
					<p>{completed} выполнено</p>
					<Separator />
					<p>{inProgress} в прогрессе</p>
					<Separator />
					<p>{skipped} пропущено</p>
					<Separator />
					<p>{topicCount} топиков</p>
					<Separator />
					<p>{nodeCount} узлов</p>
				</div>
			)}
		</div>
	);
};
