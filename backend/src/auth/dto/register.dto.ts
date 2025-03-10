import {
    IsEmail,
    IsNotEmpty,
    IsString,
    Matches,
    MinLength,
    Validate,
} from 'class-validator';

import { IsPasswordsMatchingConstraint } from '@/libs/common/decorators/is-passwords-matching-constraint.decorator';

export class RegisterDto {
    @IsString({ message: 'Имя должно быть строкой.' })
    @IsNotEmpty({ message: 'Имя — обязательное поле.' })
    @MinLength(2, { message: 'Имя пользователя должно содержать минимум 2 символа.' })
    @Matches(/^[\p{L}\p{N}_ ]+$/u, {
        message: 'Имя может содержать только буквы, цифры и символы подчеркивания.',
    })
    name: string;

    @IsString({ message: 'Email должен быть строкой.' })
    @IsEmail({}, { message: 'Некорректный формат email.' })
    @IsNotEmpty({ message: 'Email — обязательное поле.' })
    email: string;

    @IsString({ message: 'Пароль должен быть строкой.' })
    @IsNotEmpty({ message: 'Пароль — обязательное поле.' })
    @MinLength(10, {
        message: 'Пароль должен содержать минимум 10 символов.',
    })
    @Matches(/(?=.*\p{Lu})(?=.*\d)/u, {
        message:
            'Пароль должен содержать минимум 10 символов, хотя бы 1 заглавную букву и 1 цифру.',
    })
    password: string;

    @IsString({ message: 'Подтверждение пароля должно быть строкой.' })
    @IsNotEmpty({ message: 'Подтверждение пароля — обязательное поле.' })
    @MinLength(10, {
        message: 'Подтверждение пароля должно содержать минимум 10 символов.',
    })
    @Validate(IsPasswordsMatchingConstraint, {
        message: 'Пароли не совпадают.',
    })
    passwordRepeat: string;
}
