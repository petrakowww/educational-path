'use client';

import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';

export type TypeSearchParams = Record<
	string,
	| string
	| number
	| boolean
	| undefined
	| Array<string | number | boolean | undefined>
>;

export interface RequestOptions extends AxiosRequestConfig {
	params?: TypeSearchParams;
}

export class AxiosClient {
	private axiosInstance: AxiosInstance;

	public constructor(init: {
		baseUrl: string;
		headers?: Record<string, string>;
	}) {
		this.axiosInstance = axios.create({
			baseURL: init.baseUrl,
			headers: init.headers,
			withCredentials: true,
		});
	}

	private handleError(error: AxiosError) {
		if (error.response) {
			const data = error.response.data as { message?: string };
			return data?.message || error.response.statusText;
		}
		
		return 'Unknown error occurred';
	}

	public async request<T>(
		method: string,
		endpoint: string,
		options: RequestOptions = {}
	): Promise<T> {
		try {
			const { data } = await this.axiosInstance({
				method,
				url: endpoint,
				...options,
			});

			return data;
		} catch (error) {
			throw new Error(this.handleError(error as AxiosError));
		}
	}

	public get<T>(endpoint: string, options?: RequestOptions) {
		return this.request<T>('GET', endpoint, options);
	}

	public post<T>(
		endpoint: string,
		body?: FormData | Record<string, unknown>,
		options?: RequestOptions
	) {
		return this.request<T>('POST', endpoint, { ...options, data: body });
	}

	public put<T>(
		endpoint: string,
		body?: FormData | Record<string, unknown>,
		options?: RequestOptions
	) {
		return this.request<T>('PUT', endpoint, { ...options, data: body });
	}

	public delete<T>(endpoint: string, options?: RequestOptions) {
		return this.request<T>('DELETE', endpoint, options);
	}

	public patch<T>(
		endpoint: string,
		body?: FormData | Record<string, unknown>,
		options?: RequestOptions
	) {
		return this.request<T>('PATCH', endpoint, { ...options, data: body });
	}

	public getInstance() {
		return this.axiosInstance;
	}
}


