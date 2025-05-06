import { CategoriesEnum } from './categories';
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

export type Link = {
	id: string;
	label: string | null;
	url: string | null;
	description?: string;
	isNecessary?: TaskImportanceEnum;
	category: CategoriesEnum;
};

export type Links = Array<Link>;

export type Topic = NodeType.topic | NodeType.subtopic;
