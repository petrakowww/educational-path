import { getBezierPath, getSmoothStepPath, getStraightPath } from "reactflow";
import { EdgePosition, TPath } from "../types/edge-data";

const pathStrategies: Record<
    TPath,
    (params: {
        sourceX: number;
        sourceY: number;
        targetX: number;
        targetY: number;
    }) => [string, number, number, number, number]
> = {
    bezier: getBezierPath,
    smoothstep: getSmoothStepPath,
    straight: getStraightPath,
};

export const getPathByType = (pathType: TPath, position: EdgePosition) => {
    const { sourceX, sourceY, targetX, targetY } = position;
    const strategy = pathStrategies[pathType] || getBezierPath;
    return strategy({ sourceX, sourceY, targetX, targetY });
};