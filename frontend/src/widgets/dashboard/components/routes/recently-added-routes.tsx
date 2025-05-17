'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Button,
} from '@/shared/ui';
import Link from 'next/link';
import { ClockIcon } from 'lucide-react';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';

type MockRoute = {
  id: string;
  title: string;
  description?: string;
  createdAt: string;
};

const mockRecentlyAddedRoutes: MockRoute[] = [
  {
    id: '1',
    title: 'Машинное обучение с нуля',
    description: 'Введение в ML и обучение моделей.',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Системное программирование',
    description: 'Понимание работы ОС, компиляторов и системных вызовов.',
    createdAt: '2024-12-25T15:00:00Z',
  },
  {
    id: '3',
    title: 'Введение в UX-дизайн',
    description: 'Основы проектирования пользовательского опыта.',
    createdAt: '2025-04-01T10:00:00Z',
  },
];

export const RecentlyAddedRoutes = () => {
  const routes = mockRecentlyAddedRoutes;

  const isNew = (createdAt: string) => {
    const created = new Date(createdAt).getTime();
    const now = Date.now();
    return now - created < 7 * 24 * 60 * 60 * 1000;
  };

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <ClockIcon className="size-5 text-blue-500" />
          Недавно добавленные
        </h2>
        <Button variant="link" asChild>
          <Link href="/maps/search?sort=new">Смотреть все</Link>
        </Button>
      </div>

      {routes.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {routes.map((route) => (
            <Card key={route.id} className="flex flex-col justify-between h-full">
              <CardHeader className="flex-grow space-y-1">
                <div className="flex items-start justify-between">
                  <CardTitle title={route.title} className="line-clamp-1 text-base">
                    {route.title}
                  </CardTitle>
                  {isNew(route.createdAt) && (
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded whitespace-nowrap">
                      Новинка
                    </span>
                  )}
                </div>
                <CardDescription className="line-clamp-3 text-sm text-muted-foreground">
                  {route.description || 'Без описания'}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between pt-2 border-t">
                <div className="text-xs text-muted-foreground">
                  Добавлено{' '}
                  {formatDistanceToNow(parseISO(route.createdAt), {
                    addSuffix: true,
                    locale: ru,
                  })}
                </div>
                <Button size="sm" variant="secondary" asChild>
                  <Link href={`/maps/${route.id}`}>Открыть</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-muted-foreground text-sm border border-border p-4 rounded-md">
          Пока нет недавно добавленных маршрутов. Попробуйте позже или создайте свой первый маршрут.
        </div>
      )}
    </section>
  );
};
