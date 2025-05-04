"use client";

import { CornerUpRight } from "lucide-react";
import React from "react";

import { Button, type ButtonProps } from "@/shared/ui";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/shared/ui";
import { useToolbar } from "../providers/toolbar-provider";
import { cn } from "@/shared/lib";

const RedoToolbar = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
							editor?.chain().focus().redo().run();
							onClick?.(e);
						}}
						disabled={!editor?.can().chain().focus().redo().run()}
						ref={ref}
						{...props}
					>
						{children || <CornerUpRight className="h-4 w-4" />}
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<span>Вернуть</span>
					<span className="ml-1 text-xs text-gray-11">(ctrl + shift + z)</span>
				</TooltipContent>
			</Tooltip>
		);
	},
);

RedoToolbar.displayName = "RedoToolbar";

export { RedoToolbar };
