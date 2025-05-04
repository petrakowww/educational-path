"use client";

import { Button, type ButtonProps } from "@/shared/ui";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/shared/ui";
import { cn } from "@/shared/lib";
import { CornerUpLeft } from "lucide-react";
import React from "react";
import { useToolbar } from "../providers/toolbar-provider";

const UndoToolbar = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, onClick, children, ...props }, ref) => {
		const { editor } = useToolbar();

		return (
			<Tooltip>
				<TooltipTrigger asChild>
					<Button
						variant="ghost"
						size="icon"
						className={cn("h-8 w-8", className)}
						onClick={(e) => {
							editor?.chain().focus().undo().run();
							onClick?.(e);
						}}
						disabled={!editor?.can().chain().focus().undo().run()}
						ref={ref}
						{...props}
					>
						{children || <CornerUpLeft className="h-4 w-4" />}
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<span>Отменить</span>
					<span className="ml-1 text-xs text-gray-11">(ctrl + z)</span>
				</TooltipContent>
			</Tooltip>
		);
	},
);

UndoToolbar.displayName = "UndoToolbar";

export { UndoToolbar };
