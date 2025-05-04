"use client";

import { Image } from "lucide-react";
import React from "react";

import { Button, type ButtonProps } from '@/shared/ui';
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/shared/ui';
import { useToolbar } from "../providers/toolbar-provider";
import { cn } from "@/shared/lib";


const ImagePlaceholderToolbar = React.forwardRef<
	HTMLButtonElement,
	ButtonProps
>(({ className, onClick, children, ...props }, ref) => {
	const { editor } = useToolbar();
	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button
					variant="ghost"
					size="icon"
					className={cn(
						"h-8 w-8",
						editor?.isActive("image-placeholder") && "bg-accent",
						className,
					)}
					onClick={(e) => {
						editor?.chain().focus().insertImagePlaceholder().run();
						onClick?.(e);
					}}
					ref={ref}
					{...props}
				>
					{children || <Image className="h-4 w-4" />}
				</Button>
			</TooltipTrigger>
			<TooltipContent>
				<span>Изображение</span>
			</TooltipContent>
		</Tooltip>
	);
});

ImagePlaceholderToolbar.displayName = "ImagePlaceholderToolbar";

export { ImagePlaceholderToolbar };
