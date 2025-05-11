'use client';

import { useProgressController } from '@/features/view/hooks/use-progress-controller';
import { Slider } from '@/shared/ui';
import { useEffect, useRef, useState } from 'react';

interface Props {
	topicNodeId: string;
	progressValue: number;
	enabled: boolean;
}

export const ProgressSlider = ({
	topicNodeId,
	progressValue,
	enabled,
}: Props) => {
	const [localProgress, setLocalProgress] = useState(progressValue);
	const lastSentValue = useRef(progressValue);

	const { updateProgressValue } = useProgressController();

	useEffect(() => {
		setLocalProgress(progressValue);
		lastSentValue.current = progressValue;
	}, [progressValue]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (
				localProgress !== undefined &&
				lastSentValue.current !== localProgress
			) {
				updateProgressValue(topicNodeId, localProgress);
				lastSentValue.current = localProgress;
			}
		}, 700);

		return () => clearTimeout(timeout);
	}, [localProgress, topicNodeId, updateProgressValue]);

	if (!enabled) return null;

	return (
		<div>
			<p className="text-xs text-muted-foreground mb-1">
				Прогресс: {Math.round(localProgress * 100)}%
			</p>
			<Slider
				min={0}
				max={1}
				step={0.01}
				value={[localProgress]}
				onValueChange={(value) => {
					if (Array.isArray(value)) {
						setLocalProgress(value[0]);
					}
				}}
				onClick={(e) => e.stopPropagation()}
				onPointerDown={(e) => e.stopPropagation()}
			/>
		</div>
	);
};
