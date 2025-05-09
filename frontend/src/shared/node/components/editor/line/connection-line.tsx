import { PrimaryColors } from '@/features/node/editor/types/colors';
import { ConnectionLineComponentProps } from 'reactflow';

export const CustomConnectionLine = ({
	fromX,
	fromY,
	toX,
	toY,
	connectionLineStyle,
}: ConnectionLineComponentProps) => {
	return (
		<path
			fill="none"
			stroke={PrimaryColors.Primary}
			strokeWidth={2}
			className="animate-pulse"
			d={`M${fromX},${fromY} C${fromX},${fromY + 50} ${toX},${toY - 50} ${toX},${toY}`}
			style={connectionLineStyle}
		/>
	);
};
