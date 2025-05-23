'use client';

import {
	ExternalLink,
	FileText,
	PlayCircle,
	BookOpen,
	Mic,
	Code,
	Globe,
	GraduationCap,
} from 'lucide-react';
import { Badge, Separator } from '@/shared/ui';
import { Link } from '@/features/node/editor/types/extended-node';
import { TaskImportanceEnum } from '@/features/node/editor/types/importance';
import { CategoriesEnum } from '@/features/node/editor/types/categories';

interface NodeLinksSectionProps {
	links: Link[];
}

const importanceMap: Record<
	TaskImportanceEnum,
	{ label: string; color: 'red' | 'orange' | 'yellow' | 'green' | 'gray' }
> = {
	[TaskImportanceEnum.VeryHigh]: { label: 'Очень важно', color: 'red' },
	[TaskImportanceEnum.High]: { label: 'Важно', color: 'orange' },
	[TaskImportanceEnum.Medium]: { label: 'Средне', color: 'yellow' },
	[TaskImportanceEnum.Low]: { label: 'Слабо важно', color: 'green' },
	[TaskImportanceEnum.VeryLow]: { label: 'Необязательно', color: 'gray' },
};

const categoryIcons: Record<CategoriesEnum, React.ReactNode> = {
	[CategoriesEnum.Article]: <FileText className="w-4 h-4" />,
	[CategoriesEnum.Video]: <PlayCircle className="w-4 h-4" />,
	[CategoriesEnum.Documentation]: <BookOpen className="w-4 h-4" />,
	[CategoriesEnum.Podcast]: <Mic className="w-4 h-4" />,
	[CategoriesEnum.OpenSource]: <Code className="w-4 h-4" />,
	[CategoriesEnum.Website]: <Globe className="w-4 h-4" />,
	[CategoriesEnum.Course]: <GraduationCap className="w-4 h-4" />,
};

export const NodeLinksSection = ({ links }: NodeLinksSectionProps) => {
	if (!links || links.length === 0) return null;
	console.log(links);
	return (
		<div>
			<Separator />
			<h4 className="font-semibold mb-2 text-sm text-muted-foreground">
				Полезные ссылки
			</h4>
			<div className="space-y-3">
				{links.map((link) => {
					const importance = link.isNecessary
						? importanceMap[link.isNecessary]
						: null;

					return (
						<a
							key={link.id}
							href={link.url ?? '#'}
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-col border rounded-md p-3 hover:bg-accent transition-colors"
						>
							<div className="flex items-center justify-between mb-1">
								<div className="flex items-center gap-2 text-primary font-medium">
									{categoryIcons[link.category]}
									{link.label ?? 'Без названия'}
								</div>
								{importance && (
									<Badge
										variant="outline"
										className={`text-xs border-${importance.color}-500 text-${importance.color}-600`}
									>
										{importance.label}
									</Badge>
								)}
							</div>

							<div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
								<ExternalLink className="w-3 h-3 opacity-70" />
								<span className="truncate max-w-full">
									{!link.url?.trim()
										? 'Нет ссылки'
										: link.url.trim()}
								</span>
							</div>

							{link.description && (
								<p className="text-sm text-muted-foreground">
									{link.description}
								</p>
							)}
						</a>
					);
				})}
			</div>
		</div>
	);
};
