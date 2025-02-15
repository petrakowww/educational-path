import { TaskStatusEnum } from "../../../component";

export interface NodeTimeProps {
    getTimeLeft: () => string;
    getTaskStatus: () => TaskStatusEnum;
    
    startCountdown: () => void;

    setDeadline: (newDeadline: Date) => void;
    setInterval: (newInterval: number) => void;
}