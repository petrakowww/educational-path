import {
    IsNotEmpty,
    IsString,
    Matches,
    MinLength,
    Validate,
} from 'class-validator';

import { IsPasswordsMatchingConstraint } from '@/libs/common/decorators/is-passwords-matching-constraint.decorator';

export class NewPasswordDto {
    @IsString({ message: 'Пароль должен быть строкой.' })
    @IsNotEmpty({ message: 'Пароль обязателен для заполнения.' })
    @MinLength(10, {
        message: 'Пароль должен содержать не менее 10 символов.',
    })
    @Matches(/(?=.*\p{Lu})(?=.*\d)/u, {
        message:
            'Пароль должен содержать не менее 10 символов, включать хотя бы 1 заглавную букву и 1 цифру.',
    })
    password: string;

    @IsString({ message: 'Подтверждение пароля должно быть строкой.' })
    @IsNotEmpty({ message: 'Подтверждение пароля обязательно для заполнения.' })
    @MinLength(10, {
        message: 'Подтверждение пароля должно содержать не менее 10 символов.',
    })
    @Validate(IsPasswordsMatchingConstraint, {
        message: 'Пароли не совпадают.',
    })
    passwordRepeat: string;
}
