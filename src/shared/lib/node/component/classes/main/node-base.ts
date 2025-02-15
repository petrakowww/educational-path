export abstract class GraphNodeComponent {
	componentType: string;

	constructor() {
		this.componentType = (this.constructor as FunctionConstructor).name;
	}
}
