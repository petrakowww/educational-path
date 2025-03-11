'use client';

import { ChangeProfile2FANotifications } from '../actions/change-notification';
import { useFindProfileSettingsQuery } from '@/shared/graphql/generated/output';
import { LoadingFormInfo } from '../../utils/loading';
import { ChangePasswordProfile } from '../actions/change-password';
import { useState } from 'react';

const hasPassword = (password?: string) =>
	password && password.length > 0 ? true : false;

export const FormChangeSettingsProfile = () => {
	const { data, loading } = useFindProfileSettingsQuery();

	const [isPasswordExist, setPasswordExitst] = useState(
		hasPassword(data?.findProfile.password)
	);

	if (loading) {
		return <LoadingFormInfo textInformation="Загружаем ваши настройки" />;
	}
	return (
		<div className="flex flex-col gap-4">
			<ChangeProfile2FANotifications
				isTwoFactorEnabled={
					data?.findProfile.isTwoFactorEnabled || false
				}
			/>
			<ChangePasswordProfile
				hasPassword={isPasswordExist}
				passwordCallback={setPasswordExitst}
			/>
		</div>
	);
};
