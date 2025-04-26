import { useState } from 'react';
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from '@/shared/ui';
import { Badge, Button } from '@/shared/ui';
import { XIcon } from 'lucide-react';

interface TagSelectorProps {
	availableTags: { id: string; name: string }[];
	selectedTags: string[];
	onTagAdd: (tagId: string) => void;
	onTagRemove: (tagId: string) => void;
	tagsLoading?: boolean;
}

export const TagSelector = (props: TagSelectorProps) => {
	const {
		availableTags,
		selectedTags,
		onTagAdd,
		onTagRemove,
		tagsLoading = false,
	} = props;
	const [search, setSearch] = useState('');

	return (
		<div className="space-y-2">
			<Command>
				<CommandInput
					placeholder="Поиск тегов..."
					value={search}
					onValueChange={setSearch}
				/>
				{tagsLoading ? (
					<CommandEmpty>Загрузка тегов...</CommandEmpty>
				) : (
					<CommandEmpty>Ничего не найдено.</CommandEmpty>
				)}
				{search && (
					<CommandGroup className="max-h-[120px] overflow-y-auto pr-1">
						{availableTags
							.filter(
								(tag) =>
									!selectedTags.includes(tag.id) &&
									tag.name
										.toLowerCase()
										.includes(search.toLowerCase())
							)
							.map((tag) => (
								<CommandItem
									key={tag.id}
									value={tag.name}
									onSelect={() => onTagAdd(tag.id)}
								>
									{tag.name}
								</CommandItem>
							))}
					</CommandGroup>
				)}
			</Command>

			{selectedTags.length > 0 && (
				<div className="flex flex-wrap gap-2">
					{selectedTags.map((tagId) => {
						const tag = availableTags.find((t) => t.id === tagId);
						return tag ? (
							<Badge
								key={tag.id}
								variant="outline"
								className="flex items-center gap-1"
							>
								{tag.name}
								<Button
									variant="ghost"
									type="button"
									onClick={() => onTagRemove(tag.id)}
									className="p-0 h-auto text-destructive hover:text-destructive/80"
								>
									<XIcon size={12} />
								</Button>
							</Badge>
						) : null;
					})}
				</div>
			)}
		</div>
	);
};
