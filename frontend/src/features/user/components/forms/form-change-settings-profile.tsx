'use client';

import { ChangeProfile2FANotifications } from '../actions/change-notification';
import { useFindProfileSettingsQuery } from '@/shared/graphql/generated/output';
import { LoadingFormInfo } from '../../utils/loading';
import { ChangePasswordProfile } from '../actions/change-password';
import { useState, useEffect } from 'react';
import { ChangeEmailProfile } from '../actions/change-email';
import { DeleteAccountProfile } from '../actions/delete-account';

const hasPassword = (password?: string) =>
	password && password.length > 0 ? true : false;

export const FormChangeSettingsProfile = () => {
	const { data, loading } = useFindProfileSettingsQuery();
	const [isPasswordExist, setPasswordExitst] = useState(false);

	useEffect(() => {
		if (data?.findProfile.password !== undefined) {
			setPasswordExitst(hasPassword(data.findProfile.password));
		}
	}, [data?.findProfile.password]);

	if (loading) {
		return <LoadingFormInfo textInformation="Загружаем ваши настройки" />;
	}
	return (
		<div className="flex flex-col gap-4">
			{data?.findProfile.email && (
				<ChangeProfile2FANotifications
					isTwoFactorEnabled={
						data?.findProfile.isTwoFactorEnabled || false
					}
				/>
			)}

			<ChangePasswordProfile
				hasPassword={isPasswordExist}
				passwordCallback={setPasswordExitst}
			/>

			{data?.findProfile.email && (
				<ChangeEmailProfile
					hasPassword={isPasswordExist}
					oldEmail={data?.findProfile.email}
				/>
			)}

			<DeleteAccountProfile />
		</div>
	);
};
