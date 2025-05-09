import {
	Label,
	Input,
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
	Button,
} from '@/shared/ui';
import { InfoIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Node } from 'reactflow';
import { NodeDataShapeButton } from '@/features/node/editor/types/node';
import { NodeAccessor } from '@/features/node/editor/utils/node-properties';
import { nodeBuilderConfigButton } from '@/features/node/editor/config/node-builder-config';
import { WithButtonUrlCommand } from './utils';

interface ICommandComponentButtonUrlProps {
	node: Node<NodeDataShapeButton>;
}

export const CommandComponentButtonUrl = ({ node }: ICommandComponentButtonUrlProps) => {
	const [buttonUrl, setButtonUrl] = useState('');
	const [error, setError] = useState<string | null>(null);
	const [initialUrl, setInitialUrl] = useState('');

	useEffect(() => {
		const current = new NodeAccessor(node).get(
			'buttonProps.url',
			nodeBuilderConfigButton.buttonProps.url
		) ?? '';
		setButtonUrl(current);
		setInitialUrl(current);
	}, [node]);

	const handleSave = () => {
		if (!buttonUrl.trim()) {
			setError('Ссылка не может быть пустой');
			return;
		}

		if (!buttonUrl.startsWith('/')) {
			setError('Ссылка должна начинаться с / и вести внутри EduPath');
			return;
		}

		setError(null);
		setInitialUrl(buttonUrl);

		const command = new WithButtonUrlCommand(node.id, buttonUrl);
		command.execute();
	};

	return (
		<div className="flex flex-col gap-2">
			<div className="flex items-center gap-2">
				<Label htmlFor="baseurl-property-id" className="text-foreground/80">
					Ссылка перехода
				</Label>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger>
							<InfoIcon width={20} height={20} />
						</TooltipTrigger>
						<TooltipContent>
							<p>Укажите путь внутри платформы, например: /courses/1/topic/2</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>

			<div className="flex gap-2 items-center">
				<Input
					className="h-8 px-2 text-sm w-full"
					type="text"
					id="baseurl-property-id"
					placeholder="/courses/1/topic/2"
					value={buttonUrl}
					onChange={(e) => setButtonUrl(e.target.value)}
				/>
				<Button
					className="h-8 text-sm px-3"
					variant="secondary"
					onClick={handleSave}
					disabled={buttonUrl === initialUrl}
				>
					Сохранить
				</Button>
			</div>

			{error && (
				<p className="text-sm text-destructive mt-1">
					{error}
				</p>
			)}
		</div>
	);
};
