'use client';

import {
	Avatar,
	AvatarFallback,
	AvatarImage,
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
	Skeleton,
} from '@/shared/ui';
import { PenIcon, XIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import {
	profileSchema,
	TypeChangeProfileSchema,
} from '../../schemes/form-change-profile-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useEffect } from 'react';
import {
	useFindProfileQuery,
	useUpdateProfileMutation,
} from '@/shared/graphql/generated/output';
import { toast } from 'sonner';

export const FormChangeProfile = () => {
	const { data, loading } = useFindProfileQuery();

	const [update, { loading: isLoadingUpdate }] = useUpdateProfileMutation({
		onCompleted() {
			toast.success('Успешное обновление данных!', {
				description: 'Ваш профиль успешно обновился.',
			});
		},
		onError(data) {
			console.log(data);
			toast.error('Что-то пошло не так.', {
				description: 'Пожалуйста повторите попытку',
			});
		},
	});

	const form = useForm<TypeChangeProfileSchema>({
		resolver: zodResolver(profileSchema),
		defaultValues: {
			profilename: '',
			name: '',
			telegram: '',
			github: '',
			vk: '',
			avatar: '',
			headline: '',
		},
	});

	const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

	const onSubmit = (data: TypeChangeProfileSchema) => {
		update({
			variables: {
				userExternalDto: {
					name: data.name,
					avatar: data.avatar || null,
				},
				skillProfileDto: {
					profilename: data.profilename || null,
					headline: data.headline || null,
					githubUrl: data.github || null,
					vkUrl: data.vk || null,
					telegramUrl: data.telegram || null,
				},
			},
		});
	};

	useEffect(() => {
		if (data?.findProfile) {
			form.reset({
				profilename: data.findProfile.skillProfile?.profilename || '',
				name: data.findProfile.name || '',
				telegram: data.findProfile.skillProfile?.telegramUrl || '',
				github: data.findProfile.skillProfile?.githubUrl || '',
				vk: data.findProfile.skillProfile?.vkUrl || '',
				avatar: data.findProfile.avatar || '',
				headline: data.findProfile.skillProfile?.headline || '',
			});
		}
	}, [data, form]);

	const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				setAvatarPreview(reader.result as string);
				form.setValue('avatar', reader.result as string);
			};
			reader.readAsDataURL(file);
		}
	};

	if (loading) {
		return (
			<Skeleton className="w-full p-5 text-center">
				Загружаем профиль
			</Skeleton>
		);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<div className="mb-4">
					<FormField
						name="profilename"
						control={form.control}
						render={({ field }) => (
							<FormItem className="mb-2">
								<FormLabel>
									URL профиля{' '}
									<span className="text-red-500">*</span>
								</FormLabel>
								<div className="flex mb-2">
									<span className="bg-gray-200 border border-r-0 rounded-l-md text-sm flex items-center justify-center px-3">
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
					<p className="text-sm text-destructive">
						Если вы хотите обновить свой профиль, обязательно
						укажите новую ссылку на него.
					</p>
				</div>

				<div className="grid gap-4 grid-cols-1 xl:grid-cols-2">
					<div>
						<Card className="h-full">
							<CardContent className="h-full p-6">
								<CardHeader className="p-0 mb-6">
									<CardTitle>Аватар профиля</CardTitle>
									<CardDescription>
										Измените фотографию профиля
									</CardDescription>
								</CardHeader>
								<div className="flex gap-6">
									<div className="relative w-32 h-32">
										<Avatar className="overflow-hidden w-32 h-32">
											<AvatarImage
												className="object-cover"
												src={avatarPreview || undefined}
											/>
											<AvatarFallback>
												{data?.findProfile.name.slice(
													0,
													1
												)}
											</AvatarFallback>
										</Avatar>

										<div className="absolute right-[-5px] bottom-[0] flex flex-col gap-2 bg-secondary p-2 rounded-lg shadow-md border-[1px] border-border">
											<label htmlFor="avatar-upload">
												<Button
													size="icon"
													className="p-1 aspect-square h-auto w-auto"
													type="button"
													onClick={() =>
														document
															.getElementById(
																'avatar-upload'
															)
															?.click()
													}
												>
													<PenIcon />
												</Button>
											</label>

											<input
												id="avatar-upload"
												type="file"
												accept="image/*"
												className="hidden"
												onChange={handleAvatarUpload}
											/>

											<Button
												size="icon"
												variant="destructive"
												className="p-1 aspect-square h-auto w-auto"
												type="button"
												onClick={() => {
													setAvatarPreview(null);
													form.setValue('avatar', '');
												}}
											>
												<XIcon />
											</Button>
										</div>
									</div>
									<p className="text-foreground/80 text-sm">
										Вы можете изменить свой аватар. Аватар
										виден всем пользователям.
									</p>
								</div>
							</CardContent>
						</Card>
					</div>

					<div>
						<Card className="h-full">
							<CardContent className="p-6 h-full flex flex-col gap-2">
								<CardHeader className="p-0 mb-2">
									<CardTitle>
										Информация об аккаунте
									</CardTitle>
									<CardDescription>
										Почту можно поменять в разделе основных
										настроек аккаунта
									</CardDescription>
								</CardHeader>

								<FormField
									name="name"
									control={form.control}
									render={({ field }) => (
										<FormItem className="space-y-0">
											<FormLabel>
												Имя{' '}
												<span className="text-red-500">
													*
												</span>
											</FormLabel>
											<FormControl>
												<Input
													className="text-sm"
													placeholder="Ваше имя"
													{...field}
												/>
											</FormControl>
											<FormMessage className="text-destructive/80" />
										</FormItem>
									)}
								/>

								<div>
									<Label>
										Почта{' '}
										<sup className="text-foreground/80">
											Для просмотра
										</sup>
									</Label>
									<Input
										className="text-sm"
										defaultValue="example.ex@example.com"
										type="email"
										disabled
									/>
								</div>
							</CardContent>
						</Card>
					</div>

					{/* Социальные сети */}
					<div className="col-span-full">
						<Card>
							<CardContent className="p-6 flex flex-col gap-2">
								<CardHeader className="p-0 mb-1">
									<CardTitle>Социальный профиль</CardTitle>
									<CardDescription>
										Здесь вы можете поменять данные, которые
										будут отображаться в вашей карточки
										профиля
									</CardDescription>
								</CardHeader>

								<div>
									<FormField
										name="headline"
										control={form.control}
										render={({ field }) => (
											<FormItem className="space-y-0 mb-3">
												<FormLabel>
													Краткий заголовок для
													профиля
												</FormLabel>
												<FormControl>
													<Input
														className="text-sm"
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
										<FormItem className="space-y-0">
											<FormLabel>Telegram</FormLabel>
											<FormControl>
												<Input
													className="text-sm"
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
										<FormItem className="space-y-0">
											<FormLabel>GitHub</FormLabel>
											<FormControl>
												<Input
													className="text-sm"
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
										<FormItem className="space-y-0">
											<FormLabel>Vk</FormLabel>
											<FormControl>
												<Input
													className="text-sm"
													placeholder="https://vk.com/example"
													{...field}
												/>
											</FormControl>
											<FormMessage className="text-destructive/80" />
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
							disabled={isLoadingUpdate}
						>
							Сохранить профиль
						</Button>
					</div>
				</div>
			</form>
		</Form>
	);
};
