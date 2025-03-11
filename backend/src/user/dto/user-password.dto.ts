import { InputType, Field } from "@nestjs/graphql";
import { IsString, MinLength, Matches } from "class-validator";

@InputType()
export class ChangePasswordDto {
    @Field()
    @IsString({ message: 'Старый пароль должен быть строкой.' })
    oldPassword: string;

    @Field()
    @IsString({ message: 'Новый пароль должен быть строкой.' })
    @MinLength(10, { message: 'Пароль должен содержать минимум 10 символов.' })
    @Matches(/(?=.*\p{Lu})(?=.*\d)/u, {
        message:
            'Пароль должен содержать минимум 10 символов, хотя бы 1 заглавную букву и 1 цифру.',
    })
    newPassword: string;
}
