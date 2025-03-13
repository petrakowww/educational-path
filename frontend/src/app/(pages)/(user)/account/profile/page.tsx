import { FormChangeSocialProfile } from '@/features/user/components/forms/form-change-social-profile';
import { AccountWrapper } from '@/features/user/components/wrapper/account-wrapper';

export default function Page() {
	return (
		<AccountWrapper
			title="Профиль"
			description="Создайте свой профиль, чтобы продемонстрировать свои
						умения другим. Профиль будет отображаться при просмотре
						ваших созданных карт."
		>
			<FormChangeSocialProfile />
		</AccountWrapper>
	);
}
