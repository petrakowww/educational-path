import { Button } from "@/shared/ui";
import { useLogoutMutation } from "@/features/auth/hooks/use-logout-mutation";

export const HeaderLogout = () => {
	const { logoutMutation, isLoadingLogout } = useLogoutMutation();
	
	const handleClick = () => {
		logoutMutation();
	};

	return (
		<Button
			variant="outline"
			disabled={isLoadingLogout}
			onClick={handleClick}
			className="border-2 border-border hover:bg-secondary hover:text-secondary-foreground"
		>
			{isLoadingLogout ? 'Выход...' : 'Выйти'}
		</Button>
	);
};