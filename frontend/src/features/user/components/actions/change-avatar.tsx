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
} from '@/shared/ui';
import { PenIcon, XIcon } from 'lucide-react';
import { useAvatarUpdate } from '../../hooks/use-avatar-update';
import { useEffect } from 'react';
import { staticResources } from '@/shared/lib/utils/public-client';

interface ChangeProfileAvatarProps {
	avatar?: string | null;
    name?: string;
}

export const ChangeProfileAvatar = (props: ChangeProfileAvatarProps) => {
	const { avatar, name } = props;
	const {
		avatarPreview,
		fileInputRef,
		setAvatarPreview,
		handleAvatarUpload,
		handleAvatarDelete,
		handleResetAvatar,
	} = useAvatarUpdate();

	useEffect(() => {
		if (avatar) {
			console.log(staticResources.getAvatarUrl(avatar));
			setAvatarPreview(staticResources.getAvatarUrl(avatar));
		}
	}, [avatar, setAvatarPreview]);

	return (
		<Card>
			<CardHeader>
				<CardTitle>Аватар профиля</CardTitle>
				<CardDescription>Измените фотографию профиля</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex gap-6">
					<div className="relative w-32 h-32">
						<Avatar className="overflow-hidden w-32 h-32">
							<AvatarImage
								className="object-cover"
								src={avatarPreview || undefined}
							/>
							<AvatarFallback>
								{name?.slice(0, 1) || '?'}
							</AvatarFallback>
						</Avatar>

						<div className="absolute right-[-5px] bottom-[0] flex flex-col gap-2 bg-secondary p-2 rounded-lg shadow-md border-[1px] border-border">
							<label htmlFor="avatar-upload">
								<Button
									size="icon"
									className="p-1 aspect-square h-auto w-auto"
									type="button"
									onClick={() =>
										fileInputRef.current?.click()
									}
								>
									<PenIcon />
								</Button>
							</label>

							<input
								ref={fileInputRef}
								type="file"
								accept="image/*"
								className="hidden"
								onChange={handleAvatarUpload}
								onClick={handleResetAvatar}
							/>

							<Button
								size="icon"
								variant="destructive"
								className="p-1 aspect-square h-auto w-auto"
								type="button"
								onClick={handleAvatarDelete}
							>
								<XIcon />
							</Button>
						</div>
					</div>
					<p className="text-foreground/80 text-sm">
						Вы можете изменить свой аватар. Аватар виден всем
						пользователям.
					</p>
				</div>
			</CardContent>
		</Card>
	);
};
