import {
    IsEmail,
    IsNotEmpty,
    IsOptional,
    IsString,
    Matches,
    MinLength,
} from 'class-validator';

export class LoginDto {
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

    @IsOptional()
    @IsString()
    code?: string;
}
