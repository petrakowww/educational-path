import { useEffect } from 'react';

export const useRefreshToken = () => {
	useEffect(() => {
		const controller = new AbortController();

		const refresh = async () => {
			try {
				await fetch('/api/auth/refresh-token-redirect', {
					method: 'GET',
					credentials: 'include',
					signal: controller.signal,
				});
			} catch (err) {
				console.error('Ошибка обновления токена', err);
			}
		};

		refresh();

		return () => controller.abort();
	}, []);
};
