'use server';

import { redirect } from 'next/navigation';
import { getSession } from './session';
import { AppRoutes } from '@/shared/config';

export async function logout() {
	const session = await getSession();
	session.destroy();
	redirect(AppRoutes.SignIn);
}
