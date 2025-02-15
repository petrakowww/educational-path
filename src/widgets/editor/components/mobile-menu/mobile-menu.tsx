import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/shared/ui';
import { MenuIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface MobileMenuProps {
	children: ReactNode;
}

export const MobileMenuWidget = (props: MobileMenuProps) => {
	const { children } = props;

	return (
		<Drawer direction="right">
			<DrawerTrigger
				className="h-full px-2 flex-1 bg-secondary flex items-center justify-center rounded-md hover:bg-primary
            hover:text-primary-foreground transition-colors"
			>
				<MenuIcon />
			</DrawerTrigger>
			<DrawerContent className="rounded-l-md px-4 py-2">
				<DrawerHeader className="px-0">
					<DrawerTitle className="text-left p-0 after:mt-2 after:content-[''] after:block after:border-b-2">
						Select the desired settings
					</DrawerTitle>
				</DrawerHeader>
				{children}
				<DrawerFooter className="p-0">
					<DrawerClose className="rounded-md text-sm p-2 bg-destructive text-destructive-foreground hover:bg-destructive/90">
						Cancel
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};
