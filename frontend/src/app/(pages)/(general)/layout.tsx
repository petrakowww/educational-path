import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from '@/shared/ui/sidebar/sidebar';
import { AccountSidebar, Header } from '@/widgets/ui';

export default function Layout({ children }: { children: React.ReactNode }) {

	return (
		<div className="flex flex-col h-screen">
			<Header />
			<div className="flex-grow h-full">
				<SidebarProvider className="min-h-full relative ">
					<AccountSidebar />
					<SidebarInset>
						<main className="flex h-full bg-secondary">
							<SidebarTrigger className="mx-1 mt-3  focus-visible:ring-2 focus-visible:ring-offset-0 aspect-square" />
							<div className="h-full w-full border-l bg-background">
								<div className="h-full w-full p-6">
									{children}
								</div>
							</div>
						</main>
					</SidebarInset>
				</SidebarProvider>
			</div>
		</div>
	);
}
