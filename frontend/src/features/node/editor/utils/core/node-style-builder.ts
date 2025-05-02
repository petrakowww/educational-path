import { DeepPartial } from '@/shared/lib/types/deep-partial';
import { NodeBuilder } from './node-builder';
import { NodeDataStyles } from '../../types/node';

export class NodeStyleBuilder {
	constructor(private readonly builder: NodeBuilder) {}

	private filterNulls<T extends object>(obj: T): Partial<T> {
		return Object.fromEntries(
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			Object.entries(obj).filter(([_, v]) => v != null)
		) as Partial<T>;
	}

	public buildStyles(): DeepPartial<NodeDataStyles> {
		const data = this.builder.getData();

		return {
			blockProps: data.blockProps,
			fontProps: data.fontProps,
		};
	}
}
