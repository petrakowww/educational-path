import { useUpdateProfileMutation } from '@/shared/graphql/generated/output';

import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	Switch,
} from '@/shared/ui';

import { useState } from 'react';
import { toast } from 'sonner';

export const ChangeProfile2FANotifications = ({
	isTwoFactorEnabled,
}: {
	isTwoFactorEnabled: boolean;
}) => {
	const [enabled, setEnabled] = useState(isTwoFactorEnabled);
	const [updateProfile, { loading, error }] = useUpdateProfileMutation();

	const handleToggle = async () => {
		const newState = !enabled;
		setEnabled(newState);

		try {
			await updateProfile({
				variables: { dto: { isTwoFactorEnabled: newState } },
			});
			toast.success(
				`Двухфакторная аутентификация ${newState ? 'включена' : 'выключена'}`
			);
		} catch {
			toast.error('Ошибка при обновлении', {description: error?.message });
			setEnabled(!newState);
		}
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Двухфакторная аутентификация</CardTitle>
				<CardDescription>
					Вы можете включить или выключить двухфакторную
					аутентификацию. Отключая, вы перестанете получать на почту
					СМС с кодом для входа.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex justify-between border rounded-md p-3 items-center shadow-sm">
					<div className="flex flex-col">
						<h3 className="font-medium">
							Уведомления с кодом на почту
						</h3>
						<p className="text-sm text-foreground/80">
							Переключая, изменения сразу вступят в силу
						</p>
					</div>
					<div>
						<Switch
							checked={enabled}
							onCheckedChange={handleToggle}
							disabled={loading}
						/>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};
