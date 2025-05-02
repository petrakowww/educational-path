import { Node, NodeProps } from "reactflow";
import { BaseNodeDeleter, NodeDeleter } from "./node-deleter";

export class NodeDeleterFactory {
	static createDeleter(node: Node<unknown> | NodeProps<unknown>): NodeDeleter {
		return new BaseNodeDeleter(node.id);
	}
}
