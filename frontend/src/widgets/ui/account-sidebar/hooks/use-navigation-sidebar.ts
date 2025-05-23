import { ArrayNavMainProps, AccountNavMainProps } from '../types/account-nav-main';
import { CircleUserIcon, MapIcon, HomeIcon, ShieldIcon } from 'lucide-react';

export const useNavigation = (
	isAuthenticated: boolean,
	isAdmin: boolean = false // если планируешь использовать роли
): AccountNavMainProps => {
	const mapArray: ArrayNavMainProps[] = [
		{
			title: 'Образовательные карты',
			url: '#',
			icon: MapIcon,
			isActive: false,
			isVisible: true,
			items: [
				{
					url: '/maps/panel',
					title: 'Панель управления',
					isVisible: isAuthenticated,
				},
				{
					url: '/maps/favorites',
					title: 'Избранные маршруты',
					isVisible: isAuthenticated,
				},
				{
					url: '/maps',
					title: 'Поиск маршрутов',
					isVisible: true,
				},
				{
					url: '/maps/library',
					title: 'Библиотека карт',
					isVisible: isAuthenticated,
				},
			],
		},
	];

	const accountArray: ArrayNavMainProps[] = [
		{
			title: 'Аккаунт',
			url: '#',
			icon: CircleUserIcon,
			isActive: false,
			isVisible: isAuthenticated,
			items: [
				{
					url: '/account/profile',
					title: 'Профиль',
					isVisible: true,
				},
				{
					url: '/account/settings',
					title: 'Настройки',
					isVisible: true,
				},
			],
		},
	];

	const generalArray: ArrayNavMainProps[] = [
		{
			title: 'Общее',
			url: '#',
			icon: HomeIcon,
			isActive: false,
			isVisible: true,
			items: [
				{
					url: '/',
					title: 'Главная',
					isVisible: true,
				},
				{
					url: '/about',
					title: 'О платформе',
					isVisible: true,
				},
				{
					url: '/help',
					title: 'Помощь',
					isVisible: true,
				},
			],
		},
	];

	const adminArray: ArrayNavMainProps[] = [
		{
			title: 'Администрирование',
			url: '#',
			icon: ShieldIcon,
			isActive: false,
			isVisible: isAdmin,
			items: [
				{
					url: '/admin/routes',
					title: 'Верификация маршрутов',
					isVisible: true,
				},
				{
					url: '/admin/users',
					title: 'Управление пользователями',
					isVisible: true,
				},
			],
		},
	];

	const navigation: AccountNavMainProps = {
		general: { label: 'Общее', items: generalArray },
		map: { label: 'Карты', items: mapArray },
		account: { label: 'Аккаунт', items: accountArray },
	};

	if (isAdmin) {
		navigation.admin = { label: 'Администрирование', items: adminArray };
	}

	return navigation;
};
