'use client';

import { useRouteStore } from '@/shared/managers/store/maps/filters.store';
import { useState } from 'react';
import {
	Label,
	Button,
	Input,
	Switch,
	Checkbox,
	Select,
	SelectTrigger,
	SelectContent,
	SelectItem,
	SelectValue,
	Slider,
	Separator,
	PopoverContent,
	PopoverTrigger,
	Popover,
	Calendar,
	Command,
	CommandInput,
	CommandList,
	CommandItem,
	CommandGroup,
} from '@/shared/ui';

import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/shared/lib';
import { useFindAllTagsQuery } from '@/shared/graphql/generated/output';

export const FilterPanel = () => {
	const selectedTags = useRouteStore((s) => s.selectedTags);
	const verifiedOnly = useRouteStore((s) => s.verifiedOnly);
	const searchQuery = useRouteStore((s) => s.searchQuery);
	const hasVideo = useRouteStore((s) => s.hasVideo);
	const dateRange = useRouteStore((s) => s.dateRange);
	const topicCountRange = useRouteStore((s) => s.topicCountRange);
	const sortBy = useRouteStore((s) => s.sortBy);

	const toggleTag = useRouteStore((s) => s.toggleTag);
	const setSearchQuery = useRouteStore((s) => s.setSearchQuery);
	const setVerifiedOnly = useRouteStore((s) => s.setVerifiedOnly);
	const setHasVideo = useRouteStore((s) => s.setHasVideo);
	const setDateRange = useRouteStore((s) => s.setDateRange);
	const setTopicCountRange = useRouteStore((s) => s.setTopicCountRange);
	const setSortBy = useRouteStore((s) => s.setSortBy);
	const resetFilters = useRouteStore((s) => s.resetFilters);

	const [startDate, setStartDate] = useState(
		dateRange.start ? dateRange.start.toISOString().substring(0, 10) : ''
	);
	const [endDate, setEndDate] = useState(
		dateRange.end ? dateRange.end.toISOString().substring(0, 10) : ''
	);

	const { data: tagsData } = useFindAllTagsQuery();
	const availableTags = tagsData?.findAllTags ?? [];

	return (
		<div className="space-y-4">
			{/* Поиск */}
			<div>
				<FilterLabel label="Поиск" />
				<Input
					id="search"
					placeholder="Название или автор..."
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
			</div>

			{/* Теги */}
			<Popover>
				<PopoverTrigger asChild>
					<Button variant="outline" className="w-full mb-2">
						{selectedTags.length > 0
							? `${selectedTags.length} выбрано`
							: 'Выберите теги'}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="p-0">
					<Command>
						<CommandInput placeholder="Поиск тегов..." />
						<CommandList>
							<CommandGroup>
								{availableTags.map((tag) => (
									<CommandItem
										key={tag.id}
										onSelect={() => toggleTag(tag.name)}
										className="cursor-pointer"
									>
										<Checkbox
											checked={selectedTags.includes(
												tag.name
											)}
											className="mr-2"
										/>
										{tag.name}
									</CommandItem>
								))}
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>

			{/* Только верифицированные */}
			<div className="flex items-center justify-between">
				<Label htmlFor="verified-only">Только верифицированные</Label>
				<Switch
					id="verified-only"
					checked={verifiedOnly}
					onCheckedChange={setVerifiedOnly}
				/>
			</div>

			{/* Наличие видеокурса */}
			<div className="flex items-center justify-between">
				<Label htmlFor="has-video">Есть видеокурс</Label>
				<Switch
					id="has-video"
					checked={hasVideo}
					onCheckedChange={setHasVideo}
				/>
			</div>

			{/* Диапазон дат */}
			<div>
				<FilterLabel label="Диапазон дат" />
				<div className="flex flex-col space-y-2 items-center">
					<Popover>
						<PopoverTrigger asChild>
							<Button
								variant="outline"
								className={cn(
									'w-full justify-start text-left font-normal',
									!startDate && 'text-muted-foreground'
								)}
							>
								<CalendarIcon className="mr-2 h-4 w-4" />
								{startDate
									? format(new Date(startDate), 'dd.MM.yyyy')
									: 'Начальная дата'}
							</Button>
						</PopoverTrigger>
						<PopoverContent className="w-auto p-0" align="start">
							<Calendar
								mode="single"
								selected={
									startDate ? new Date(startDate) : undefined
								}
								onSelect={(date) => {
									if (date) {
										const iso = date
											.toISOString()
											.substring(0, 10);
										setStartDate(iso);
										setDateRange(date, dateRange.end);
									}
								}}
								initialFocus
							/>
						</PopoverContent>
					</Popover>

					<span className="text-sm text-center sm:text-left">до</span>

					<Popover>
						<PopoverTrigger asChild>
							<Button
								variant="outline"
								className={cn(
									'w-full justify-start text-left font-normal',
									!endDate && 'text-muted-foreground'
								)}
							>
								<CalendarIcon className="mr-2 h-4 w-4" />
								{endDate
									? format(new Date(endDate), 'dd.MM.yyyy')
									: 'Конечная дата'}
							</Button>
						</PopoverTrigger>
						<PopoverContent className="w-auto p-0" align="start">
							<Calendar
								mode="single"
								selected={
									endDate ? new Date(endDate) : undefined
								}
								onSelect={(date) => {
									if (date) {
										const iso = date
											.toISOString()
											.substring(0, 10);
										setEndDate(iso);
										setDateRange(dateRange.start, date);
									}
								}}
								initialFocus
							/>
						</PopoverContent>
					</Popover>
				</div>
			</div>

			{/* Количество тем */}
			<div>
				<FilterLabel label="Количество тем" />
				<div className="mb-2">
					<Slider
						revertColor={true}
						value={topicCountRange}
						onValueChange={(val) => {
							const [a, b] = val as [number, number];
							setTopicCountRange([
								Math.min(a, b),
								Math.max(a, b),
							]);
						}}
						min={0}
						max={50}
						step={1}
					/>
				</div>
				<div className="text-sm text-muted-foreground">
					{topicCountRange[0]} - {topicCountRange[1]} тем
				</div>
			</div>

			{/* Сортировка */}
			<div>
				<FilterLabel label="Сортировка" />
				<Select value={sortBy} onValueChange={setSortBy}>
					<SelectTrigger id="sort-by">
						<SelectValue placeholder="Сортировка" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="recency">По новизне</SelectItem>
						<SelectItem value="popularity">
							По популярности
						</SelectItem>
					</SelectContent>
				</Select>
			</div>

			{/* Сброс фильтров */}
			<div>
				<Button variant="outline" size="sm" onClick={resetFilters}>
					Сбросить фильтры
				</Button>
			</div>
		</div>
	);
};

interface FilterLabelProps {
	label: string;
}

export const FilterLabel = ({ label }: FilterLabelProps) => (
	<div className="pb-2">
		<Label>{label}</Label>
		<Separator className="my-2" />
	</div>
);
