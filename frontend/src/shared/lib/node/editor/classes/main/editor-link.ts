import { initUrlAddressComponent } from '../../../component/classes/objects/object-link';
import { GraphNodeBaseEditor } from './editor-base';

export class GraphNodeLinkEditor extends GraphNodeBaseEditor {
	static changeBaseUrlLink(value: string): void {
		this.updateProperty('linkProps', 'url', value);
	}

	static getDefaultBaseUrlLinkValue(): string | undefined {
		return this.getProperty(
			'linkProps',
			'url',
			initUrlAddressComponent.url
		);
	}
}
