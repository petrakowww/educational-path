import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/shared/ui';
import { Earth } from 'lucide-react';

// TODO: необходимо учитывать следующее - могут быть добавлены друзья, доступ осуществляется по ссылке

// TODO: пока ничего компонент делать не будет, учитывать, что состояние кнопки надо менять при смене  настроек

interface VisibilityDialogMenuProps {
	currentVisibilityRules: string;
	callbackChangingVisibilityRules: () => void;
}

export const VisibilityDialogMenu = () => {
	return (
		<Dialog>
			<DialogTrigger
				className="w-full lg:w-auto flex flex-shrink-0 bg-secondary items-center p-2
			rounded-md text-sm gap-2 hover:bg-primary transition-colors hover:text-primary-foreground"
			>
				<Earth width={20} height={20} />
				<span className="text-center w-full">Anyone can view</span>
			</DialogTrigger>
			<DialogContent classNameOverlay="z-[11000]" className="z-[11000]">
				<DialogHeader>
					<DialogTitle className="text-2xl">
						Update Sharing Settings
					</DialogTitle>
					<DialogDescription>
						Pick and modify who can access this roadmap
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};
