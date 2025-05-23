'use client';
import { Menu } from 'lucide-react';
import { Sheet, SheetTrigger, SheetContent } from '@/shared/ui';
import { CourseSidebar } from './course-sidebar';
import { MOCK_COURSE } from './mock';

export function CourseMobileSidebar({
	course,
	progressCount,
}: {
	course: typeof MOCK_COURSE;
	progressCount: number;
}) {
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
