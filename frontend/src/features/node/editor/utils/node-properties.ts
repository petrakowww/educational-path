import get from 'lodash/get';
import { Node } from 'reactflow';

export class NodeAccessor<T> {
	constructor(private readonly node: Node<T>) {}

	get<P extends string, V = unknown>(path: P, fallback: V): V {
		return get(this.node.data, path, fallback) as V;
	}
}