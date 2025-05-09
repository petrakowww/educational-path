'use client';

import {
	Badge,
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	Separator,
} from '@/shared/ui';

interface RouteTagsDetailsProps {
	tags?: string[];
}

export const RouteTagsDetailsCard = ({ tags = [] }: RouteTagsDetailsProps) => {
	return (
		<div>
			<h3 className="text-sm font-semibold mb-2">Ключевые теги</h3>
			<div>
				{tags.length > 0 && (
					<div className="flex flex-wrap gap-2">
						{tags.map((tag) => (
							<Badge key={tag} variant="default" className='text-[10px]'>
								{tag}
							</Badge>
						))}
					</div>
				)}
			</div>
		</div>
	);
};
