import { useAppSelector } from '@/shared/lib';
import { GraphNodeBaseEditor } from '@/shared/lib/node/editor';
import { cn } from '@/shared/lib';
import { ComponentEditorLabel } from '../elements/component-label';
import { ComponentEditorBase } from '../elements/component-base';
import { ComponentAutoSize } from '../elements/component-autosize';
import { Button, Separator } from '@/shared/ui';
import { ComponentLayering } from '../elements/component-layering';
import {
	hasAlignmentTextProps,
	hasBlockProps,
	hasFontProps,
	hasLabel,
} from '../../utils/has-property';
import { ComponentFontSize } from '../elements/component-font-size';
import { ComponentFontColor } from '../elements/component-font-color';
import { ComponentBlockBackground } from '../elements/component-block-background';
import { ComponentBlockBorder } from '../elements/component-block-border';
import { XIcon } from 'lucide-react';
import { ComponentFontWeight } from '../elements/component-font-weigth';
import { getSelectedNode } from '@/shared/managers';
import { ComponentTextAlignment } from '../elements/component-text-alignment';

export const AsideBarWidgetComponentEditor = () => {
	const isOpenMenu = useAppSelector((state) => state.aside_editor.isOpenMenu);
	const selectedNode = useAppSelector(getSelectedNode);
	if (!isOpenMenu || !selectedNode) {
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
			<div className="flex p-0 items-center mb-5">
				<span className="text-sm font-medium text-foreground/80">
					Edit menu
				</span>
				<Button
					className="p-0 h-5 w-5 ml-auto"
					onClick={handleCloseEditor}
				>
					<XIcon />
				</Button>
			</div>

			<div className="flex flex-col gap-6">
				{hasLabel(selectedNode) && (
					<ComponentEditorLabel label={selectedNode.data.label} />
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

				{hasAlignmentTextProps(selectedNode) && (
					<>
						<ComponentTextAlignment />
						<Separator />
					</>
				)}

				{hasFontProps(selectedNode) && (
					<>
						<ComponentFontSize />
						<Separator />
						<ComponentFontColor />
						<Separator />
						<ComponentFontWeight />
						<Separator />
					</>
				)}
				{hasBlockProps(selectedNode) && (
					<>
						<ComponentBlockBackground />
						<Separator />
						<ComponentBlockBorder />
						<Separator />
					</>
				)}
			</div>
		</aside>
	);
};
