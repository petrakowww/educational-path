import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
export class ChecklistItemWithProgress {
	@Field(() => String)
	id: string;

	@Field(() => String)
	text: string;

	@Field(() => Boolean)
	done: boolean;
}
