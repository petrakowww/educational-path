import { useEdgeStore } from '@/shared/managers/store/edge.store';
import { XIcon } from 'lucide-react';
import { TPath } from '@/shared/edge/types/edge-data';
import {
	Button,
	Input,
	Label,
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
	Separator,
} from '@/shared/ui';
import { CommandComponentEdgeLine } from '../parts/edges/edge-color-line';
import { EdgePathTypeSelector } from '../parts/edges/edge-type-path';
import { EdgeStrokeStyleSelector } from '../parts/edges/edge-line-style';
import { EdgeMarkerSelector } from '../parts/edges/edge-arrow-type';

interface IAsideBarEdgeEditor {
	handleCloseEditor?: () => void;
	asideClassName: string;
}

export const AsideBarEdgeEditor = (props: IAsideBarEdgeEditor) => {
	const { asideClassName, handleCloseEditor } = props;
	const { selectedEdge, clearSelectedEdge } = useEdgeStore(
		(state) => ({
			selectedEdge: state.selectedEdge,
			updateEdgeProperties: state.updateEdgeProperties,
			clearSelectedEdge: state.clearSelectedEdge,
		}),
		(a, b) => a.selectedEdge?.id === b.selectedEdge?.id
	);

	if (!selectedEdge) {
		return null;
	}

	const handleClose = () => {
		clearSelectedEdge();
		handleCloseEditor?.();
	};

	return (
		<aside className={asideClassName}>
			<div className="flex flex-col gap-4 w-[280px]">
				<div>
					<div className="flex justify-between items-center mb-2">
						<h2 className="text-lg font-semibold">
							Редактор связи
						</h2>
						<Button
							size="icon"
							variant="outline"
							onClick={handleClose}
							className="p-0 h-auto aspect-square w-8"
						>
							<XIcon />
						</Button>
					</div>
					<Separator />
				</div>

				<CommandComponentEdgeLine editedEdge={selectedEdge} />
				<EdgePathTypeSelector editedEdge={selectedEdge} />

				<EdgeStrokeStyleSelector editedEdge={selectedEdge} />

				<EdgeMarkerSelector editedEdge={selectedEdge} />
			</div>
		</aside>
	);
};
