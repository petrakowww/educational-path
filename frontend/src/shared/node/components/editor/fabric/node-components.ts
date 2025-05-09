import { NodeType } from "@/features/node/editor/types/node";
import { TodoNodeMemo } from "../todo";
import { ChecklistNodeMemo } from "../checklist";
import { ButtonNodeMemo } from "../button";
import { LabelNodeMemo } from "../label";
import { ParagraphNodeMemo } from "../paragraph";
import { TitleNodeMemo } from "../title";
import { TopicNodeMemo } from "../topic";

export const nodeVisualComponents = {
    [NodeType.subtopic]: TopicNodeMemo,
    [NodeType.topic]: TopicNodeMemo,
    [NodeType.title]: TitleNodeMemo,
    [NodeType.paragraph]: ParagraphNodeMemo,
    [NodeType.label]: LabelNodeMemo,
    [NodeType.button]: ButtonNodeMemo,
    [NodeType.checklist]: ChecklistNodeMemo,
    [NodeType.todo]: TodoNodeMemo,
};
