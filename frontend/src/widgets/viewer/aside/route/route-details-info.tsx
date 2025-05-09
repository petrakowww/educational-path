'use client';

import {
	Badge,
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	Separator,
} from '@/shared/ui';

interface RouteDetailsCardProps {
	title: string;
	description?: string;
	tags?: string[];
}

export const RouteDetailsCard = ({
	title,
	description,
	tags = [],
}: RouteDetailsCardProps) => {
	return (
		<Card className="max-h-[500px] overflow-hidden">
			<CardHeader className="p-2 py-0 mb-2 pt-3">
				<CardTitle className='text-base'>{title}</CardTitle>
			</CardHeader>
			<CardContent className="text-sm text-muted-foreground p-2 pt-0 flex flex-col gap-3">
				<Separator />
				<div className="whitespace-pre-line text-xs">{description}</div>
			</CardContent>
		</Card>
	);
};
