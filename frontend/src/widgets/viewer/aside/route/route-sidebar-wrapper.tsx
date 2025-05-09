'use client';

import { useState, ReactNode } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/shared/ui';
import { cn } from '@/shared/lib';

type TRouteSidabar = 'details' | 'settings';

interface RouteSidebarWrapperProps {
	details: ReactNode;
	settings: ReactNode;
	className?: string;
}

export const RouteSidebarWrapper = ({
	details,
	settings,
	className,
}: RouteSidebarWrapperProps) => {
	const [tab, setTab] = useState<TRouteSidabar>('details');

	return (
		<div
			className={cn(
				'flex flex-col justify-between h-full w-full',
				className
			)}
		>
			<div className="flex-1 overflow-y-auto pr-1 space-y-4">
				{tab === 'details' ? details : settings}
			</div>

			<div className="pt-4">
				<Tabs
					value={tab}
					onValueChange={(v) => setTab(v as 'details' | 'settings')}
				>
					<TabsList className="w-full grid grid-cols-2">
						<TabsTrigger value="details">О маршруте</TabsTrigger>
						<TabsTrigger value="settings">Настройки</TabsTrigger>
					</TabsList>
				</Tabs>
			</div>
		</div>
	);
};
