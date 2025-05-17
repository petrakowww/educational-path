'use client';

import { Button } from '@/shared/ui';
import { Save, Loader2 } from 'lucide-react';
import { useSaveTopicMapSafely } from './hooks/use-save-topic-mape-safely';

interface ButtonWidgetSaveRoadmapProps {
	onSave?: () => void;
	isLoading?: boolean;
	disabled?: boolean;
}

export const SaveRoadmap = ({
	onSave,
	isLoading = false,
	disabled = false,
}: ButtonWidgetSaveRoadmapProps) => {
	const { save, loading } = useSaveTopicMapSafely();

	const handleClick = async () => {
		const success = await save();
		if (success) {
			onSave?.();
		}
	};

	return (
		<Button
			onClick={handleClick}
			disabled={disabled || isLoading || loading}
			className="h-full rounded-md w-full [&_svg]:size-5"
		>
			{loading ? <Loader2 className="animate-spin w-4 h-4" /> : <Save />}
			<span className="ml-2">Сохранить карту</span>
		</Button>
	);
};
