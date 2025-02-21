import { NodeLabelEnum } from '../../constants/enum-label';
import { GraphNodeLabelProps } from '../../interfaces/auxiliary/type-label';

export const getLabelProps = (label: NodeLabelEnum): GraphNodeLabelProps => {
	return {
		labelProps: { label },
	};
};
