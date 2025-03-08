import {
	Label,
	Button,
	Input,
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
	Separator,
} from '@/shared/ui';
import { Avatar, AvatarImage, AvatarFallback } from '@/shared/ui/avatar/avatar';

import { PenIcon, XIcon } from 'lucide-react';

export default function Page() {
	return (
		<div className="mr-auto px-2">
			<div className="mb-4">
				<h1 className="text-3xl font-bold">Профиль</h1>
				<p className="text-sm text-muted-foreground">
					Создайте свой профиль, чтобы продемонстрировать свои умения другим. Профиль будет отображаться при просмотре ваших созданных карт.
				</p>
			</div>

			<div className="mb-4">
				<Label>
					URL профиля <span className="text-red-500">*</span>
				</Label>

				<div className="flex mb-2">
					<span className="bg-gray-200 border border-r-0 rounded-l-md text-sm flex items-center justify-center px-3">
						edupath.com/u/
					</span>
					<Input
						placeholder="example"
						className="rounded-l-none p-0 text-sm h-10 px-3"
						required
					/>
				</div>
				<p className="text-sm text-foreground/80">
					Если вы хотите обновить свой профиль, обязательно укажите новую ссылку на него. (Это ваше имя пользователя)
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
										<AvatarImage src={undefined} />
										<AvatarFallback>
											{'ГЕНРИ'}
										</AvatarFallback>
									</Avatar>

									<div className="absolute right-[-5px] bottom-[0] flex flex-col gap-2 bg-secondary p-2 rounded-lg shadow-md border-[1px] border-border">
										<Button
											size="icon"
											className="p-1 aspect-square h-auto w-auto"
										>
											<PenIcon />
										</Button>
										<Button
											size="icon"
											variant="destructive"
											className="p-1 aspect-square h-auto w-auto"
										>
											<XIcon />
										</Button>
									</div>
								</div>
								<p className="text-foreground/80 text-sm">
									Вы можете изменить свой аватар. Аватар виден всем пользователям и будет отображаться рядом с вашими картами и курсами.
								</p>
							</div>
						</CardContent>
					</Card>
				</div>

				<div>
					<Card className="h-full">
						<CardContent className="p-6 h-full">
							<CardHeader className="p-0 mb-6">
								<CardTitle>Информация об аккаунте</CardTitle>
								<CardDescription>
									Ваши основные данные
								</CardDescription>
							</CardHeader>
							<div className="mt-4">
								<Label htmlFor="name-profile-id">
									Имя <span className="text-red-500">*</span>
								</Label>
								<Input
									id="name-profile-id"
									placeholder="Ваше имя"
								/>
							</div>
							<div className="mt-4">
								<Label htmlFor="email-profile-id">
									Почта{' '}
									<sup className="text-foreground/80">
										Для просмотра
									</sup>
								</Label>
								<Input
									id="email-profile-id"
									defaultValue="example.ex@example.com"
									type="email"
									disabled={true}
								/>
							</div>
						</CardContent>
					</Card>
				</div>

				<div className="col-span-full">
					<Card>
						<CardContent className="p-6">
							<CardHeader className="p-0 mb-6">
								<CardTitle>Социальные данные</CardTitle>
								<CardDescription>
									Ссылки на ваши социальные сети
								</CardDescription>
							</CardHeader>
							<div className="mt-4">
								<Label>Заголовок</Label>
								<Input placeholder="Full Stack Developer" />
								<Separator className="mt-4" />
							</div>
							<div className="mt-4">
								<Label htmlFor="telegram-profile-id">
									Telegram{' '}
								</Label>
								<Input
									id="telegram-profile-id"
									placeholder="@example"
								/>
							</div>
							<div className="mt-4">
								<Label htmlFor="github-profile-id">
									GitHub{' '}
								</Label>
								<Input
									id="github-profile-id"
									placeholder="https://github.com/example"
								/>
							</div>
							<div className="mt-4">
								<Label htmlFor="vk-profile-id">Vk </Label>
								<Input
									id="vk-profile-id"
									placeholder="https://vk.com/example"
								/>
							</div>
						</CardContent>
					</Card>
				</div>
				<div className="col-span-full">
					<span></span>
					<Button className="w-full">Сохранить профиль</Button>
				</div>
			</div>

			{/* <div className="mt-2 flex items-center">
		  <Checkbox id="show-email" />
		  <Label htmlFor="show-email" className="ml-2">Показать мой email в профиле</Label>
		</div> */}
		</div>
	);
}
