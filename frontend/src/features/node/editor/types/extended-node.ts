import { TaskImportanceEnum } from './importance';
import { NodeType } from './node';

export type ToDo = {
	label: string;
	idItem: string;
	isDone: boolean;
};

export type ToDos = Array<ToDo>;

export type Legend = {
	label: string;
	color: string;
	idItem: string;
};

export type Legends = Array<Legend>;

export type Links = Array<{
	url: string | null;
	description?: string | null;
	label?: string | null;
	isExternal?: boolean | null;
	isNecessary?: TaskImportanceEnum | null;
	category?: string | null;
}>;

export type Topic = NodeType.topic | NodeType.subtopic;
