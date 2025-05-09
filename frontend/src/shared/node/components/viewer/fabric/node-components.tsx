import { NodeType } from "@/features/node/editor/types/node";
import { TodoViewNodeMemo } from "../todo";
import { ChecklistViewNodeMemo } from "../checklist";
import { ButtonViewNodeMemo } from "../button";
import { LabelViewNodeMemo } from "../label";
import { ParagraphViewNodeMemo } from "../paragraph";
import { TitleViewNodeMemo } from "../title";
import { TopicViewNodeMemo } from "../topic";

export const nodeViewerComponents = {
    [NodeType.subtopic]: TopicViewNodeMemo,
    [NodeType.topic]: TopicViewNodeMemo,
    [NodeType.title]: TitleViewNodeMemo,
    [NodeType.paragraph]: ParagraphViewNodeMemo,
    [NodeType.label]: LabelViewNodeMemo,
    [NodeType.button]: ButtonViewNodeMemo,
    [NodeType.checklist]: ChecklistViewNodeMemo,
    [NodeType.todo]: TodoViewNodeMemo,
};
