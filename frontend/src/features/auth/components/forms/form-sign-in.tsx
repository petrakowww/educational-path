'use client';

import {
	Form,
	FormField,
	FormItem,
	FormControl,
	Input,
	Button,
} from '@/shared/ui';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	formSignInSchema,
	TypeLoginSchema,
} from '../../schemes/form-sign-in-schema';
import Link from 'next/link';
import { AppRoutes } from '@/shared/config';
import ReCAPTCHA from 'react-google-recaptcha';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { toast } from 'sonner';
import { useLoginMutation } from '../../hooks/use-login-mutation';

export const FormSignIn = () => {
	const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
	const theme = useTheme();

	const form = useForm<TypeLoginSchema>({
		resolver: zodResolver(formSignInSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const { login, isLoadingLogin } = useLoginMutation();

	const onSubmit = (values: TypeLoginSchema) => {
		if (recaptchaValue) {
			login({ values, recaptcha: recaptchaValue });
		} else {
			toast.error('Please complete reCAPTCHA before authorization');
		}
	};
	const errors = form.formState.errors;

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col w-full gap-1"
			>
				<div className="flex flex-col w-full gap-4">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										placeholder="Email..."
										className="text-sm"
										disabled={isLoadingLogin}
										{...field}
										required
										type="email"
									/>
								</FormControl>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										placeholder="Password..."
										className="text-sm"
										disabled={isLoadingLogin}
										{...field}
										type="password"
										required
									/>
								</FormControl>
							</FormItem>
						)}
					/>
				</div>

				<Button
					variant={'link'}
					className="justify-start px-0 font-normal py-1 w-fit"
					asChild
				>
					<Link href={AppRoutes.ResetPassword}>
						Reset your password?
					</Link>
				</Button>
				<div className="flex flex-col w-full gap-4">
					{Object.keys(errors).length > 0 && (
						<div className="bg-destructive/70 text-destructive-foreground text-sm p-2 rounded-md">
							<div>
								{Object.values(errors).map((error, index) => (
									<span key={index}>
										{error.message as string}
									</span>
								))}
							</div>
						</div>
					)}
					<div className="flex justify-center">
						<ReCAPTCHA
							sitekey={
								process.env.GOOGLE_RECAPTCHA_SITE_KEY as string
							}
							onChange={setRecaptchaValue}
							theme={theme.theme === 'light' ? 'light' : 'dark'}
						/>
					</div>
					<Button type="submit" disabled={isLoadingLogin}>
						Continue
					</Button>
				</div>
			</form>
		</Form>
	);
};
