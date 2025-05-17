'use client';

import { Card, CardContent, CardHeader, CardTitle, Button } from '@/shared/ui';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/shared/lib';

interface ActionCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  colorClass: string;
}

export const ActionCard = ({
  title,
  description,
  href,
  icon: Icon,
  colorClass,
}: ActionCardProps) => {
  return (
    <Card className={cn('flex flex-col', colorClass)}>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-white">
          <Icon className="w-5 h-5" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col flex-1 justify-between text-white">
        <div className="mb-4">
          <p className="text-sm opacity-90">{description}</p>
        </div>
        <Button asChild variant="secondary" className="self-start">
          <Link href={href}>Перейти</Link>
        </Button>
      </CardContent>
    </Card>
  );
};
