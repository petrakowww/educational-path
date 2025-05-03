import { TPath } from '@/shared/edge/types/edge-data';
import { SplineIcon, CornerLeftDownIcon, MoveDownLeftIcon } from 'lucide-react'; // подставь подходящие

export const pathTypes: {
    icon: React.ReactNode;
    value: TPath;
    title: string;
}[] = [
    {
        icon: <SplineIcon className="w-4 h-4" />,
        value: 'bezier',
        title: 'Безье (кривая)',
    },
    {
        icon: <CornerLeftDownIcon className="w-4 h-4" />,
        value: 'smoothstep',
        title: 'Плавный шаг',
    },
    {
        icon: <MoveDownLeftIcon className="w-4 h-4" />,
        value: 'straight',
        title: 'Прямая',
    },
];