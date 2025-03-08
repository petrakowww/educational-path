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
import {
	formResetPasswordSchema,
	TypeResetPasswordSchema,
} from '../../schemes/form-reset-password-schema';
import { useResetPasswordMutation } from '../../hooks/use-reset-password-mutation';

export const FormResetPassword = () => {
	const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
	const theme = useTheme();

	const form = useForm<TypeResetPasswordSchema>({
		resolver: zodResolver(formResetPasswordSchema),
		defaultValues: {
			email: '',
		},
	});

	const errors = form.formState.errors;

	const { reset, isLoadingReset } = useResetPasswordMutation();

	const onSubmit = (values: TypeResetPasswordSchema) => {
		if (recaptchaValue) {
			reset({ values, recaptcha: recaptchaValue });
		} else {
			toast.error(
				'Пожалуйста, завершите reCAPTCHA перед сбросом пароля.'
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
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder="Адрес электронной почты..."
									className="text-sm"
									{...field}
									type="email"
									required
									disabled={isLoadingReset}
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

				<Button type="submit" disabled={isLoadingReset}>
					Продолжить
				</Button>
			</form>
		</Form>
	);
};
