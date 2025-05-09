import { SidebarProvider, SidebarTrigger } from '@/shared/ui';
import { ViewerSidebar } from '@/widgets/viewer/aside/aside';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<SidebarProvider>
			{children}
		</SidebarProvider>
	);
}
