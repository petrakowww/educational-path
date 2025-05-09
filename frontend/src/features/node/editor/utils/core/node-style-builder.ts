import { DeepPartial } from '@/shared/lib/types/deep-partial';
import { NodeBuilder } from './node-builder';
import { NodeMain } from '../../types/node';

export class NodeStyleBuilder {
	constructor(private readonly builder: NodeBuilder) {}

	public buildStyles(): DeepPartial<NodeMain>['meta'] {
		const data = this.builder.getData();
		return data.meta;
	}
}
