import { ReactNode } from 'react';

interface RouteSettingsPanelProps {
	isAddedByUser: boolean;
	publicSettings: ReactNode;
	privateSettings?: ReactNode;
}

export const RouteSettingsPanel = ({
	isAddedByUser,
	publicSettings,
	privateSettings,
}: RouteSettingsPanelProps) => {
	return (
		<div className="space-y-4">
			{publicSettings}

			{isAddedByUser && privateSettings}
		</div>
	);
};
