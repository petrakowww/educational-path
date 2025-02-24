import { GraphNodeButtonLinkProps } from '@/shared/lib/node/component';
import {
	Label,
	Input,
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/shared/ui';
import { InfoIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Node } from 'reactflow';
import { GraphNodeComponent } from '@/shared/lib/node/component';
import { GraphNodeLinkEditor } from '@/shared/lib/node/editor';

interface ComponentBaseUrlProps {
	editedNode: Node<GraphNodeComponent<GraphNodeButtonLinkProps>>;
}

export const ComponentBaseUrl = (props: ComponentBaseUrlProps) => {
	const { editedNode } = props;
	const [baseUrl, setBaseUrl] = useState<string | undefined>(undefined);

	const handleFontBaseUrlChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const { value } = e.target;
		GraphNodeLinkEditor.changeBaseUrlLink(value);
		setBaseUrl(value);
	};

	useEffect(() => {
		setBaseUrl(GraphNodeLinkEditor.getDefaultBaseUrlLinkValue());
	}, [editedNode]);

	return (
		<div className="flex gap-2 flex-col">
			<div className="flex items-center gap-2">
				<Label
					htmlFor="baseurl-property-id"
					className="text-foreground/80"
				>
					Base url properties
				</Label>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger>
							<InfoIcon width={20} height={20} />
						</TooltipTrigger>
						<TooltipContent>
							<p>
								You set the link to which the click will be made
								(relative address and absolute)
							</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>

			<div className="flex gap-2 justify-between items-center">
				<Label
					className="uppercase flex-grow-0 text-foreground/80 text-base"
					htmlFor="baseurl-property-id"
				>
					url
				</Label>
				<span>
					<Input
						className="h-6 px-1.5 text-sm 
                    [&::-webkit-outer-spin-button]:appearance-none 
                    [&::-webkit-inner-spin-button]:appearance-none 
                    [&::-webkit-appearance]:m-0
                    text-left placeholder:text-left invalid:text-yellow-600 valid:text-primary"
						pattern="https://.*"
						type="url"
						id="baseurl-property-id"
						placeholder="https://example.com"
						onChange={handleFontBaseUrlChange}
						value={baseUrl || ''}
					/>
				</span>
			</div>
		</div>
	);
};
