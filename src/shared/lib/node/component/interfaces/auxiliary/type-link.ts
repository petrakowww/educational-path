import { TaskImportanceEnum } from '../../constants/enum-importance';

export interface GraphNodeExtendedLinkProps {
	links?: Array<{
		url: string;
		description: string;
		label?: string;
		isExternal?: boolean;
		isNecessary?: TaskImportanceEnum;
		category?: string;
	}>;
}

export interface GraphNodeButtonLinkProps {
	url?: string;
}

export interface GraphNodeLinkProps {
	linkProps: Partial<GraphNodeExtendedLinkProps & GraphNodeButtonLinkProps>
}