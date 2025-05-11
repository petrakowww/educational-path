import { useNodeStore } from '@/shared/managers/store/editor/nodes-editor.store';
import { useEdgeStore } from '@/shared/managers/store/editor/edge-editor.store';
import {
	layoutAsTree,
	layoutAsGrid,
	layoutAsHorizontalTree,
} from './layout-tree';
import {
	Button,
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	Separator,
} from '@/shared/ui';
import { deleteIsolatedNodes } from './delete-isolate';

export const AsideBarExtendedSettings = () => {
	const { nodesList, setNodes } = useNodeStore.getState();
	const { edges } = useEdgeStore.getState();

	const handleLayout = (type: 'tree' | 'horizontal' | 'grid') => {
		const nodes = [...nodesList];
		const edgeList = [...edges];

		const laidOut =
			type === 'tree'
				? layoutAsTree({ nodes, edges: edgeList })
				: type === 'horizontal'
					? layoutAsHorizontalTree({ nodes, edges: edgeList })
					: layoutAsGrid({ nodes });

		setNodes(laidOut);
	};

	return (
		<aside className="max-w-[300px] absolute z-10 bg-background top-0 left-0 h-full shadow-right p-3 flex flex-col gap-2">
			<Card>
				<CardHeader className="pb-2 px-4 pt-2">
					<CardTitle className="text-sm">Авторасстановка</CardTitle>
					<Separator />
				</CardHeader>
				<CardContent className="flex flex-col gap-2 px-4 pb-2">
                <p className='text-foreground/80 text-sm'>Отсорировать граф</p>
					<Button
						variant="secondary"
						onClick={() => handleLayout('tree')}
					>
						Сверху вниз
					</Button>
					<Button
						variant="secondary"
						onClick={() => handleLayout('horizontal')}
					>
						Слева направо
					</Button>
					<Button
						variant="secondary"
						onClick={() => handleLayout('grid')}
					>
						Сетка
					</Button>
				</CardContent>
			</Card>
			<Card>
				<CardHeader className="pb-2 px-4 pt-2">
					<CardTitle className="text-sm">Очистка</CardTitle>
					<Separator />
				</CardHeader>
				<CardContent className="flex flex-col gap-2 px-4 pb-2">
                    <p className='text-foreground/80 text-sm'>Если вы хотите убрать все изолированные узлы</p>
					<Button variant="destructive" className='h-8' onClick={deleteIsolatedNodes}>
					    Изолированные узлы
					</Button>
				</CardContent>
			</Card>
		</aside>
	);
};
