import { Node } from 'reactflow';
import { ComponentDestroyNode } from '../parts/unique/destroy-node';
import { ComponentResetStyles } from '../parts/unique/reset-styles';
import { Separator } from '@/shared/ui';

interface IBaseAdvancedSettings {
	node: Node;
}

export const BaseAdvancedSettings = ({ node }: IBaseAdvancedSettings) => {
	return (
		<>
			<div>
				<div>
					<h3 className="text-lg font-semibold text-foreground">
						Дополнительные действия
					</h3>
					<p className="text-sm text-muted-foreground max-w-[30ch]">
						Настройки узла, не влияющие на содержимое, но изменяющие
						внешний вид и структуру.
					</p>
				</div>
			</div>
			<div className="space-y-4">
				<ComponentResetStyles editedNode={node} />
				<Separator />
				<ComponentDestroyNode editedNode={node} />
			</div>
		</>
	);
};
