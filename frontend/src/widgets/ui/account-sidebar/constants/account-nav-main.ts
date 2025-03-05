'use client';

import { ArrayNavMainProps } from '../types/account-nav-main';
import { CircleUserIcon, MapIcon } from 'lucide-react';

export const mapArray: ArrayNavMainProps[] = [
	{
		title: 'Educational Maps',
		url: '#',
		icon: MapIcon,
		isActive: false,
		items: [
			{
				url: '#',
				title: 'roadmaps',
			},
		],
	},
];

export const accountArray: ArrayNavMainProps[] = [
	{
		title: 'Account',
		url: '#',
		icon: CircleUserIcon,
		isActive: false,
		items: [
			{
				url: '#',
				title: 'profile',
			},
			{
				url: '#',
				title: 'settings',
			},
		],
	},
];
