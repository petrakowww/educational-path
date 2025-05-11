import { SidebarProvider } from '@/shared/ui';
import { CourseDeadlineNotifier } from '@/features/view/components/coure-deadline-notifier';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<SidebarProvider>
				{children}
				<CourseDeadlineNotifier />
			</SidebarProvider>
		</>
	);
}
