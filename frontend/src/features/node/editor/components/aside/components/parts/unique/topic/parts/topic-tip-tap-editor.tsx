import { Node } from 'reactflow';
import { TiptapEditor } from '@/shared/ui/tiptap/components/editor';
import { NodeDataShapeTopic } from '@/features/node/editor/types/node';

interface ITopicContent {
	node: Node<NodeDataShapeTopic>;
}

import { useEffect, useMemo } from 'react';
import { debounce } from 'lodash';
import { useNodeStore } from '@/shared/managers/store/editor/nodes-editor.store';
import { Label, Separator } from '@/shared/ui';
import { toast } from 'sonner';

export const TopicTiptapEditor = ({ node }: ITopicContent) => {
	const updateNodeProperties = useNodeStore(
		(state) => state.updateNodeProperties
	);

	const debouncedUpdate = useMemo(
		() =>
			debounce((content: string) => {
				updateNodeProperties({
					nodeId: node.id,
					properties: {
						data: {
							...node.data,
							topicProps: {
								...(node.data.topicProps ?? {}),
								topicContent: content,
							},
						},
					},
				});

				toast.success('Изменения сохранены', {
					description: 'Содержание топика обновлено',
				});
			}, 500),
		[node.id, node.data]
	);

	useEffect(() => {
		return () => {
			debouncedUpdate.cancel();
		};
	}, [debouncedUpdate]);

	return (
		<div>
			<Label className="block mb-2 text-sm text-foreground/80">
				Добавьте текстовое содержание:
			</Label>
			<div>
				<TiptapEditor
					initialContent={node.data.topicProps?.topicContent ?? ''}
					onUpdate={debouncedUpdate}
				/>
			</div>
		</div>
	);
};
