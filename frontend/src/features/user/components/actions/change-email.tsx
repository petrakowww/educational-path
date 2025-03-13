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
import { toast } from 'sonner';
import {
	ChangeEmailFormValues,
	changeEmailSchema,
} from '../../schemes/form-change-email';
import { useState } from 'react';
import { useUpdateEmail } from '../../hooks/use-update-email';

interface ChangeEmailProfileProps {
	oldEmail?: string;
	hasPassword: boolean;
}

export const ChangeEmailProfile = ({
	oldEmail,
	hasPassword,
}: ChangeEmailProfileProps) => {
	const [isCodeSent, setIsCodeSent] = useState(false);

	const form = useForm<ChangeEmailFormValues>({
		resolver: zodResolver(changeEmailSchema),
		defaultValues: { oldEmail, newEmail: '', code: '' },
	});

	const { updateEmail, isPending } = useUpdateEmail(setIsCodeSent, form);

	const onSubmit = (values: ChangeEmailFormValues) => {
		if (!hasPassword) {
			toast.error('Для смены почты установите пароль.');
			return;
		}
		console.log(values);
		updateEmail(values);
	};

	if (!oldEmail) return null;

	return (
		<Card>
			<CardHeader>
				<CardTitle>Смена почты</CardTitle>
				<CardDescription>
					{isCodeSent
						? 'Введите код подтверждения'
						: 'Укажите новый email'}
				</CardDescription>
			</CardHeader>
			<CardContent>
				{!hasPassword && (
					<p className="text-destructive text-sm font-medium">
						Вы не можете изменить вашу почту, пока не установите
						пароль!
					</p>
				)}
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="flex flex-col gap-2"
					>
						<FormField
							control={form.control}
							name="oldEmail"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Старая почта</FormLabel>
									<FormControl>
										<Input
											{...field}
											disabled
											className="bg-secondary cursor-not-allowed"
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="newEmail"
							render={({ field }) => (
								<FormItem className="mb-2">
									<FormLabel>Новая почта</FormLabel>
									<FormControl>
										<Input
											type="email"
											placeholder="Введите новую почту"
											{...field}
											disabled={!hasPassword || isCodeSent}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						{isCodeSent && (
							<FormField
								control={form.control}
								name="code"
								render={({ field }) => (
									<FormItem className="mb-2">
										<FormLabel>Код подтверждения</FormLabel>
										<FormControl>
											<Input
												type="text"
												placeholder="Введите код"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						)}

						<Button
							type="submit"
							disabled={!hasPassword || isPending}
							className="w-full"
						>
							{isCodeSent
								? 'Подтвердить почту'
								: 'Изменить почту'}
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};
