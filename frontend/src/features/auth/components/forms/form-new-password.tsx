'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import {
	Form,
	FormField,
	FormItem,
	FormControl,
	Input,
	Button,
} from '@/shared/ui';
import { toast } from 'sonner';
import ReCAPTCHA from 'react-google-recaptcha';
import { useTheme } from 'next-themes';
import { formNewPasswordSchema, TypeNewPasswordSchema } from '../../schemes/form-new-password-schema';
import { useNewPasswordMutation } from '../../hooks/use-new-password-mutation';

export const FormNewPassword = () => {
	const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
	const theme = useTheme();

	const form = useForm<TypeNewPasswordSchema>({
		resolver: zodResolver(formNewPasswordSchema),
		defaultValues: {
			password: '',
			passwordRepeat: '',
		},
	});

	const errors = form.formState.errors;

	const { newPassword, isLoadingNew } = useNewPasswordMutation();

	const onSubmit = (values: TypeNewPasswordSchema) => {
		if (recaptchaValue) {
			newPassword({ values, recaptcha: recaptchaValue });
		} else {
			toast.error(
				'Пожалуйста, завершите reCAPTCHA перед установкой нового пароля.'
			);
		}
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col gap-4 w-full"
			>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder="Новый пароль..."
									className="text-sm"
									{...field}
									type="password"
									required
									disabled={isLoadingNew}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="passwordRepeat"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder="Повторите новый пароль..."
									className="text-sm"
									{...field}
									type="password"
									required
									disabled={isLoadingNew}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				{Object.keys(errors).length > 0 && (
					<div className="bg-destructive/70 text-destructive-foreground text-sm p-2 rounded-md">
						{Object.values(errors).map((error, index) => (
							<p key={index}>{error.message as string}</p>
						))}
					</div>
				)}

				<div className="flex justify-center">
					<ReCAPTCHA
						sitekey={process.env.GOOGLE_RECAPTCHA_SITE_KEY as string}
						onChange={setRecaptchaValue}
						theme={theme.theme === 'light' ? 'light' : 'dark'}
					/>
				</div>

				<Button type="submit" disabled={isLoadingNew}>
					Установить новый пароль
				</Button>
			</form>
		</Form>
	);
};
