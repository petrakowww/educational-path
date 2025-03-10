// TODO: не нужен, поскольку в Auth Guard на сервере уже есть проверка

// import {
// 	AxiosError,
// 	AxiosInstance,
// 	AxiosRequestConfig,
// 	HttpStatusCode,
// } from 'axios';
// import { api } from '@/shared/api';
// import { authService } from '@/features/auth/services/auth.service';
// import { cookieClient } from './cookie.client';

// interface AxiosRequestConfigWithRetry extends AxiosRequestConfig {
// 	_isRetry?: boolean;
// }

// class AuthInterceptor {
// 	private axiosInstance: AxiosInstance;

// 	constructor(axiosInstance: AxiosInstance) {
// 		this.axiosInstance = axiosInstance;
// 		this.setupResponseInterceptor();
// 	}

// 	private setupResponseInterceptor() {
// 		this.axiosInstance.interceptors.response.use(
// 			(config) => config,
// 			async (error: AxiosError) => {
// 				const originalRequest =
// 					error.config as AxiosRequestConfigWithRetry;
// 				if (
// 					error?.response?.status === HttpStatusCode.Unauthorized &&
// 					originalRequest &&
// 					!originalRequest._isRetry
// 				) {
// 					originalRequest._isRetry = true;
// 					try {
// 						await authService.refreshToken();
// 					} catch (err) {
// 						if (
// 							(err as AxiosError).status ===
// 							HttpStatusCode.Unauthorized
// 						) {
// 							cookieClient.logout();
// 						}
// 					}
// 				}

// 				throw error;
// 			}
// 		);
// 	}
// }

// export const authInterceptor = new AuthInterceptor(api.getInstance());
