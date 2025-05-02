import { Button } from '@/shared/ui';
import { Save, Loader2 } from 'lucide-react';
import React from 'react';

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
	return (
		<Button
			onClick={onSave}
			disabled={disabled || isLoading}
			className="h-full rounded-md w-full [&_svg]:size-5"
		>
			{isLoading ? <Loader2 className="animate-spin w-4 h-4" /> : <Save />}
			<span className="ml-2">Сохранить карту</span>
		</Button>
	);
};
