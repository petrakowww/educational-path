import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
	Button,
	Input,
} from '@/shared/ui';
import {
	ChangePasswordFormValues,
	changePasswordSchema,
} from '../../schemes/form-change-password';
import { useChangePassword } from '../../hooks/use-update-password';

interface ChangePasswordProfileProps {
	hasPassword: boolean;
	passwordCallback: (value: boolean) => void;
}

export const ChangePasswordProfile = ({ hasPassword, passwordCallback }: ChangePasswordProfileProps) => {
	const form = useForm<ChangePasswordFormValues>({
		resolver: zodResolver(changePasswordSchema),
		defaultValues: {
			oldPassword: '',
			newPassword: '',
			confirmPassword: '',
		},
	});

	const { changePassword, isPending } = useChangePassword((success) => {
        if (success) {
            form.reset();
            passwordCallback(true);
        }
    });

	const onSubmit = (values: ChangePasswordFormValues) => {
		changePassword(values);
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Пароль</CardTitle>
				<CardDescription>
					Здесь вы можете изменить свой старый пароль.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2">
						{hasPassword && (
							<FormField
								control={form.control}
								name="oldPassword"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Старый пароль</FormLabel>
										<FormControl>
											<Input type="password" placeholder="Введите старый пароль" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						)}

						<FormField
							control={form.control}
							name="newPassword"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Новый пароль</FormLabel>
									<FormControl>
										<Input type="password" placeholder="Введите новый пароль" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="confirmPassword"
							render={({ field }) => (
								<FormItem className="mb-2">
									<FormLabel>Подтвердите новый пароль</FormLabel>
									<FormControl>
										<Input type="password" placeholder="Повторите новый пароль" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button type="submit" disabled={isPending} className="w-full">
							{isPending ? 'Обновление...' : 'Изменить пароль'}
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};
