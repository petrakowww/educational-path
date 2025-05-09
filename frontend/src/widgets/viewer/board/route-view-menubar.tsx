'use client';

import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarTrigger,
	Separator,
} from '@/shared/ui';
import {
	ListOrderedIcon,
	GitBranchIcon,
	ShuffleIcon,
	AlignJustifyIcon,
} from 'lucide-react';

export const RouteViewMenubar = ({
	isLinearMode,
	onModeChange,
	view,
	onViewChange,
}: {
	isLinearMode: boolean;
	onModeChange: (val: 'linear' | 'mixed') => void;
	view: 'graph' | 'linear';
	onViewChange: (val: 'graph' | 'linear') => void;
}) => {
	return (
		<Menubar className="rounded-md border shadow-sm bg-background">
			<MenubarMenu>
				<MenubarTrigger className="flex items-center gap-1">
					<ShuffleIcon className="w-4 h-4" />
					Тип
				</MenubarTrigger>
				<MenubarContent align="start">
					<MenubarItem onClick={() => onModeChange('linear')}>
						<ListOrderedIcon className="w-4 h-4 mr-2" />
						Строго линейный
					</MenubarItem>
					<MenubarItem onClick={() => onModeChange('mixed')}>
						<ShuffleIcon className="w-4 h-4 mr-2" />
						Смешанный
					</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
			<Separator orientation='vertical' className='h-7'/>
			{/* Тип отображения */}
			<MenubarMenu>
				<MenubarTrigger className="flex items-center gap-1">
					<AlignJustifyIcon className="w-4 h-4" />
					Вид
				</MenubarTrigger>
				<MenubarContent align="start">
					<MenubarItem onClick={() => onViewChange('graph')}>
						<GitBranchIcon className="w-4 h-4 mr-2" />
						Графовое
					</MenubarItem>
					<MenubarItem onClick={() => onViewChange('linear')}>
						<ListOrderedIcon className="w-4 h-4 mr-2" />
						Линейное
					</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	);
};
