import { GraphNodeBaseEditor } from './editor-base';
import {
	initFontSizeComponent,
	initFontWeightComponent,
	initFontColorComponent,
} from '@/shared/lib/node/component';

export class GraphNodeFontEditor extends GraphNodeBaseEditor {
	static changeFontSize(size: number | undefined): void {
		this.updateProperty('fontProps', 'fontSize', size);
	}

	static changeTextColor(color: string): void {
		this.updateProperty('fontProps', 'fontColor', color);
	}

	static changeTextWeight(weight: number): void {
		this.updateProperty('fontProps', 'fontWeight', weight);
	}

	static sizeValue(): number | undefined {
		return this.getProperty(
			'fontProps',
			'fontSize',
			initFontSizeComponent.fontSize
		);
	}

	static colorValue(): string | undefined {
		return this.getProperty(
			'fontProps',
			'fontColor',
			initFontColorComponent.fontColor
		);
	}

	static weightValue(): number {
		return this.getProperty(
			'fontProps',
			'fontWeight',
			initFontWeightComponent.fontWeight
		);
	}
}
