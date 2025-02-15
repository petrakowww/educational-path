import { TaskImportanceEnum } from '../../constants/node-importance';
import { TaskStatusEnum } from '../../constants/node-task';

export interface GraphNodeProgressProps {
	status?: TaskStatusEnum;
	isNecessary?: TaskImportanceEnum;
}
