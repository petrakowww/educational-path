import {
    Heading1Icon,
    CircleIcon,
    CircleDashedIcon,
    PilcrowIcon,
    TagIcon,
    LinkIcon,
    ListChecksIcon,
    SquareCheckIcon,
  } from 'lucide-react';
  import { NodeType } from '../../../../types/node';
  
  export const nodeTypeIconRegistry: Record<NodeType, React.FC<{ className?: string }>> = {
    TITLE: Heading1Icon,
    TOPIC: CircleIcon,
    SUBTOPIC: CircleDashedIcon,
    PARAGRAPH: PilcrowIcon,
    LABEL: TagIcon,
    BUTTON: LinkIcon,
    TODO: SquareCheckIcon,
    CHECKLIST: ListChecksIcon,
  };