import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui';
import Link from 'next/link';

interface AuthorInfoProps {
	id: string;
	name: string;
	avatarUrl?: string;
}

export const AuthorInfo = ({ id, name, avatarUrl }: AuthorInfoProps) => {
	const fallback = name
		.split(' ')
		.map((word) => word[0])
		.join('')
		.slice(0, 2)
		.toUpperCase();

	return (
		<div className="flex items-center gap-3 text-sm w-full">
			<Avatar asChild>
				<Link
					href={`/profile/${id}`}
					title="Перейти в профиль"
					className="shrink-0"
				>
					<AvatarImage src={avatarUrl || ''} alt={name} />
					<AvatarFallback>{fallback}</AvatarFallback>
				</Link>
			</Avatar>
			<div className="flex flex-col min-w-0">
				<span className="font-medium text-foreground truncate">
					{name}
				</span>
				<span className="text-muted-foreground text-xs">
					Автор маршрута
				</span>
			</div>
		</div>
	);
};
