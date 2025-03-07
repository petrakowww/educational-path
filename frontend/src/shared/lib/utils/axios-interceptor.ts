import { AxiosError, AxiosInstance, AxiosRequestConfig, HttpStatusCode } from 'axios';
import { apiRoutes } from '@/shared/config';
import { api } from '@/shared/api';
import { cookieClient } from './cookie-client';
import { authService } from '@/features/auth/services/auth.service';

interface AxiosRequestConfigWithRetry extends AxiosRequestConfig {
  _isRetry?: boolean;
}

class AuthInterceptor {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
    this.setupResponseInterceptor();
  }

  private setupResponseInterceptor() {
    this.axiosInstance.interceptors.response.use(
      (config) => config,
      async (error: AxiosError) => {
        const originalRequest = error.config as AxiosRequestConfigWithRetry;
        if (
          error?.response?.status === HttpStatusCode.Unauthorized &&
          originalRequest &&
          !originalRequest._isRetry
        ) {
          originalRequest._isRetry = true;
          try {
            await authService.refreshToken();
          } catch (err) {
            if ((err as AxiosError).status === HttpStatusCode.Unauthorized) {
              this.clearCookies();
            }
          }
        }

        throw error;
      }
    );
  }

  private async refreshToken() {
    await this.axiosInstance.get(apiRoutes.auth.checkSession);
  }

  private clearCookies() {
    cookieClient.logout();
  }
}

export const authInterceptor = new AuthInterceptor(api.getInstance());
