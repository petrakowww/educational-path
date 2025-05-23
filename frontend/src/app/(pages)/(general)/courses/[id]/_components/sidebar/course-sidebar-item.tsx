'use client';
import { CheckCircle, Lock, PlayCircle } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/shared/lib';

export function CourseSidebarItem({
	id,
	label,
	isCompleted,
	isLocked,
	courseId,
}: {
	id: string;
	label: string;
	isCompleted: boolean;
	isLocked: boolean;
	courseId: string;
}) {
	const pathname = usePathname();
	const router = useRouter();

	const Icon = isLocked ? Lock : isCompleted ? CheckCircle : PlayCircle;
	const isActive = pathname?.includes(id);

	return (
		<button
			onClick={() => router.push(`/courses/${courseId}/chapters/${id}`)}
			type="button"
			className={cn(
				'flex items-center gap-x-2 text-sm px-6 py-3 text-muted-foreground hover:bg-muted rounded-md transition',
				isActive && 'bg-muted text-primary font-medium',
				isCompleted && 'text-emerald-600 dark:text-emerald-400',
			)}
		>
			<Icon className="w-4 h-4" />
			<span className="truncate">{label}</span>
		</button>
	);
}
