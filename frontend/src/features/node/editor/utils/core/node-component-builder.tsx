import { CommandComponentTextAlignment } from '../../components/aside/components/parts/styles/align-horizontal';
import { CommandComponentJustify } from '../../components/aside/components/parts/styles/align-vertical';
import { CommandComponentBlockBackground } from '../../components/aside/components/parts/styles/block-background';
import { CommandComponentBlockBorderColor } from '../../components/aside/components/parts/styles/block-border-color';
import { CommandComponentBlockBorderRadius } from '../../components/aside/components/parts/styles/block-border-radius';
import { CommandComponentBlockBorderWidth } from '../../components/aside/components/parts/styles/block-border-width';
import { CommandComponentPadding } from '../../components/aside/components/parts/styles/block-padding';
import { CommandComponentFontColor } from '../../components/aside/components/parts/styles/font-color';
import { CommandComponentFontSize } from '../../components/aside/components/parts/styles/font-size';
import { CommandComponentFontWeight } from '../../components/aside/components/parts/styles/font-weigth';
import { NodeBuilderConfig } from '../../config/node-builder-config';
import { Node } from 'reactflow';

type ComponentRule = {
	condition: (config: NodeBuilderConfig) => boolean;
	component: (node: Node) => React.FC;
	order: number;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function hasKey<T extends object>(obj: T | undefined, key: keyof any): boolean {
	return !!obj && key in obj;
}

export const componentRules: ComponentRule[] = [
	{
		condition: (config) => hasKey(config.fontProps, 'textAlign'),
		component: (node) => () => (
			<CommandComponentTextAlignment editedNode={node} />
		),
		order: 5,
	},
	{
		condition: (config) => hasKey(config.fontProps, 'justification'),
		component: (node) => () => (
			<CommandComponentJustify editedNode={node} />
		),
		order: 10,
	},
	{
		condition: (config) => hasKey(config.blockProps, 'backgroundColor'),
		component: (node) => () => (
			<CommandComponentBlockBackground editedNode={node} />
		),
		order: 15,
	},
	{
		condition: (config) => hasKey(config.blockProps, 'padding'),
		component: (node) => () => {
			const minValue = 1;
			const maxValue = 10;
			return (
				<CommandComponentPadding
					editedNode={node}
					minValue={minValue}
					maxValue={maxValue}
				/>
			);
		},
		order: 20,
	},
	{
		condition: (config) => hasKey(config.blockProps, 'borderColor'),
		component: (node) => () => (
			<CommandComponentBlockBorderColor editedNode={node} />
		),
		order: 30,
	},
	{
		condition: (config) => hasKey(config.blockProps, 'borderRadius'),
		component: (node) => () => (
			<CommandComponentBlockBorderRadius editedNode={node} />
		),
		order: 40,
	},
	{
		condition: (config) => hasKey(config.blockProps, 'borderWidth'),
		component: (node) => () => {
			const minValue = 1;
			const maxValue = 10;
			return (
				<CommandComponentBlockBorderWidth
					editedNode={node}
					minValue={minValue}
					maxValue={maxValue}
				/>
			);
		},
		order: 50,
	},
	{
		condition: (config) => hasKey(config.fontProps, 'fontColor'),
		component: (node) => () => (
			<CommandComponentFontColor editedNode={node} />
		),
		order: 60,
	},
	{
		condition: (config) => hasKey(config.fontProps, 'fontWeight'),
		component: (node) => () => (
			<CommandComponentFontWeight editedNode={node} />
		),
		order: 70,
	},
	{
		condition: (config) => hasKey(config.fontProps, 'fontSize'),
		component: (node) => () => {
			const minValue = 1;
			const maxValue = 100;
			return (
				<CommandComponentFontSize
					editedNode={node}
					minValue={minValue}
					maxValue={maxValue}
				/>
			);
		},
		order: 80,
	},
];

export class NodeComponentBuilder {
	private components: { component: React.FC; order: number }[] = [];

	constructor(private readonly node: Node) {
		this.init();
	}

	private init() {
		const config = this.node.data;

		this.components = componentRules
			.filter((rule) => rule.condition(config))
			.map((rule) => ({
				component: rule.component(this.node),
				order: rule.order,
			}));
	}

	public getComponents(): React.FC[] {
		return this.components
			.sort((a, b) => a.order - b.order)
			.map((entry) => entry.component);
	}
}
