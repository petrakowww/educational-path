import { GraphNodeBaseEditor } from '@/shared/lib/node/editor';
import { cn } from '@/shared/lib';
import { ComponentEditorLabel } from '../elements/component-label/component-label';
import { ComponentEditorBase } from '../elements/component-specifications/component-specifications';
import { ComponentAutoSize } from '../elements/component-auto-size/component-autosize';
import { Button, Separator, Tabs, TabsList, TabsTrigger } from '@/shared/ui';
import { ComponentLayering } from '../elements/component-layering/component-layering';
import { ComponentFontSize } from '../elements/component-font/component-font-size';
import { ComponentFontColor } from '../elements/component-font/component-font-color';
import { ComponentBlockBackground } from '../elements/component-block/component-block-background';
import { XIcon } from 'lucide-react';
import { ComponentFontWeight } from '../elements/component-font/component-font-weigth';
import { getSelectedNode } from '@/shared/managers';
import { TabsContent } from '@/shared/ui';
import { useAppSelector } from '@/shared/managers';
import { useMemo } from 'react';
import {
	hasFontColorProps,
	hasFontProps,
	hasFontSizeProps,
	hasFontWeightProps,
} from '../../utils/has-font-properties';
import {
	hasBlockBackgroundColorProps,
	hasBlockBorderColorProps,
	hasBlockBorderRadiusProps,
	hasBlockBorderWidthProps,
	hasBlockPaddingProps,
	hasBlockProps,
} from '../../utils/has-block-properties';
import {
	hasAlignmentProps,
	hasHorizontalProps,
	hasVerticalProps,
} from '../../utils/has-align-properties';
import { ComponentBorderRadius } from '../elements/component-block/component-block-border-radius';
import { ComponentBorderColor } from '../elements/component-block/component-block-border-color';
import { ComponentBorderWidth } from '../elements/component-block/component-block-border-thickness';
import { ComponentTextAlignmentVertical } from '../elements/component-align/component-align-vertical';
import { ComponentTextAlignmentHorizontal } from '../elements/component-align/component-align-horizontal';
import { ComponentResetStyles } from '../elements/component-settings/component-reset-styles';
import {
	hasLegendTopicProps,
	hasTopicProps,
} from '../../utils/has-topic-properties';
import { ComponentChangeTopicType } from '../elements/component-settings/component-change-type';
import { ComponentDestroyNode } from '../elements/component-settings/component-destroy-node';
import { ComponentBlockPadding } from '../elements/component-block/component-block-padding';
import {
	hasLabelProps,
	hasLabelContentProps,
} from '../../utils/had-label-properties';
import { hasBaseUrlProps, hasLinkProps } from '../../utils/has-link-properties';
import { ComponentBaseUrl } from '../elements/component-url/component-base-url';
import { hasLegendProps } from '../../utils/has-legend-properties';
import { ComponentLegend } from '../elements/component-legend/component-legend';
import { ComponentTopicLegend } from '../elements/component-legend/component-topic-legend';

export const AsideBarWidgetComponentEditor = () => {
	const isOpenMenu = useAppSelector((state) => state.aside_editor.isOpenMenu);
	const selectedNode = useAppSelector(getSelectedNode<never>);

	const memoizedSelectedNode = useMemo(() => selectedNode, [selectedNode]);

	if (!isOpenMenu || !memoizedSelectedNode) {
		return null;
	}

	const handleCloseEditor = () => {
		GraphNodeBaseEditor.close();
	};

	const finalClassName = cn(
		isOpenMenu ? 'block' : 'hidden',
		'absolute top-0 right-0 h-full shadow-left',
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
						{hasLabelProps(memoizedSelectedNode) && (
							<>
								{hasLabelContentProps(memoizedSelectedNode) && (
									<ComponentEditorLabel
										editedNode={memoizedSelectedNode}
									/>
								)}
							</>
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

						{hasAlignmentProps(memoizedSelectedNode) && (
							<>
								{hasHorizontalProps(memoizedSelectedNode) && (
									<ComponentTextAlignmentHorizontal
										editedNode={memoizedSelectedNode}
									/>
								)}
								{hasVerticalProps(memoizedSelectedNode) && (
									<ComponentTextAlignmentVertical
										editedNode={memoizedSelectedNode}
									/>
								)}
								<Separator />
							</>
						)}

						{hasFontProps(memoizedSelectedNode) && (
							<>
								{hasFontSizeProps(memoizedSelectedNode) && (
									<>
										<ComponentFontSize
											editedNode={memoizedSelectedNode}
										/>
										<Separator />
									</>
								)}
								{hasFontColorProps(memoizedSelectedNode) && (
									<>
										<ComponentFontColor
											editedNode={memoizedSelectedNode}
										/>
										<Separator />
									</>
								)}
								{hasFontWeightProps(memoizedSelectedNode) && (
									<>
										<ComponentFontWeight
											editedNode={memoizedSelectedNode}
										/>
										<Separator />
									</>
								)}
							</>
						)}
						{hasBlockProps(memoizedSelectedNode) && (
							<>
								{hasBlockBackgroundColorProps(
									memoizedSelectedNode
								) && (
									<>
										<ComponentBlockBackground
											editedNode={memoizedSelectedNode}
										/>
										<Separator />
									</>
								)}

								{hasBlockBorderRadiusProps(
									memoizedSelectedNode
								) && (
									<ComponentBorderRadius
										editedNode={memoizedSelectedNode}
									/>
								)}

								{hasBlockBorderWidthProps(
									memoizedSelectedNode
								) && (
									<ComponentBorderWidth
										editedNode={memoizedSelectedNode}
									/>
								)}

								{hasBlockBorderColorProps(
									memoizedSelectedNode
								) && (
									<ComponentBorderColor
										editedNode={memoizedSelectedNode}
									/>
								)}

								{hasBlockPaddingProps(memoizedSelectedNode) && (
									<ComponentBlockPadding
										editedNode={memoizedSelectedNode}
									/>
								)}

								{(hasBlockBorderRadiusProps(
									memoizedSelectedNode
								) ||
									hasBlockBorderWidthProps(
										memoizedSelectedNode
									) ||
									hasBlockBorderColorProps(
										memoizedSelectedNode
									)) && <Separator />}
							</>
						)}
					</div>
				</TabsContent>

				<TabsContent value="content">
					<div className="fkex flex-col gap-6">
						{hasLinkProps(memoizedSelectedNode) && (
							<>
								{hasBaseUrlProps(memoizedSelectedNode) && (
									<ComponentBaseUrl
										editedNode={memoizedSelectedNode}
									/>
								)}
							</>
						)}
						{hasLegendProps(memoizedSelectedNode) && (
							<>
								<ComponentLegend
									editedNode={memoizedSelectedNode}
								/>
							</>
						)}
						{hasTopicProps(memoizedSelectedNode) && (
							<>
								{hasLegendTopicProps(memoizedSelectedNode) && (
									<>
										<ComponentTopicLegend
											editedNode={memoizedSelectedNode}
										/>
									</>
								)}
							</>
						)}
					</div>
				</TabsContent>

				<TabsContent value="settings">
					<div className="flex flex-col gap-6">
						{hasTopicProps(memoizedSelectedNode) && (
							<ComponentChangeTopicType
								editedNode={memoizedSelectedNode}
							/>
						)}
						<ComponentResetStyles
							editedNode={memoizedSelectedNode}
						/>
						<ComponentDestroyNode
							editedNode={memoizedSelectedNode}
						/>
					</div>
				</TabsContent>
			</Tabs>
		</aside>
	);
};
