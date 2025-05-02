export interface Command {
	execute(): void;
}

export abstract class CommandBase<T> implements Command {
	protected nodeId: string;
	protected newProperties: T;

	constructor(nodeId: string, newProperties: T) {
		this.nodeId = nodeId;
		this.newProperties = newProperties;
	}

	abstract execute(): void;
}
