'use client';

import { Menu } from 'lucide-react';
import { Sheet, SheetTrigger, SheetContent } from '@/shared/ui';
import { CourseSidebar } from './course-sidebar';

import { GetVideoCourseQuery } from '@/shared/graphql/generated/output';

interface CourseMobileSidebarProps {
	course: GetVideoCourseQuery['videoCourse'];
	progressCount: number;
}

export function CourseMobileSidebar({
	course,
	progressCount,
}: CourseMobileSidebarProps) {
	return (
		<Sheet>
			<SheetTrigger className="md:hidden pr-4">
				<Menu />
			</SheetTrigger>
			<SheetContent side="left" className="p-0 w-72">
				<CourseSidebar course={course} progressCount={progressCount} />
			</SheetContent>
		</Sheet>
	);
}
