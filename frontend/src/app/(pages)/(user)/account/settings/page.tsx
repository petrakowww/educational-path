import { FormChangeSettingsProfile } from '@/features/user/components/forms/form-change-settings-profile';
import { AccountWrapper } from '@/features/user/components/wrapper/account-wrapper';

export default function Page() {
	return (
		<AccountWrapper
			title="Настройки аккаунта"
			description="Здесь вы можете включить или выключить двухфакторную
					аутентификацию, изменить почту или пароль, а также удалить
					аккаунт, если вы решили, что он вам больше не нужен."
		>
			<FormChangeSettingsProfile />
		</AccountWrapper>
	);
}
