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
import { toast } from 'sonner';
import { useUpdateUserPasswordMutation } from '@/shared/graphql/generated/output';

interface ChangePasswordProfileProps {
	hasPassword: boolean;
	passwordCallback: (value: boolean) => void;
}

export const ChangePasswordProfile = (props: ChangePasswordProfileProps) => {
	const { hasPassword, passwordCallback } = props;

	const [updateProfilePassword, { loading }] = useUpdateUserPasswordMutation({
		onCompleted(data) {
			toast.success(
				data.updateUserPassword.message || 'Пароль был изменён'
			);
            passwordCallback(true);
		},
		onError(error) {
            console.error(error);
			toast.error('Ошибка при обновление пароля', {
				description: error.message,
			});
		},
	});

	const form = useForm<ChangePasswordFormValues>({
		resolver: zodResolver(changePasswordSchema),
		defaultValues: {
			oldPassword: '',
			newPassword: '',
			confirmPassword: '',
		},
	});

	const onSubmit = (values: ChangePasswordFormValues) => {
		updateProfilePassword({
			variables: {
				userPasswordDto: {
					oldPassword: values.oldPassword || '',
					newPassword: values.newPassword,
				},
			},
		});
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
					<form onSubmit={form.handleSubmit(onSubmit)}>
						{hasPassword && (
							<FormField
								control={form.control}
								name="oldPassword"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Старый пароль</FormLabel>
										<FormControl>
											<Input
												type="password"
												placeholder="Введите старый пароль"
												{...field}
											/>
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
										<Input
											type="password"
											placeholder="Введите новый пароль"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="confirmPassword"
							render={({ field }) => (
								<FormItem className='mb-4'>
									<FormLabel>
										Подтвердите новый пароль
									</FormLabel>
									<FormControl>
										<Input
											type="password"
											placeholder="Повторите новый пароль"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button
							type="submit"
							disabled={loading}
							className="w-full"
						>
							{loading ? 'Обновление...' : 'Изменить пароль'}
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};
