import { Button } from '@/shared/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faYandex,
	faGoogle,
	faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { ProviderServiceType } from '../../types/service.oauth.type';
import { authService } from '../../services/auth.services';

export const AuthSocial = () => {
	const router = useRouter();

	const { mutateAsync } = useMutation({
		mutationKey: ['oauth by provider'],
		mutationFn: async (provider: ProviderServiceType) =>
			await authService.oauthByProvider(provider),
	});

	const handleOnClick = async (provider: ProviderServiceType) => {
		const response = await mutateAsync(provider);

		if (response) {
			router.push(response.url);
		}
	};

	return (
		<div className="flex flex-col gap-4 lg:justify-start w-full lg:basis-1/3">
			<Button
				variant="outline"
				className="w-full gap-3"
				onClick={() => handleOnClick('github')}
			>
				Continue with GitHub{' '}
				<FontAwesomeIcon
					icon={faGithub}
					style={{ width: 20, height: 20 }}
				/>
			</Button>
			<Button
				variant="outline"
				className="w-full gap-3"
				onClick={() => handleOnClick('google')}
			>
				Continue with Google{' '}
				<FontAwesomeIcon
					icon={faGoogle}
					style={{ width: 20, height: 20 }}
				/>
			</Button>
			<Button
				variant="outline"
				className="w-full gap-3"
				onClick={() => handleOnClick('yandex')}
			>
				Continue with Yandex{' '}
				<FontAwesomeIcon
					icon={faYandex}
					style={{ width: 20, height: 20 }}
				/>
			</Button>
		</div>
	);
};
