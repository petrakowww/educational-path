import { CourseSidebarItem } from './course-sidebar-item';
import { GetVideoCourseQuery, VideoCourse } from '@/shared/graphql/generated/output';

interface CourseSidebarProps {
	course: GetVideoCourseQuery['videoCourse'];
	progressCount: number;
}

export function CourseSidebar({ course, progressCount }: CourseSidebarProps) {
	return (
		<div className="w-full h-full border-r bg-background shadow-sm">
			<div className="p-6 border-b">
				<h1 className="font-semibold text-base">{course.title}</h1>
				<p className="text-sm text-muted-foreground mt-1">
					Прогресс: {progressCount}% глав завершено
				</p>
			</div>
			<div className="py-4 flex flex-col gap-1">
				{course.chapters.map((chapter) => {
					const isCompleted = chapter.progress?.[0]?.isCompleted ?? false;
					return (
						<CourseSidebarItem
							key={chapter.id}
							id={chapter.id}
							label={chapter.title}
							isCompleted={isCompleted}
							isLocked={false} // Блокировка обрабатывается отдельно в родителе
							courseId={course.id}
						/>
					);
				})}
			</div>
		</div>
	);
}
