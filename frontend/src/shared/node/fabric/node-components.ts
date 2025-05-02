import { NodeType } from "@/features/node/editor/types/node";
import { TodoNodeMemo } from "../components/todo";
import { ChecklistNodeMemo } from "../components/checklist";
import { ButtonNodeMemo } from "../components/button";
import { LabelNodeMemo } from "../components/label";
import { ParagraphNodeMemo } from "../components/paragraph";
import { TitleNodeMemo } from "../components/title";
import { TopicNodeMemo } from "../components/topic";

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
