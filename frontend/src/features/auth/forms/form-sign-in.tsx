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
import { formSignInSchema } from '../schemes/form-sign-in-schema';
import Link from 'next/link';
import { AppRoutes } from '@/shared/config';
import { useLogin } from '../actions/login';

export const FormSignIn = () => {
	const form = useForm<z.infer<typeof formSignInSchema>>({
		resolver: zodResolver(formSignInSchema),
		defaultValues: {
			identifier: '',
			password: '',
		},
	});

	const { mutation, errorMessage } = useLogin(AppRoutes.VerifyAccount);

	const onSubmit = (values: z.infer<typeof formSignInSchema>) => {
		mutation.mutate(values);
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
						name="identifier"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										placeholder="Username or email..."
										className="text-sm"
										{...field}
										required
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
					<Link href={AppRoutes.ForgotPassword}>
						Reset your password?
					</Link>
				</Button>
				<div className="flex flex-col w-full gap-4">
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
					<Button type="submit">Continue</Button>
				</div>
			</form>
		</Form>
	);
};
