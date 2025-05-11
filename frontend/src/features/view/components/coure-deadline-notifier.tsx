'use client';

import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useViewerStore } from '@/shared/managers/store/viewer/view.store';
import { useApolloClient } from '@apollo/client';
import { GetPreviewCourseInfoDocument } from '@/shared/graphql/generated/output';
import {
	parseISO,
	differenceInCalendarDays,
	differenceInHours,
	isAfter,
} from 'date-fns';
import { useParams } from 'next/navigation';
import { Button } from '@/shared/ui';
import { XIcon } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/shared/ui/alert/alert';
import { Portal } from '@/shared/lib/components/portal';

export const CourseDeadlineNotifier = () => {
	const topicMapId = useViewerStore((s) => s.topicMapId);
	const isCourseAdded = useViewerStore((s) => s.isCourseAdded);
	const client = useApolloClient();
	const params = useParams();

	const [alertVisible, setAlertVisible] = useState(false);
	const [alertText, setAlertText] = useState('');
	const [notifiedHourly, setNotifiedHourly] = useState(false);
	const [userCourseId, setUserCourseId] = useState<string | null>(null);
	const [deadlineDate, setDeadlineDate] = useState<Date | null>(null);

	useEffect(() => {
		if (!topicMapId || !isCourseAdded) return;

		let deadlineString: string | null = null;
		let courseId: string | null = null;

		try {
			const { getUserTopicMap } = client.readQuery({
				query: GetPreviewCourseInfoDocument,
				variables: { routeId: params?.id ?? '' },
			}) ?? {};

			const course = getUserTopicMap?.userCourse;
			if (!course) return;

			deadlineString = course.deadline ?? null;
			courseId = course.id ?? null;
		} catch {
			return;
		}

		if (!deadlineString || !courseId) return;

		const cookieKey = `hideDeadlineAlert_${courseId}`;
		const cookieValue = document.cookie
			.split('; ')
			.find((row) => row.startsWith(cookieKey + '='));

		if (cookieValue?.includes('true')) return;

		const deadline = parseISO(deadlineString);
		const now = new Date();

		if (!isAfter(deadline, now)) return;

		const daysLeft = differenceInCalendarDays(deadline, now);
		const hoursLeft = differenceInHours(deadline, now);

		setUserCourseId(courseId);
		setDeadlineDate(deadline);
		setAlertVisible(true);
		setAlertText(
			daysLeft === 0
				? 'Дедлайн установлен на сегодня'
				: `До дедлайна осталось ${daysLeft} дн.`
		);

		if (daysLeft === 1 && hoursLeft > 0 && !notifiedHourly) {
			toast.warning('Скоро дедлайн!', {
				description: `Остался ${hoursLeft} ч.`,
			});
			setNotifiedHourly(true);

			const interval = setInterval(() => {
				const hoursRemaining = differenceInHours(deadline, new Date());
				if (hoursRemaining <= 0) {
					clearInterval(interval);
					return;
				}
				toast.warning('Скоро дедлайн!', {
					description: `Остался ${hoursRemaining} ч.`,
				});
			}, 60 * 60 * 1000);

			return () => clearInterval(interval);
		}
	}, [client, topicMapId, isCourseAdded, params?.id, notifiedHourly]);

	const handleDismissPermanently = () => {
		setAlertVisible(false);
		if (!userCourseId || !deadlineDate) return;

		const expires = new Date(deadlineDate);
		expires.setHours(23, 59, 59);

		document.cookie = `hideDeadlineAlert_${userCourseId}=true; expires=${expires.toUTCString()}; path=/`;
	};

	if (!alertVisible) return null;

	return (
		<Portal>
			<div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-xl px-4">
				<Alert
					variant="default"
					className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 shadow-lg border rounded-md bg-background"
				>
					<div>
						<AlertTitle>Внимание к дедлайну</AlertTitle>
						<AlertDescription>{alertText}</AlertDescription>
					</div>
					<div className="flex gap-2">
						<Button
							size="sm"
							variant="ghost"
							onClick={handleDismissPermanently}
						>
							Больше не показывать
						</Button>
						<Button
							size="icon"
							variant="ghost"
							onClick={() => setAlertVisible(false)}
						>
							<XIcon className="w-4 h-4" />
						</Button>
					</div>
				</Alert>
			</div>
		</Portal>
	);
};
