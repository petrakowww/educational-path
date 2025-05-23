'use client';

import {
  CompassIcon,
  PlusCircleIcon,
  MapIcon,
  PlayIcon,
  ClockIcon,
  StarIcon,
} from 'lucide-react';
import { ActionCard } from './components/action-card';

const actions = [
  {
    title: 'Поиск маршрутов',
    description: 'Найдите подходящий маршрут среди созданных пользователями.',
    href: '/maps',
    icon: CompassIcon,
    colorClass: 'bg-blue-500',
  },
  {
    title: 'Создать маршрут',
    description: 'Начните проектирование нового маршрута с нуля.',
    href: '/maps/panel',
    icon: PlusCircleIcon,
    colorClass: 'bg-green-500',
  },
  {
    title: 'Ваши маршруты',
    description: 'Посмотрите список всех маршрутов, созданных вами.',
    href: '/maps/panel',
    icon: MapIcon,
    colorClass: 'bg-indigo-500',
  },
  {
    title: 'Проходите сейчас',
    description: 'Маршруты, которые вы сейчас изучаете.',
    href: '/account/courses',
    icon: PlayIcon,
    colorClass: 'bg-purple-500',
  },
  {
    title: 'Последний маршрут',
    description: 'Вернитесь к последнему маршруту, с которым вы работали.',
    href: '/maps/last',
    icon: ClockIcon,
    colorClass: 'bg-yellow-500',
  },
  {
    title: 'Избранное',
    description: 'Последний добавленный в избранное маршрут.',
    href: '/account/favorites',
    icon: StarIcon,
    colorClass: 'bg-pink-500',
  },
];

export const DashboardQuickActions = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {actions.map((action) => (
        <ActionCard key={action.title} {...action} />
      ))}
    </div>
  );
};
