'use client';

import { useMemo } from 'react';
import { differenceInCalendarDays, format, isBefore } from 'date-fns';
import { toast } from 'sonner';

import {
	Button,
	Popover,
	PopoverContent,
	PopoverTrigger,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
    Separator,
} from '@/shared/ui';

import { Calendar } from '@/shared/ui/calendar/calendar';
import { CalendarIcon, ClockIcon, XIcon } from 'lucide-react';

interface Props {
	deadline: Date | null;
	onSet: (date: Date) => void;
	onRemove: () => void;
	today?: Date;
}

export const CourseDeadlineCalendar = ({
	deadline,
	onSet,
	onRemove,
	today = new Date(),
}: Props) => {
	const status = useMemo(() => {
		if (!deadline) return 'empty';
		if (isBefore(deadline, today)) return 'expired';
		return 'active';
	}, [deadline, today]);

	const daysLeft = deadline ? differenceInCalendarDays(deadline, today) : null;

	const title =
		status === 'empty'
			? 'Дедлайн не установлен'
			: status === 'expired'
			? 'Срок истёк'
			: 'Дедлайн установлен';

	const description =
		status === 'expired' && deadline
			? `Срок: ${format(deadline, 'dd.MM.yyyy')}`
			: status === 'active' && deadline
			? `До дедлайна ${daysLeft === 0 ? 'сегодня' : `${daysLeft} дн.`}`
			: 'Установите срок прохождения курса';

	const handleSelect = (date: Date | undefined) => {
		if (!date) return;
		const wasDeadline = Boolean(deadline);
		onSet(date);
		toast.success(wasDeadline ? 'Дедлайн обновлён' : 'Дедлайн установлен');
	};

	return (
		<Card>
			<CardHeader className="pb-2 p-2">
				<CardTitle className="text-sm flex items-center gap-2 mb-2">
					{title}
					<ClockIcon className="w-4 h-4 text-muted-foreground" />
				</CardTitle>
                <Separator/>
				<CardDescription className='text-foreground/80 text-xs'>{description}</CardDescription>
			</CardHeader>
			<CardContent className="pt-2 p-2 flex items-center justify-between gap-2">
				<Popover>
					<PopoverTrigger asChild>
						<Button variant="outline" size="sm" className="w-full justify-start">
							<CalendarIcon className="mr-2 h-4 w-4" />
							{deadline ? format(deadline, 'dd.MM.yyyy') : 'Выбрать дату'}
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-auto p-0">
						<Calendar
							mode="single"
							selected={deadline ?? undefined}
							onSelect={handleSelect}
							initialFocus
							defaultMonth={deadline ?? undefined}
						/>
					</PopoverContent>
				</Popover>

				{status !== 'empty' && (
					<Button
						variant="ghost"
						size="icon"
						onClick={onRemove}
						title="Удалить дедлайн"
					>
						<XIcon className="w-4 h-4" />
					</Button>
				)}
			</CardContent>
		</Card>
	);
};
