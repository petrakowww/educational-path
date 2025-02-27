import {
	Form,
	FormField,
	FormItem,
	FormControl,
	Input,
	Button,
} from '@/shared/ui';
import { useForm } from 'react-hook-form';
import { formSignUpSchema } from '../schemes/form-sing-up-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRegistration } from '../actions/register';
import { AppRoutes } from '@/shared/config';

export const FormSignUp = () => {
	const form = useForm<z.infer<typeof formSignUpSchema>>({
		resolver: zodResolver(formSignUpSchema),
		defaultValues: {
			username: '',
			email: '',
			password: '',
		},
	});

	const { mutation, errorMessage } = useRegistration(AppRoutes.SignIn);

	const errors = form.formState.errors;

	const onSubmit = (values: z.infer<typeof formSignUpSchema>) => {
		mutation.mutate(values);
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col gap-4 w-full"
			>
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder="Username..."
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
				<Button type="submit" disabled={form.formState.isSubmitting}>
					Continue to verify email
				</Button>
			</form>
		</Form>
	);
};
