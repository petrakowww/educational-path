import { TaskImportanceEnum } from '../../constants/node-importance';

export interface GraphNodeLinkProps {
	links?: Array<{
		url: string;
		description: string;
		label?: string;
		isExternal?: boolean;
		isNecessary?: TaskImportanceEnum;
		category?: string;
	}>;
}
