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
import { z } from 'zod';
import { AppRoutes } from '@/shared/config';
import { formVerifySchema } from '../schemes/form-verify-schema';
import { getCookie } from 'cookies-next';
import { useVerify } from '../actions/verify';
import { useRef } from 'react';

export const FormVerify = () => {
	const cookieError = useRef<string>('');
	const email = getCookie('email') as string | undefined;
	const verifyType = getCookie('verifyType') as string | undefined;

	const form = useForm<z.infer<typeof formVerifySchema>>({
		resolver: zodResolver(formVerifySchema),
		defaultValues: { code: '' },
	});

	const { mutation, errorMessage } = useVerify(AppRoutes.Dashboard);
	const errors = form.formState.errors;

	const onSubmit = (values: z.infer<typeof formVerifySchema>) => {
		if (!email || !verifyType) {
			cookieError.current =
				'Verification data is missing. Please try logging in again.';
			return;
		}
		mutation.mutate({ ...values, email, type: verifyType });
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col w-full gap-4"
			>
				<FormField
					control={form.control}
					name="code"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder="Enter confirmation code..."
									className="text-sm"
									{...field}
									required
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				{(Object.keys(errors).length > 0 || errorMessage) && (
					<div className="bg-destructive/70 text-destructive-foreground text-sm p-2 rounded-md">
						<div>
							{Object.values(errors).map((error, index) => (
								<span key={index}>
									{error.message as string}
								</span>
							))}
						</div>
						{errorMessage && (
							<div>
								<span>{errorMessage}</span>
							</div>
						)}
					</div>
				)}
				<Button type="submit" disabled={mutation.isPending}>
					Verify
				</Button>
			</form>
		</Form>
	);
};
