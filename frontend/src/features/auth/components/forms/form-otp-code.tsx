'use client';

import {
	FormField,
	FormItem,
	FormControl,
	Button,
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
	InputOTPSeparator,
	Form,
} from '@/shared/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { toast } from 'sonner';
import {
	formTwoFactorSchema,
	TypeTwoFactorSchema,
} from '../../schemes/form-two-factor-schema';
import { useVerifyTwoFactorMutation } from '../../hooks/use-verify-two-factor-mutation';
import { useForm } from 'react-hook-form';

export const FormTwoFactorAuth = () => {
	const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
	const theme = useTheme();

	const form = useForm<TypeTwoFactorSchema>({
		resolver: zodResolver(formTwoFactorSchema),
		defaultValues: {
			code: '',
		},
	});

	const errors = form.formState.errors;
	const { verify, isLoadingVerify } = useVerifyTwoFactorMutation();

	const onSubmit = (values: TypeTwoFactorSchema) => {
		if (recaptchaValue) {
			verify({ recaptcha: recaptchaValue, values: values });
		} else {
			toast.error(
				'Please complete reCAPTCHA before verifying your authentication code.'
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
					name="code"
					render={({ field }) => (
						<FormItem className="flex items-center justify-center">
							<FormControl>
								<InputOTP maxLength={6} {...field}>
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
				{Object.keys(errors).length > 0 && (
					<div className="bg-destructive/70 text-destructive-foreground text-sm p-2 rounded-md">
						{Object.values(errors).map((error, index) => (
							<p key={index}>{error.message as string}</p>
						))}
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

				<Button type="submit" disabled={isLoadingVerify}>
					Verify Code
				</Button>
			</form>
		</Form>
	);
};
