import { useState, useMemo, useEffect } from 'react';
import { debounce } from 'lodash';
import {
	Input,
	Button,
	Label,
	Select,
	SelectTrigger,
	SelectContent,
	SelectItem,
	SelectValue,
} from '@/shared/ui';
import {
	CheckIcon,
	LinkIcon,
	PlusIcon,
	PodcastIcon,
	TagIcon,
	XIcon,
} from 'lucide-react';
import { TaskImportanceEnum } from '@/features/node/editor/types/importance';
import { CategoriesEnum } from '@/features/node/editor/types/categories';
import { Link, Links } from '@/features/node/editor/types/extended-node';
import { toast } from 'sonner';
import { useNodeStore } from '@/shared/managers/store/editor/nodes-editor.store';

const IMPORTANCE_LEVELS: { value: TaskImportanceEnum; color: string }[] = [
	{ value: TaskImportanceEnum.VeryLow, color: 'bg-green-500' },
	{ value: TaskImportanceEnum.Low, color: 'bg-lime-500' },
	{ value: TaskImportanceEnum.Medium, color: 'bg-yellow-400' },
	{ value: TaskImportanceEnum.High, color: 'bg-orange-500' },
	{ value: TaskImportanceEnum.VeryHigh, color: 'bg-red-500' },
];

const CATEGORY_OPTIONS: { value: CategoriesEnum; label: string }[] = [
	{ value: CategoriesEnum.Video, label: 'Видео' },
	{ value: CategoriesEnum.Article, label: 'Статья' },
	{ value: CategoriesEnum.OpenSource, label: 'Опенсорс' },
	{ value: CategoriesEnum.Podcast, label: 'Подкаст' },
	{ value: CategoriesEnum.Course, label: 'Курс' },
	{ value: CategoriesEnum.Website, label: 'Веб-сайт' },
	{ value: CategoriesEnum.Documentation, label: 'Документация' },
];

export const LinksSettings = () => {
	const [links, setLinks] = useState<Links>([]);

	const { replaceLinks, selectedNodeId } = useNodeStore(
		(state) => ({
			replaceLinks: state.replaceLinks,
			selectedNodeId: state.selectedNodeId,
		}),
		(a, b) => a.selectedNodeId === b.selectedNodeId
	);

	const updateLink = <K extends keyof Link>(
		id: string,
		field: K,
		value: Link[K]
	) => {
		setLinks((prev) => {
			const updated = prev.map((item) =>
				item.id === id ? { ...item, [field]: value } : item
			);
			debouncedSave(updated);
			return updated;
		});
	};

	const handleDeleteLink = (id: string) => {
		const updated = links.filter((link) => link.id !== id);
		setLinks(updated);
		debouncedSave(updated);
	};

	const debouncedSave = useMemo(
		() =>
			debounce((linksToSave: Links) => {
				let isLinksCorrect = true;
				if (!selectedNodeId) {
					toast.error('Узел не найден', {
						description: 'Некорректный узел',
					});
					return;
				}

				replaceLinks(selectedNodeId, linksToSave);

				if (isLinksCorrect) {
					toast.success('Успешно', {
						description: 'Изменения успешно сохранены',
					});
				}
			}, 250),
		[selectedNodeId]
	);

	useEffect(() => {
		if (!selectedNodeId) return;

		const node = useNodeStore.getState().nodesById[selectedNodeId];
		const storedLinks = node?.data?.linkProps?.links ?? [];

		setLinks(storedLinks);
	}, [selectedNodeId]);

	useEffect(() => {
		return () => {
			debouncedSave.cancel();
		};
	}, [debouncedSave]);

	const handleAddLink = () => {
		const newLink: Link = {
			id: crypto.randomUUID(),
			label: '',
			url: '',
			description: '',
			isNecessary: undefined,
			category: CategoriesEnum.Article,
		};

		setLinks((prev) => {
			const updated = [...prev, newLink];
			debouncedSave(updated);
			return updated;
		});
	};

	return (
		<div className="flex flex-col gap-4">
			{links.map((link) => (
				<div
					key={link.id}
					className="border p-4 rounded-lg flex flex-col gap-2"
				>
					<Select
						value={link.category}
						onValueChange={(value) =>
							updateLink(
								link.id,
								'category',
								value as CategoriesEnum
							)
						}
					>
						<SelectTrigger className="w-full mb-0">
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							{CATEGORY_OPTIONS.map(({ value, label }) => (
								<SelectItem key={value} value={value}>
									{label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>

					<div>
						<Label className="text-foreground/80 text-sm">
							Важность (необязательно)
						</Label>
						<div className="flex gap-2 items-center flex-wrap">
							{IMPORTANCE_LEVELS.map(({ value, color }) => (
								<button
									key={value}
									type="button"
									onClick={() =>
										updateLink(
											link.id,
											'isNecessary',
											value
										)
									}
									className={`w-6 h-6 rounded-md flex items-center justify-center transition ${color}`}
									title={value}
								>
									{link.isNecessary === value && (
										<CheckIcon className="w-4 h-4 text-white" />
									)}
								</button>
							))}

							{link.isNecessary !== undefined && (
								<button
									type="button"
									onClick={() =>
										updateLink(
											link.id,
											'isNecessary',
											undefined
										)
									}
									title="Сбросить важность"
									className="ml-2 text-xs text-muted-foreground hover:text-foreground flex items-center gap-1"
								>
									<XIcon className="w-4 h-4" />
									Сбросить
								</button>
							)}
						</div>
					</div>

					<div className="flex items-center gap-2">
						<TagIcon className="w-4 h-4 text-muted-foreground" />
						<Input
							value={link.label ?? ''}
							onChange={(e) =>
								updateLink(link.id, 'label', e.target.value)
							}
							placeholder="Наименование ресурса"
							className="flex-1"
						/>
					</div>
					<div className="flex items-center gap-2">
						<LinkIcon className="w-4 h-4 text-muted-foreground" />
						<Input
							value={link.url ?? ''}
							onChange={(e) =>
								updateLink(link.id, 'url', e.target.value)
							}
							placeholder="URL ресурса"
							className="flex-1"
						/>
					</div>
					<div className="flex items-center gap-2">
						<PodcastIcon className="w-4 h-4 text-muted-foreground" />
						<Input
							value={link.description ?? ''}
							onChange={(e) =>
								updateLink(
									link.id,
									'description',
									e.target.value
								)
							}
							placeholder="Введите описание..."
							className="flex-1"
						/>
					</div>
					<div>
						<Button
							variant={'destructive'}
							onClick={() => handleDeleteLink(link.id)}
							className="w-full h-6 p-0 bg-destructive/80"
							title="Удалить ссылку"
						>
							<XIcon className="w-4 h-4" />
						</Button>
					</div>
				</div>
			))}

			<Button
				type="button"
				variant="outline"
				onClick={handleAddLink}
				className="w-full"
			>
				<PlusIcon className="mr-2 h-4 w-4" />
				Добавить ссылку
			</Button>
		</div>
	);
};
