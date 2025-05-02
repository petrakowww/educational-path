import { ReactFlowProvider } from 'reactflow';
import { Editor } from './editor';

export const Board = () => {
	return (
		<div className="h-full w-full">
			<ReactFlowProvider>
				<div className="flex flex-col h-full w-full overflow-hidden relative">
					<section className="flex h-full overflow-auto">
						<Editor />
					</section>
				</div>
			</ReactFlowProvider>
		</div>
	);
};
