'use client';

import {
	ContextMenu,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuPortal,
	ContextMenuSeparator,
	ContextMenuTrigger,
} from '@/shared/ui';
import { Trash2, Pin, PinOff, Focus, CircleX, CopyMinus } from 'lucide-react';
import { TabDataProps } from '../entities/tab-interface';

interface TabContextMenuProps {
	tab: TabDataProps;
	onClose?: (id: string, onNoTabsLeft?: () => void) => void;
	onCloseOther?: (id: string) => void;
	onCloseAll?: () => void;
	onPin?: (id: string, isPin: boolean) => void;
	onFocus?: (id: string) => void;
	children: React.ReactNode;
	className?: string;
	sizeIcon?: number;
}

export const TabContextMenu = ({
	tab,
	onClose,
	onCloseOther,
	onCloseAll,
	onPin,
	onFocus,
	sizeIcon = 16,
	children,
	className,
}: TabContextMenuProps) => {
	return (
		<ContextMenu>
			<ContextMenuTrigger className={className}>
				{children}
			</ContextMenuTrigger>
			<ContextMenuPortal>
				<ContextMenuContent className="rounded-lg z-[11000]">
					<ContextMenuItem
						className="flex gap-3 rounded-lg cursor-pointer"
						onClick={() => onFocus?.(tab.id)}
					>
						<Focus size={sizeIcon} />
						Перейти к вкладке
					</ContextMenuItem>

					<ContextMenuItem
						className="flex gap-3 rounded-lg cursor-pointer"
						onClick={() => onPin?.(tab.id, !tab.isPinned)}
					>
						{tab.isPinned ? (
							<PinOff size={sizeIcon} />
						) : (
							<Pin size={sizeIcon} />
						)}
						{tab.isPinned ? 'Открепить' : 'Закрепить'}
					</ContextMenuItem>

					<ContextMenuSeparator className="border-t border-border my-1" />

					<ContextMenuItem
						className="flex gap-3 rounded-lg cursor-pointer"
						onClick={() => onClose?.(tab.id)}
						disabled={tab.isPinned}
					>
						<Trash2 size={sizeIcon} />
						Закрыть вкладку
					</ContextMenuItem>

					<ContextMenuItem
						className="flex gap-3 rounded-lg cursor-pointer"
						onClick={() => onCloseOther?.(tab.id)}
					>
						<CircleX size={sizeIcon} />
						Закрыть другие вкладки
					</ContextMenuItem>

					<ContextMenuItem
						className="flex gap-3 rounded-lg cursor-pointer"
						onClick={() => onCloseAll?.()}
					>
						<CopyMinus size={sizeIcon} />
						Закрыть все вкладки
					</ContextMenuItem>
				</ContextMenuContent>
			</ContextMenuPortal>
		</ContextMenu>
	);
};
