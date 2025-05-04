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
import { NodeDataShapeButton } from '@/features/node/editor/types/node';
import { WithButtonCommand } from '@/features/node/editor/utils/command/commands-impl';
import { nodeGetter } from '@/features/node/editor/utils/node-properties';

interface ICommandComponentButtonUrlProps {
	editedNode: Node<NodeDataShapeButton>;
}

export const CommandComponentButtonUrl = ({
	editedNode,
}: ICommandComponentButtonUrlProps) => {
	const [buttonUrl, setButtonUrl] = useState<string | null>(null);

	const handleButtonUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;

		const command = new WithButtonCommand(editedNode.id, newValue);

		command.execute();

		setButtonUrl(newValue);
	};

	useEffect(() => {
		setButtonUrl(nodeGetter.getBaseUrl(editedNode));
	}, [editedNode]);

	return (
		<div className="flex flex-col gap-2">
			<div className="flex items-center gap-2">
				<Label
					htmlFor="baseurl-property-id"
					className="text-foreground/80"
				>
					Свойства ссылки
				</Label>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger>
							<InfoIcon width={20} height={20} />
						</TooltipTrigger>
						<TooltipContent>
							<p>
								Установите ссылку (относительный или абсолютный
								адрес), по которой будет осуществляться переход
								при нажатии
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
					URL
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
						onChange={handleButtonUrlChange}
						value={buttonUrl ?? ''}
					/>
				</span>
			</div>
		</div>
	);
};
