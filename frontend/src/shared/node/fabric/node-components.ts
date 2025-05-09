import { NodeType } from "@/features/node/editor/types/node";
import { TopicNodeMemo } from "../components/editor/topic";
import { TitleNodeMemo } from "../components/editor/title";
import { ParagraphNodeMemo } from "../components/editor/paragraph";
import { LabelNodeMemo } from "../components/editor/label";
import { ButtonNodeMemo } from "../components/editor/button";
import { ChecklistNodeMemo } from "../components/editor/checklist";
import { TodoNodeMemo } from "../components/editor/todo";

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
