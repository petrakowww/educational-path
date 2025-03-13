import { TaskImportanceEnum } from '../../constants/enum-importance';
import { TaskStatusEnum } from '../../constants/enum-task';

export interface GraphNodeProgressProps {
	status?: TaskStatusEnum;
	isNecessary?: TaskImportanceEnum;
}
