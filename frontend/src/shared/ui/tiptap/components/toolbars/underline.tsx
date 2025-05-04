'use client';

import { UnderlineIcon } from 'lucide-react';
import React from 'react';

import { Button, type ButtonProps } from '@/shared/ui';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/ui';
import { cn } from '@/shared/lib';
import { useToolbar } from '../providers/toolbar-provider';

const UnderlineToolbar = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, onClick, children, ...props }, ref) => {
		const { editor } = useToolbar();
		return (
			<Tooltip>
				<TooltipTrigger asChild>
					<Button
						variant="ghost"
						size="icon"
						className={cn(
							'h-8 w-8',
							editor?.isActive('underline') && 'bg-accent',
							className
						)}
						onClick={(e) => {
							editor?.chain().focus().toggleUnderline().run();
							onClick?.(e);
						}}
						disabled={
							!editor
								?.can()
								.chain()
								.focus()
								.toggleUnderline()
								.run()
						}
						ref={ref}
						{...props}
					>
						{children || <UnderlineIcon className="h-4 w-4" />}
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<span>Подчеркивать</span>
					<span className="ml-1 text-xs text-gray-11">(ctrl + u)</span>
				</TooltipContent>
			</Tooltip>
		);
	}
);

UnderlineToolbar.displayName = 'UnderlineToolbar';

export { UnderlineToolbar };
