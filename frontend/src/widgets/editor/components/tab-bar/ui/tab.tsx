'use client';

import { Pen } from 'lucide-react';
import { X as CloseIcon, Pin } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib';

import React from 'react';
import { TabDataProps } from '../entities/tab-interface';
import { TabsTrigger } from '@/shared/ui';

const tabVariants = cva(
	'gap-4 py-1.5 relative tab-bar__item select-none cursor-grab active:cursor-grabbing inline-flex h-full items-center text-sm border-border rounded-md transition-colors',
	{
		variants: {
			variant: {
				default: 'text-secondary-foreground bg-secondary',
				active: 'data-[state=active]:bg-primary data-[state=active]:text-primary-foreground',
				pinned: '',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	}
);

interface TabProps extends VariantProps<typeof tabVariants> {
	className?: string;
	iconSize?: number;
	DecorativeIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	PinnedIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	tab: TabDataProps;
	onSelect?: (id: string) => void;
	onClose?: (id: string) => void;
	isActive: boolean;
	isDragging: boolean;
}

export const Tab = (props: TabProps) => {
	const {
		variant,
		className,
		iconSize = 18,
		DecorativeIcon = Pen,
		PinnedIcon = Pin,
		onSelect,
		onClose,
		tab,
		isActive,
		isDragging,
	} = props;

	const finalClassName = cn(
		tabVariants({ variant: isActive ? 'active' : variant || 'default' }),
		tab.isPinned && tabVariants({ variant: 'pinned' }),
		className,
		isDragging ? 'pointer-events-none' : 'group'
	);

	const handleOpen = () => {
		onSelect?.(tab.id);
	};

	const handleClose = (e: React.MouseEvent) => {
		e.stopPropagation();
		onClose?.(tab.id);
	};

	return (
		<TabsTrigger
			value={tab.id}
			className={finalClassName}
			onClick={handleOpen}
			onDragStart={handleOpen}
		>
			{!tab.isPinned && (
				<DecorativeIcon
					width={iconSize}
					height={iconSize}
					className="flex-shrink-0"
				/>
			)}
			<span>{tab.title}</span>

			{tab.isPinned ? (
				<PinnedIcon width={iconSize} height={iconSize} />
			) : (
				<span
					className={cn(
						'rounded-sm pointer-events-none group-hover:pointer-events-auto hover:!bg-destructive group-hover:text-destructive-foreground'
					)}
				>
					<CloseIcon
						className={cn(
							'cursor-pointer duration-200',
							isActive
								? 'text-primary-foreground'
								: 'text-secondary-foreground'
						)}
						onClick={handleClose}
						width={18}
						height={18}
					/>
				</span>
			)}
		</TabsTrigger>
	);
};
