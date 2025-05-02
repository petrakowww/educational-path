import { Node } from 'reactflow';
import {
	nodeBuilderConfig,
	nodeBuilderConfigLegend,
	nodeBuilderConfigToDo,
	nodeBuilderConfigTopic,
	nodeBuilderConfigLinks,
    nodeBuilderConfigButton,
} from '../config/node-builder-config';
import { NodeData } from '../types/node';

type DeepProperty<T, P extends string> = P extends `${infer Key}.${infer Rest}`
	? Key extends keyof T
		? DeepProperty<T[Key], Rest>
		: never
	: P extends keyof T
		? T[P]
		: never;

export class NodeProperties<T> {
	constructor() {}

	get<P extends string, V = DeepProperty<NodeData, P>>(
		editedNode: Node<T>,
		propertyPath: P,
		defaultValue: V
	): V {
		if (!editedNode) return defaultValue;

		const keys = propertyPath.split('.') as Array<keyof NodeData>;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		let result: any = editedNode.data as NodeData;

		for (const key of keys) {
			if (result && key in result) {
				result = result[key];
			} else {
				return defaultValue;
			}
		}

		return (result ?? defaultValue) as V;
	}
}

export class AllNodeProperties<T> extends NodeProperties<T> {
	getLabel(editedNode: Node<T>) {
		return this.get(
			editedNode,
			'labelProps.label',
			nodeBuilderConfig.labelProps.label
		);
	}

	getBackgroundColor(editedNode: Node<T>) {
		return this.get(
			editedNode,
			'blockProps.backgroundColor',
			nodeBuilderConfig.blockProps.backgroundColor
		);
	}

	getBorderColor(editedNode: Node<T>) {
		return this.get(
			editedNode,
			'blockProps.borderColor',
			nodeBuilderConfig.blockProps.borderColor
		);
	}

	getBorderRadius(editedNode: Node<T>) {
		return this.get(
			editedNode,
			'blockProps.borderRadius',
			nodeBuilderConfig.blockProps.borderRadius
		);
	}

	getBorderWidth(editedNode: Node<T>) {
		return this.get(
			editedNode,
			'blockProps.borderWidth',
			nodeBuilderConfig.blockProps.borderWidth
		);
	}

	getFontSize(editedNode: Node<T>) {
		return this.get(
			editedNode,
			'fontProps.fontSize',
			nodeBuilderConfig.fontProps.fontSize
		);
	}

	getFontWeight(editedNode: Node<T>) {
		return this.get(
			editedNode,
			'fontProps.fontWeight',
			nodeBuilderConfig.fontProps.fontWeight
		);
	}

	getFontColor(editedNode: Node<T>) {
		return this.get(
			editedNode,
			'fontProps.fontColor',
			nodeBuilderConfig.fontProps.fontColor
		);
	}

	getTextAlign(editedNode: Node<T>) {
		return this.get(
			editedNode,
			'fontProps.textAlign',
			nodeBuilderConfig.fontProps.textAlign
		);
	}

	getJustification(editedNode: Node<T>) {
		return this.get(
			editedNode,
			'fontProps.justification',
			nodeBuilderConfig.fontProps.justification
		);
	}

	getLinks(editedNode: Node<T>) {
		return this.get(
			editedNode,
			'linkProps.links',
			nodeBuilderConfigLinks.linkProps.links
		);
	}

	getTodos(editedNode: Node<T>) {
		return this.get(
			editedNode,
			'todoProps.todos',
			nodeBuilderConfigToDo.todoProps.todo
		);
	}

	getLegends(editedNode: Node<T>) {
		return this.get(
			editedNode,
			'legendProps.legends',
			nodeBuilderConfigLegend.legendProps.legends
		);
	}

	getTopicContent(editedNode: Node<T>) {
		return this.get(
			editedNode,
			'topicProps.topicContent',
			nodeBuilderConfigTopic.topicProps.topicContent
		);
	}

	getExtendedSettings(editedNode: Node<T>) {
		return this.get(
			editedNode,
			'extendedSettings',
			nodeBuilderConfigLinks.extendedSettings
		);
	}

    getBaseUrl(editedNode: Node<T>) {
		return this.get(
			editedNode,
			'buttonProps.url',
			nodeBuilderConfigButton.buttonProps.url
		);
	}

    getPadding(editedNode: Node<T>) {
		return this.get(
			editedNode,
			'blockProps.padding',
			nodeBuilderConfigButton.blockProps.padding
		);
	}
}

export const nodeGetter = new AllNodeProperties();
