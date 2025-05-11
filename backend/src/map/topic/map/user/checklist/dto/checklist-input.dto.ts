import { InputType, Field } from "@nestjs/graphql";
import { IsString } from "class-validator";

@InputType()
export class ChecklistItemInput {
    @Field()
    @IsString()
    text: string;

    @Field({ nullable: true })
    @IsString()
    id?: string;
}
