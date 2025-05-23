'use client';

import { useGetVideoCoursesByNodeQuery } from '@/shared/graphql/generated/output';
import { Card, CardContent, Skeleton, Button, Separator } from '@/shared/ui';
import Link from 'next/link';
import { FC } from 'react';

interface NodeVideoCoursesSectionProps {
	topicNodeId: string;
}

export const NodeVideoCoursesSection: FC<NodeVideoCoursesSectionProps> = ({
	topicNodeId,
}) => {
	const { data, loading } = useGetVideoCoursesByNodeQuery({
		variables: { topicNodeId },
		skip: !topicNodeId,
	});

	if (loading) {
		return (
			<div>
				<Separator />
				<h3 className="font-semibold mb-2 text-sm text-muted-foreground">
					Видеокурсы узла
				</h3>
				<div className="space-y-3">
					{Array.from({ length: 2 }).map((_, i) => (
						<Card key={i}>
							<CardContent className="py-4 px-5 space-y-2">
								<Skeleton className="h-5 w-2/3" />
								<Skeleton className="h-4 w-full" />
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		);
	}

	const courses = data?.videoCoursesByNode ?? [];

	if (courses.length === 0) return null;

	return (
		<div>
			<Separator />
			<h3 className="font-semibold mb-2 text-sm text-muted-foreground">
				Видеокурсы узла
			</h3>
			<div className="space-y-3">
				{courses.map((course) => {
					const firstPublishedChapter = course.chapters?.find((ch) => ch.isPublished);
					const href = firstPublishedChapter
						? `/courses/${course.id}/chapters/${firstPublishedChapter.id}`
						: `/courses/${course.id}`;

					return (
						<Card key={course.id}>
							<CardContent className="flex justify-between items-center py-4 px-5 gap-4">
								<div className="min-w-0 flex-1">
									<p className="font-medium truncate">
										{course.title}
									</p>
									{course.description && (
										<p className="text-sm text-muted-foreground mt-1 line-clamp-2">
											{course.description}
										</p>
									)}
								</div>
								<Button
									variant="outline"
									asChild
									className="shrink-0"
								>
									<Link
										href={href}
										target="_blank"
										rel="noopener noreferrer"
									>
										Перейти
									</Link>
								</Button>
							</CardContent>
						</Card>
					);
				})}
			</div>
		</div>
	);
};
