import { Separator } from '@/shared/ui';
import { ComponentLayering } from '../parts/unique/layering';
import { ComponentNodeCharacteristics } from '../parts/unique/specifications';
import { Node } from 'reactflow';
import { ComponentAutoSizeNode } from '../parts/unique/autosize';
import { NodeComponentBuilder } from '@/features/node/editor/utils/core/node-component-builder';
import { Fragment } from 'react';
import { LabelEditorPart } from '../parts/unique/label';

interface IBaseSettings {
	node: Node;
	nodeHasLabel?: boolean;
	startChildrenComponent?: React.ReactNode;
	endChildrenComponent?: React.ReactNode;
}

export const BaseSettings = (props: IBaseSettings) => {
	const {
		startChildrenComponent,
		endChildrenComponent,
		node,
		nodeHasLabel = false,
	} = props;

	const builder = new NodeComponentBuilder(node);
	const dynamicComponents = builder.getComponents();

	return (
		<div className="flex flex-col gap-6">
			{startChildrenComponent}
			{nodeHasLabel && <LabelEditorPart node={node} />}

			<ComponentNodeCharacteristics />

			<ComponentAutoSizeNode editedNode={node} />

			<Separator />
			<ComponentLayering />
			<Separator />

			{dynamicComponents.map((Component, idx) => (
				<Fragment key={idx}>
					<Component />
					{idx !== dynamicComponents.length - 1 &&
						!endChildrenComponent && <Separator />}
				</Fragment>
			))}
			{endChildrenComponent}
		</div>
	);
};
