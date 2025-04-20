'use client';

import { ArrayNavMainProps } from '../types/account-nav-main';
import { CircleUserIcon, MapIcon } from 'lucide-react';

export const mapArray: ArrayNavMainProps[] = [
	{
		title: 'Образовательные карты',
		url: '#',
		icon: MapIcon,
		isActive: false,
		items: [
			{
				url: 'maps',
				title: 'Ваши карты',
			},
		],
	},
];

export const accountArray: ArrayNavMainProps[] = [
	{
		title: 'Аккаунт',
		url: '#',
		icon: CircleUserIcon,
		isActive: false,
		items: [
			{
				url: '/account/profile',
				title: 'Профиль',
			},
			{
				url: '/account/settings',
				title: 'Настройки',
			},
		],
	},
];
