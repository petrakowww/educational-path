'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Separator,
} from '@/shared/ui';

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

const mockProgressData = [
  { date: 'Пн', выполнено: 2 },
  { date: 'Вт', выполнено: 5 },
  { date: 'Ср', выполнено: 3 },
  { date: 'Чт', выполнено: 6 },
  { date: 'Пт', выполнено: 4 },
  { date: 'Сб', выполнено: 1 },
  { date: 'Вс', выполнено: 0 },
];

export const WeeklyProgressChart = () => (
  <Card>
    <CardHeader>
      <CardTitle className="text-base">Прогресс за неделю</CardTitle>
      <Separator />
    </CardHeader>
    <CardContent>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={mockProgressData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis allowDecimals={false} />
          <Tooltip
            formatter={(value: number) => [`${value}`, 'Выполнено']}
            labelClassName="text-muted-foreground"
          />
          <Line
            type="monotone"
            dataKey="выполнено"
            stroke="#22c55e"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);
