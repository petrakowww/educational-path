import { IsString, Matches, MinLength } from 'class-validator';

import { IsMatching } from '@/libs/common/decorators/is-passwords-matching-constraint.decorator';

import { Field, InputType } from '@nestjs/graphql';

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

    @Field()
    @IsString({ message: 'Повтор пароля должен быть строкой.' })
    @IsMatching('newPassword', { message: 'Пароли не совпадают.' })
    newPasswordRepeat: string;
}
