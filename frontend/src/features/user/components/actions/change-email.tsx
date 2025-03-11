import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
// import { useState } from 'react';

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
import { toast } from 'sonner';
// import { useUpdateUserEmailMutation } from '@/shared/graphql/generated/output';

// import { ChangeEmailFormValues, changeEmailSchema } from '../../schemes/form-change-email';

interface ChangeEmailProfileProps {
	hasPassword: boolean;
}

export const ChangeEmailProfile = (props: ChangeEmailProfileProps) => {
    const { hasPassword } = props;
	const [updateEmail, { loading }] = useUpdateUserEmailMutation();

	const form = useForm<ChangeEmailFormValues>({
		resolver: zodResolver(changeEmailSchema),
		defaultValues: { email: '' },
	});

	const onSubmit = (values: ChangeEmailFormValues) => {
		// if (!hasPassword) {
		// 	toast.error('Для смены почты установите пароль.');
		// 	return;
		// }

		// updateEmail({
		// 	variables: { newEmail: values.email },
		// }).then(() => {
		// 	toast.success('Почта успешно изменена!');
		// }).catch((error) => {
		// 	toast.error(error.message);
		// });
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Смена почты</CardTitle>
				<CardDescription>
					Укажите новый адрес электронной почты.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Новая почта</FormLabel>
									<FormControl>
										<Input
											type="email"
											placeholder="Введите новую почту"
											{...field}
											disabled={!hasPassword}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button type="submit" disabled={loading || !hasPassword} className="w-full">
							{loading ? 'Обновление...' : 'Изменить почту'}
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};
