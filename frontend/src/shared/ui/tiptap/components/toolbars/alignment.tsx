"use client";

import {
	AlignCenter,
	AlignJustify,
	AlignLeft,
	AlignRight,
	Check,
	ChevronDown,
} from "lucide-react";

import { Button } from "@/shared/ui";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/shared/ui";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/shared/ui";
import { useToolbar } from "../providers/toolbar-provider";

export const AlignmentTooolbar = () => {
	const { editor } = useToolbar();
	const handleAlign = (value: string) => {
		editor?.chain().focus().setTextAlign(value).run();
	};

	const isDisabled =
		(editor?.isActive("image") || editor?.isActive("video") || !editor) ??
		false;

	const currentTextAlign = () => {
		if (editor?.isActive({ textAlign: "left" })) {
			return "left";
		}
		if (editor?.isActive({ textAlign: "center" })) {
			return "center";
		}
		if (editor?.isActive({ textAlign: "right" })) {
			return "right";
		}
		if (editor?.isActive({ textAlign: "justify" })) {
			return "justify";
		}

		return "left";
	};

	const alignmentOptions = [
		{
			name: "По левому краю",
			value: "left",
			icon: <AlignLeft className="h-4 w-4" />,
		},
		{
			name: "По центру",
			value: "center",
			icon: <AlignCenter className="h-4 w-4" />,
		},
		{
			name: "По правому краю",
			value: "right",
			icon: <AlignRight className="h-4 w-4" />,
		},
		{
			name: "По ширине",
			value: "justify",
			icon: <AlignJustify className="h-4 w-4" />,
		},
	];

	const findIndex = (value: string) => {
		return alignmentOptions.findIndex((option) => option.value === value);
	};

	return (
		<DropdownMenu>
			<Tooltip>
				<TooltipTrigger asChild>
					<DropdownMenuTrigger disabled={isDisabled} asChild>
						<Button variant="ghost" size="sm" className="h-8 w-max font-normal">
							<span className="mr-2">
								{alignmentOptions[findIndex(currentTextAlign())].icon}
							</span>
							{alignmentOptions[findIndex(currentTextAlign())].name}
							<ChevronDown className="ml-2 h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
				</TooltipTrigger>
				<TooltipContent>Выравнивание текста</TooltipContent>
			</Tooltip>
			<DropdownMenuContent
				loop
				onCloseAutoFocus={(e) => {
					e.preventDefault();
				}}
			>
				<DropdownMenuGroup className=" w-40">
					{alignmentOptions.map((option, index) => (
						<DropdownMenuItem
							onSelect={() => {
								handleAlign(option.value);
							}}
							key={index}
						>
							<span className="mr-2">{option.icon}</span>
							{option.name}

							{option.value === currentTextAlign() && (
								<Check className="ml-auto h-4 w-4" />
							)}
						</DropdownMenuItem>
					))}
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
