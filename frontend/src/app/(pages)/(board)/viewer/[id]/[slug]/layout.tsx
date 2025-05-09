import { SidebarProvider, SidebarTrigger } from '@/shared/ui';
import { ViewerSidebar } from '@/widgets/viewer/aside/aside';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<SidebarProvider>
			<div className="flex flex-row w-full">
				<ViewerSidebar />
				<div className="bg-muted/40 border-r">
					<SidebarTrigger />
				</div>
				{children}
			</div>
		</SidebarProvider>
	);
}
