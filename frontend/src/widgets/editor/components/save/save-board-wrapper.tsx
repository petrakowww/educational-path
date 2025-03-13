import { Button } from '@/shared/ui';
import { Loader2 } from 'lucide-react'; // Иконка загрузки

interface ButtonSaveBoardProps {
	onSave?: () => void;
	isLoading?: boolean;
	disabled?: boolean;
	children?: React.ReactNode;
}

export const ButtonSaveBoard = ({
	onSave,
	isLoading = false,
	disabled = false,
	children,
}: ButtonSaveBoardProps) => {
	return (
		<Button
			onClick={onSave}
			disabled={disabled || isLoading}
			className="h-full rounded-md w-full [&_svg]:size-5"
		>
			{isLoading ? <Loader2 className="animate-spin w-4 h-4" /> : null}
			{children || 'Save'}
		</Button>
	);
};
