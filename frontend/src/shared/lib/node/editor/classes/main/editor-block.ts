import {
	initBorderRadiusComponent,
	initBorderColorComponent,
	initPaddingComponent,
	initBorderWidthComponent,
} from '../../../component';
import { GraphNodeBaseEditor } from './editor-base';

export class GraphNodeBlockEditor extends GraphNodeBaseEditor {
	static changeBackgroundColor(color: string): void {
		this.updateProperty('blockProps', 'backgroundColor', color);
	}

	static changeBorderRadius(radius: number): void {
		this.updateProperty('blockProps', 'borderRadius', radius);
	}

	static changeBorderWidth(width: number | undefined): void {
		this.updateProperty('blockProps', 'borderWidth', width);
	}

	static changeBorderColor(borderColor: string | undefined): void {
		this.updateProperty('blockProps', 'borderColor', borderColor);
	}

	static changePadding(padding: number | undefined): void {
		this.updateProperty('blockProps', 'padding', padding);
	}

	static backgroundColorValue(): string | undefined {
		return this.getProperty(
			'blockProps',
			'backgroundColor',
			initBorderColorComponent.borderColor
		);
	}

	static paddingValue(): number | undefined {
		return this.getProperty(
			'blockProps',
			'padding',
			initPaddingComponent.padding
		);
	}

	static borderRadiusValue(): number {
		return this.getProperty(
			'blockProps',
			'borderRadius',
			initBorderRadiusComponent.borderRadius
		);
	}

	static borderWidthValue(): number | undefined {
		return this.getProperty(
			'blockProps',
			'borderWidth',
			initBorderWidthComponent.borderWidth
		);
	}

	static borderColorValue(): string | undefined {
		return this.getProperty(
			'blockProps',
			'borderColor',
			initBorderColorComponent.borderColor
		);
	}
}
