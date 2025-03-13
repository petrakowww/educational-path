'use client';

import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	Label,
	Separator,
} from '@/shared/ui';
import { useForm } from 'react-hook-form';
import {
	profileSchema,
	TypeChangeProfileSchema,
} from '../../schemes/form-change-social-profile-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useMemo, useRef } from 'react';
import { useFindProfileQuery } from '@/shared/graphql/generated/output';
import { toast } from 'sonner';
import { useUpdateSocialProfile } from '../../hooks/use-update-profile';
import { ChangeProfileAvatar } from '../actions/change-avatar';
import { LoadingFormInfo } from '../../utils/loading';

export const FormChangeSocialProfile = () => {
	const { data, loading } = useFindProfileQuery();

	const { updateProfile, isLoading } = useUpdateSocialProfile();

	const initialValuesRef = useRef<TypeChangeProfileSchema | null>(null);

	const defaultValues = useMemo(() => {
		return {
			profilename: data?.findProfile.skillProfile?.profilename || '',
			telegram: data?.findProfile.skillProfile?.telegramUrl || '',
			github: data?.findProfile.skillProfile?.githubUrl || '',
			vk: data?.findProfile.skillProfile?.vkUrl || '',
			headline: data?.findProfile.skillProfile?.headline || '',
			name: data?.findProfile.name || '',
		};
	}, [data]);

	const form = useForm<TypeChangeProfileSchema>({
		resolver: zodResolver(profileSchema),
		defaultValues: defaultValues,
	});

	const onSubmit = async (data: TypeChangeProfileSchema) => {
		const { success, error } = await updateProfile(data);

		if (success) {
			toast.success('Профиль был успешно обновлён!');
		} else if (error) {
			toast.error('Ошибка при обновление профиля.', {
				description: error,
			});
		}
	};

	useEffect(() => {
		if (data?.findProfile && !initialValuesRef.current) {
			initialValuesRef.current = defaultValues;
			form.reset(defaultValues);
		}
	}, [data, form, defaultValues]);

	if (loading) {
		return <LoadingFormInfo textInformation="Загружаем ваш профиль" />;
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="grid gap-4 grid-cols-1 xl:grid-cols-2"
			>
				<div className="xl:row-start-1 xl:row-end-2 flex flex-col gap-4">
					<ChangeProfileAvatar
						name={data?.findProfile.name}
						avatar={data?.findProfile.avatar}
					/>
					<Card className="h-full">
						<CardHeader>
							<CardTitle>Информация об аккаунте</CardTitle>
							<CardDescription>
								Почту и отображаемое имя можно поменять в
								разделе основных настроек аккаунта
							</CardDescription>
						</CardHeader>
						<CardContent className="flex flex-col gap-2">
							<div>
								<FormField
									name="name"
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormLabel>Имя</FormLabel>
											<FormControl>
												<Input
													placeholder="Введите ваше имя"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							<div>
								<Label>Почта </Label>
								<Input
									defaultValue={
										data?.findProfile.email ||
										'example.ex@example.com'
									}
									type="email"
									disabled
								/>
							</div>
						</CardContent>
					</Card>
				</div>

				<div className="xl:col-start-2 xl:row-start-1 xl:row-end-2">
					<Card className="h-full">
						<CardHeader>
							<CardTitle>Социальный профиль</CardTitle>
							<CardDescription>
								Здесь вы можете поменять данные, которые будут
								отображаться в вашей карточки профиля
							</CardDescription>
						</CardHeader>
						<CardContent className="flex flex-col gap-2">
							<div>
								<FormField
									name="profilename"
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												URL профиля{' '}
												<span className="text-red-500">
													*
												</span>
											</FormLabel>
											<div className="flex mb-2">
												<span className="bg-secondary rounded-l-md text-sm flex items-center justify-center px-3">
													edupath.com/u/
												</span>
												<FormControl>
													<Input
														placeholder="example"
														className="rounded-l-none p-0 text-sm h-10 px-3"
														required
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</div>
										</FormItem>
									)}
								/>
								<p className="text-sm text-destructive mb-3">
									Если вы хотите обновить свой профиль,
									обязательно укажите новую ссылку на него.
								</p>
								<Separator />
							</div>

							<div>
								<FormField
									name="headline"
									control={form.control}
									render={({ field }) => (
										<FormItem className="space-y-0 mb-3">
											<FormLabel>
												Краткий заголовок для профиля
											</FormLabel>
											<FormControl>
												<Input
													placeholder="Frontend-разработчик со стажем в 3 года..."
													{...field}
												/>
											</FormControl>
											<FormMessage className="text-destructive/80" />
										</FormItem>
									)}
								/>
								<Separator />
							</div>

							<FormField
								name="telegram"
								control={form.control}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Telegram</FormLabel>
										<FormControl>
											<Input
												placeholder="@example"
												{...field}
											/>
										</FormControl>
										<FormMessage className="text-destructive/80" />
									</FormItem>
								)}
							/>

							<FormField
								name="github"
								control={form.control}
								render={({ field }) => (
									<FormItem>
										<FormLabel>GitHub</FormLabel>
										<FormControl>
											<Input
												placeholder="https://github.com/example"
												{...field}
											/>
										</FormControl>
										<FormMessage className="text-destructive/80" />
									</FormItem>
								)}
							/>

							<FormField
								name="vk"
								control={form.control}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Vk</FormLabel>
										<FormControl>
											<Input
												placeholder="https://vk.com/example"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</CardContent>
					</Card>
				</div>

				<div className="col-span-full">
					<Button
						type="submit"
						className="w-full"
						disabled={isLoading}
					>
						Сохранить профиль
					</Button>
				</div>
			</form>
		</Form>
	);
};
