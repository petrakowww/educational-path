import { NodeChange } from 'reactflow';
import { XYPosition, Dimensions } from 'reactflow'; // если используешь типы

type PositionOrSizeChange = {
  id: string;
  position?: XYPosition;
  dimensions?: Dimensions;
};

export function extractPositionAndSizeChanges(
  changes: NodeChange[]
): PositionOrSizeChange[] {
  const result: PositionOrSizeChange[] = [];

  for (const change of changes) {
    if (!("id" in change)) continue;

    if (change.type === 'position') {
      result.push({
        id: change.id,
        position: change.position,
      });
    }

    if (change.type === 'dimensions') {
      result.push({
        id: change.id,
        dimensions: change.dimensions,
      });
    }
  }

  return result;
}
