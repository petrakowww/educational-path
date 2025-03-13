export abstract class GraphNodeComponent<TProps> {
	componentType: string;
	dataTProps: TProps;
	constructor(dataTProps: TProps) {
		this.componentType = (this.constructor as FunctionConstructor).name;
		this.dataTProps = dataTProps;
	}
}
