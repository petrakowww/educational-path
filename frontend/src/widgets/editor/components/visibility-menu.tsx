import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/shared/ui';
import { Earth } from 'lucide-react';

export const VisibilityDialogMenu = () => {
	return (
		<Dialog>
			<DialogTrigger
				className="w-full lg:w-auto flex flex-shrink-0 bg-secondary items-center p-2
			rounded-md text-sm gap-2 hover:bg-primary transition-colors hover:text-primary-foreground"
			>
				<Earth width={20} height={20} />
				<span className="text-center w-full">Любой желающий может просмотреть</span>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className="text-2xl">
                        Обновить настройки доступа
					</DialogTitle>
					<DialogDescription>
                        Выберите и измените, кто может получить доступ к этой дорожной карте
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};
