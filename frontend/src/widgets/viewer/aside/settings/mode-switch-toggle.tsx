'use client';

import { useState } from 'react';
import {
	Button,
	Card,
	CardContent,
	Tooltip,
	TooltipProvider,
	TooltipTrigger,
	TooltipContent,
	Separator,
} from '@/shared/ui';
import { ChevronsLeftRightEllipsisIcon, GitBranchIcon, ListOrderedIcon, Rows4Icon } from 'lucide-react';
import { cn } from '@/shared/lib';

export const ModeSwitchToggle = () => {
	const [mode, setMode] = useState<'graph' | 'linear'>('linear');

	return (
		<Card>
			<CardContent className="p-2 flex flex-col gap-3">
				<div className="text-sm font-medium">Режим прохождения</div>

				<TooltipProvider>
					<div className="flex flex-col gap-2">
						<Separator />
						<p className="text-xs text-foreground/80">
							Выберите формат прохождения маршрута
						</p>
						<div className="flex flex-row justify-start items-center gap-2">
							<Tooltip>
								<TooltipTrigger asChild>
									<Button
										variant="outline"
										onClick={() => setMode('linear')}
										className={cn(
											'p-2 aspect-square',
											mode === 'linear' &&
												'bg-primary text-primary-foreground'
										)}
									>
										<Rows4Icon className="w-5 h-5" />
									</Button>
								</TooltipTrigger>
								<TooltipContent>
									<p>
										Строго линейный — темы идут по порядку,
										без возможности пропуска.
									</p>
								</TooltipContent>
							</Tooltip>

							<Tooltip>
								<TooltipTrigger asChild>
									<Button
										variant="outline"
										onClick={() => setMode('graph')}
										className={cn(
											'p-2 aspect-square',
											mode === 'graph' &&
												'bg-primary text-primary-foreground'
										)}
									>
										<ChevronsLeftRightEllipsisIcon className="w-5 h-5" />
									</Button>
								</TooltipTrigger>
								<TooltipContent>
									<p>
										Смешанный — можно выбирать темы в
										произвольном порядке.
									</p>
								</TooltipContent>
							</Tooltip>
						</div>
					</div>
				</TooltipProvider>
			</CardContent>
		</Card>
	);
};
