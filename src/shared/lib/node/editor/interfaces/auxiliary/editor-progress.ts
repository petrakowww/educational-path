import { TaskStatusEnum } from '../../../component';

export interface NodeProgressProps {
	getStatus: () => TaskStatusEnum;
	setStatus: (status: TaskStatusEnum) => void;
}
