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
				url: '#',
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
				url: '#',
				title: 'Профиль',
			},
			{
				url: '#',
				title: 'Настройки',
			},
		],
	},
];
