'use client';

import {
	Form,
	FormField,
	FormItem,
	FormControl,
	Input,
	Button,
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
	InputOTPSeparator,
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
import { useEffect } from 'react';

export const FormSignIn = () => {
	const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
	const [isShowTwoFactor, setIsShowFactor] = useState(false);

	const theme = useTheme();

	const form = useForm<TypeLoginSchema>({
		resolver: zodResolver(formSignInSchema),
		defaultValues: {
			email: '',
			password: '',
			code: '',
		},
	});

	const { login, isLoadingLogin } = useLoginMutation(setIsShowFactor);

	useEffect(() => {
		if (isShowTwoFactor) {
			form.setValue('code', '');
		}
	}, [isShowTwoFactor, form]);

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
					{!isShowTwoFactor ? (
						<>
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
						</>
					) : (
						<FormField
							control={form.control}
							name="code"
							render={({ field }) => (
								<FormItem className="flex items-center justify-center">
									<FormControl>
										<InputOTP
											maxLength={6}
											value={field.value}
											onChange={field.onChange}
										>
											<InputOTPGroup>
												<InputOTPSlot index={0} />
												<InputOTPSlot index={1} />
												<InputOTPSlot index={2} />
											</InputOTPGroup>
											<InputOTPSeparator />
											<InputOTPGroup>
												<InputOTPSlot index={3} />
												<InputOTPSlot index={4} />
												<InputOTPSlot index={5} />
											</InputOTPGroup>
										</InputOTP>
									</FormControl>
								</FormItem>
							)}
						/>
					)}
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
