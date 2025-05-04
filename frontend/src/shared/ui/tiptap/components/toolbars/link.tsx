"use client";

import { PopoverClose } from "@radix-ui/react-popover";
import { LinkIcon, Trash2, X } from "lucide-react";

import React, { type FormEvent } from "react";

import { Button, type ButtonProps } from "@/shared/ui";
import { Input } from "@/shared/ui";
import { Label } from "@/shared/ui";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/shared/ui";
import { cn } from "@/shared/lib";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/shared/ui";
import { useToolbar } from "../providers/toolbar-provider";
import { getUrlFromString } from "@/shared/lib/utils/url";

const LinkToolbar = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, ...props }, ref) => {
	  const { editor } = useToolbar();
	  const [link, setLink] = React.useState("");
	  const [error, setError] = React.useState<string | null>(null);
  
	  const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		const url = getUrlFromString(link);
		if (!url) {
		  setError("Введите корректную ссылку.");
		  return;
		}
		editor?.chain().focus().setLink({ href: url }).run();
		setError(null);
	  };
  
	  React.useEffect(() => {
		setLink(editor?.getAttributes("link").href || "");
		setError(null);
	  }, [editor]);
  
	  return (
		<Popover>
		  <Tooltip>
			<TooltipTrigger asChild>
			  <PopoverTrigger
				disabled={!editor?.can().chain().setLink({ href: "" }).run()}
				asChild
			  >
				<Button
				  variant="ghost"
				  size="sm"
				  className={cn(
					"h-8 w-max px-3 font-normal",
					editor?.isActive("link") && "bg-accent",
					className,
				  )}
				  ref={ref}
				  {...props}
				>
				  <LinkIcon/>
				</Button>
			  </PopoverTrigger>
			</TooltipTrigger>
			<TooltipContent>
			  <span>Ссылка</span>
			</TooltipContent>
		  </Tooltip>
  
		  <PopoverContent
			onCloseAutoFocus={(e) => {
			  e.preventDefault();
			}}
			asChild
			className="relative px-3 py-2.5"
		  >
			<div className="relative">
			  <PopoverClose className="absolute right-3 top-3">
				<X className="h-4 w-4" />
			  </PopoverClose>
			  <form onSubmit={handleSubmit}>
				<Label className="font-semibold">Ссылка</Label>
				<p className="text-sm text-secondary-foreground/80 text-gray-11 mt-1">
				  Прикрепите ссылку к тексту
				</p>
				<div className="mt-3 flex flex-col items-end justify-end gap-3">
				  <Input
					value={link}
					onChange={(e) => {
					  setLink(e.target.value);
					  if (error) setError(null);
					}}
					className="w-full"
					placeholder="https://example.com"
				  />
				  {error && (
					<p className="text-sm text-destructive self-start">{error}</p>
				  )}
				  <div className="flex items-center gap-3">
					{editor?.getAttributes("link").href && (
					  <Button
						type="reset"
						size="sm"
						className="h-8 text-gray-11 text-destructive-foreground"
						variant="destructive"
						onClick={() => {
						  editor?.chain().focus().unsetLink().run();
						  setLink("");
						  setError(null);
						}}
					  >
						<Trash2 className="mr-2 h-4 w-4" />
						Удалить
					  </Button>
					)}
					<Button size="sm" className="h-8">
					  {editor?.getAttributes("link").href ? "Обновить" : "Добавить"}
					</Button>
				  </div>
				</div>
			  </form>
			</div>
		  </PopoverContent>
		</Popover>
	  );
	}
  );
  

LinkToolbar.displayName = "LinkToolbar";

export { LinkToolbar };
