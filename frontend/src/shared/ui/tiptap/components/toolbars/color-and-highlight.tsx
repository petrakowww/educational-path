'use client';

import { Button } from '@/shared/ui';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui';
import { ScrollArea } from '@/shared/ui';
import { Separator } from '@/shared/ui';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/ui';
import type { Extension } from '@tiptap/core';
import type { ColorOptions } from '@tiptap/extension-color';
import type { HighlightOptions } from '@tiptap/extension-highlight';
import { Check, ChevronDown } from 'lucide-react';
import { useToolbar } from '../providers/toolbar-provider';
import { cn } from '@/shared/lib';

type TextStylingExtensions =
	| Extension<ColorOptions, any>
	| Extension<HighlightOptions, any>;

const TEXT_COLORS = [
	{ name: 'По умолчанию', color: 'var(--text-default)' },
	{ name: 'Серый', color: 'var(--text-gray)' },
	{ name: 'Коричневый', color: 'var(--text-brown)' },
	{ name: 'Оранжевый', color: 'var(--text-orange)' },
	{ name: 'Жёлтый', color: 'var(--text-yellow)' },
	{ name: 'Зелёный', color: 'var(--text-green)' },
	{ name: 'Синий', color: 'var(--text-blue)' },
	{ name: 'Фиолетовый', color: 'var(--text-purple)' },
	{ name: 'Розовый', color: 'var(--text-pink)' },
	{ name: 'Красный', color: 'var(--text-red)' },
];

const HIGHLIGHT_COLORS = [
	{ name: 'По умолчанию', color: 'var(--highlight-default)' },
	{ name: 'Серый', color: 'var(--highlight-gray)' },
	{ name: 'Коричневый', color: 'var(--highlight-brown)' },
	{ name: 'Оранжевый', color: 'var(--highlight-orange)' },
	{ name: 'Жёлтый', color: 'var(--highlight-yellow)' },
	{ name: 'Зелёный', color: 'var(--highlight-green)' },
	{ name: 'Синий', color: 'var(--highlight-blue)' },
	{ name: 'Фиолетовый', color: 'var(--highlight-purple)' },
	{ name: 'Розовый', color: 'var(--highlight-pink)' },
	{ name: 'Красный', color: 'var(--highlight-red)' },
];

interface ColorHighlightButtonProps {
	name: string;
	color: string;
	isActive: boolean;
	onClick: () => void;
	isHighlight?: boolean;
}

const ColorHighlightButton = ({
	name,
	color,
	isActive,
	onClick,
	isHighlight,
}: ColorHighlightButtonProps) => (
	<button
		onClick={onClick}
		className="flex w-full items-center justify-between rounded-sm px-2 py-1 text-sm hover:bg-gray-3"
		type="button"
	>
		<div className="flex items-center space-x-2">
			<div
				className="rounded-sm border px-1 py-px font-medium"
				style={isHighlight ? { backgroundColor: color } : { color }}
			>
				A
			</div>
			<span>{name}</span>
		</div>
		{isActive && <Check className="h-4 w-4" />}
	</button>
);

export const ColorHighlightToolbar = () => {
	const { editor } = useToolbar();

	const currentColor = editor?.getAttributes('textStyle').color;
	const currentHighlight = editor?.getAttributes('highlight').color;

	const handleSetColor = (color: string) => {
		editor
			?.chain()
			.focus()
			.setColor(color === currentColor ? '' : color)
			.run();
	};

	const handleSetHighlight = (color: string) => {
		editor
			?.chain()
			.focus()
			.setHighlight(
				color === currentHighlight ? { color: '' } : { color }
			)
			.run();
	};

	const isDisabled =
		!editor?.can().chain().setHighlight().run() ||
		!editor?.can().chain().setColor('').run();

	return (
		<Popover>
			<div className="relative h-full">
				<Tooltip>
					<TooltipTrigger asChild>
						<PopoverTrigger disabled={isDisabled} asChild>
							<Button
								variant="ghost"
								size="sm"
								style={{
									color: currentColor,
								}}
								className={cn('h-8 w-14 p-0 font-normal')}
							>
								<span className="text-md">A</span>
								<ChevronDown className="ml-2 h-4 w-4" />
							</Button>
						</PopoverTrigger>
					</TooltipTrigger>
					<TooltipContent>Цвет и выделение текста</TooltipContent>
				</Tooltip>

				<PopoverContent
					align="start"
					className="w-56 p-1 dark:bg-gray-2"
				>
					<ScrollArea className="max-h-80 overflow-y-auto pr-2">
						<div className="mb-2.5 mt-2 px-2 text-xs text-gray-11">
							Цвет текста
						</div>
						{TEXT_COLORS.map(({ name, color }) => (
							<ColorHighlightButton
								key={name}
								name={name}
								color={color}
								isActive={currentColor === color}
								onClick={() => handleSetColor(color)}
							/>
						))}

						<Separator className="my-3" />

						<div className="mb-2.5 w-full px-2 pr-3 text-xs text-gray-11">
							Фон текста
						</div>
						{HIGHLIGHT_COLORS.map(({ name, color }) => (
							<ColorHighlightButton
								key={name}
								name={name}
								color={color}
								isActive={currentHighlight === color}
								onClick={() => handleSetHighlight(color)}
								isHighlight
							/>
						))}
					</ScrollArea>
				</PopoverContent>
			</div>
		</Popover>
	);
};
