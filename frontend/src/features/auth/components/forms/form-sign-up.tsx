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
import {
	formSignUpSchema,
	TypeRegisterSchema,
} from '../../schemes/form-sing-up-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import ReCAPTCHA from 'react-google-recaptcha';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { toast } from 'sonner';
import { useRegisterMutation } from '../../hooks/use-register-mutation';

export const FormSignUp = () => {
	const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
	const theme = useTheme();

	const form = useForm<TypeRegisterSchema>({
		resolver: zodResolver(formSignUpSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
			passwordRepeat: '',
		},
	});


	const errors = form.formState.errors;

	const { register, isLoadingRegister } = useRegisterMutation();

	const onSubmit = (values: TypeRegisterSchema) => {
		if (recaptchaValue) {
			register({values, recaptcha: recaptchaValue});
		} else {
			toast.error('Please complete the reCAPTCHA before registering');
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
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder="Username..."
									className="text-sm"
									{...field}
									required
									disabled={isLoadingRegister}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder="Email Address..."
									className="text-sm"
									{...field}
									type="email"
									required
									disabled={isLoadingRegister}
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
									{...field}
									type="password"
									required
									disabled={isLoadingRegister}
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
									placeholder="Repeat password..."
									className="text-sm"
									{...field}
									type="password"
									required
									disabled={isLoadingRegister}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				{(Object.keys(errors).length > 0) && (
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
				<Button type="submit" disabled={isLoadingRegister}>
					Continue to verify email
				</Button>
			</form>
		</Form>
	);
};
