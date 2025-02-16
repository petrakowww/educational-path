import { GraphNodeBaseEditor } from '@/shared/lib/node/editor';
import { cn } from '@/shared/lib';
import { ComponentEditorLabel } from '../elements/styles/component-label';
import { ComponentEditorBase } from '../elements/styles/component-base';
import { ComponentAutoSize } from '../elements/styles/component-autosize';
import { Button, Separator, Tabs, TabsList, TabsTrigger } from '@/shared/ui';
import { ComponentLayering } from '../elements/styles/component-layering';
import {
	hasAlignmentTextProps,
	hasBlockProps,
	hasFontProps,
} from '../../utils/has-style-properties';
import { hasLabel } from '../../utils/has-main-properties';
import { ComponentFontSize } from '../elements/styles/component-font-size';
import { ComponentFontColor } from '../elements/styles/component-font-color';
import { ComponentBlockBackground } from '../elements/styles/component-block-background';
import { ComponentBlockBorder } from '../elements/styles/component-block-border';
import { XIcon } from 'lucide-react';
import { ComponentFontWeight } from '../elements/styles/component-font-weigth';
import { getSelectedNode } from '@/shared/managers';
import { ComponentTextAlignment } from '../elements/styles/component-text-alignment';
import { TabsContent } from '@/shared/ui';
import { useAppSelector } from '@/shared/managers';
import { useMemo } from 'react';

export const AsideBarWidgetComponentEditor = () => {
	const isOpenMenu = useAppSelector((state) => state.aside_editor.isOpenMenu);
	const selectedNode = useAppSelector(getSelectedNode);

	const memoizedSelectedNode = useMemo(() => selectedNode, [selectedNode]);

	if (!isOpenMenu || !memoizedSelectedNode) {
		return null;
	}

	const handleCloseEditor = () => {
		GraphNodeBaseEditor.close();
	};

	const finalClassName = cn(
		isOpenMenu ? 'block' : 'hidden',
		'absolute z-[10000] top-0 right-0 h-full shadow-left',
		'p-4 px-3 bg-background overflow-y-auto'
	);

	return (
		<aside className={finalClassName}>
			<Tabs defaultValue="general">
				<TabsList className="grid w-full grid-flow-col gap-x-1">
					<TabsTrigger value="general">General</TabsTrigger>
					<TabsTrigger value="content">Content</TabsTrigger>
					<TabsTrigger value="settings">Settings</TabsTrigger>
					<Button
						className="h-full w-full p-0 m-0 aspect-square"
						onClick={handleCloseEditor}
						variant={'outline'}
					>
						<XIcon />
					</Button>
				</TabsList>
				<Separator className="mt-2 mb-3" />

				<TabsContent value="general">
					<div className="flex flex-col gap-6">
						{hasLabel(memoizedSelectedNode) && (
							<ComponentEditorLabel
								label={memoizedSelectedNode.data.label}
							/>
						)}

						<>
							<ComponentEditorBase
								xValue={GraphNodeBaseEditor.getXPosition()}
								yValue={GraphNodeBaseEditor.getYPosition()}
								wValue={GraphNodeBaseEditor.getWidth()}
								hValue={GraphNodeBaseEditor.getHeight()}
							/>
							<ComponentAutoSize />
							<Separator />
							<ComponentLayering />
							<Separator />
						</>

						{hasAlignmentTextProps(memoizedSelectedNode) && (
							<>
								<ComponentTextAlignment
									editedNode={memoizedSelectedNode}
								/>
								<Separator />
							</>
						)}

						{hasFontProps(memoizedSelectedNode) && (
							<>
								<ComponentFontSize editedNode={memoizedSelectedNode} />
								<Separator />
								<ComponentFontColor editedNode={memoizedSelectedNode} />
								<Separator />
								<ComponentFontWeight
									editedNode={memoizedSelectedNode}
								/>
								<Separator />
							</>
						)}
						{hasBlockProps(memoizedSelectedNode) && (
							<>
								<ComponentBlockBackground
									editedNode={memoizedSelectedNode}
								/>
								<Separator />
								<ComponentBlockBorder
									editedNode={memoizedSelectedNode}
								/>
								<Separator />
							</>
						)}
					</div>
				</TabsContent>

				<TabsContent value="settings"></TabsContent>
			</Tabs>
		</aside>
	);
};
