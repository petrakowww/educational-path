'use client';

import {
	Badge,
} from '@/shared/ui';

interface RouteTagsDetailsProps {
	tags?: string[] | null;
}

export const RouteTagsDetailsCard = ({ tags = [] }: RouteTagsDetailsProps) => {
	return (
		<div>
			<h3 className="text-sm font-semibold mb-2">Ключевые теги</h3>
			<div>
				{tags ? tags.length > 0 && (
					<div className="flex flex-wrap gap-2">
						{tags.map((tag) => (
							<Badge key={tag} variant="default" className='text-[10px]'>
								{tag}
							</Badge>
						))}
					</div>
				) : <p className='text-foreground/80'>Теги не установлены для данного марщрута</p>}
			</div>
		</div>
	);
};
