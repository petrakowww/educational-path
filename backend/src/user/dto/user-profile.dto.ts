import {
    IsBoolean,
    IsOptional,
    IsString,
    Matches,
    MinLength,
} from 'class-validator';

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserProfileDto {
    @Field({ nullable: true })
    @IsOptional()
    @IsString({ message: 'Имя пользователя должно быть строкой.' })
    @MinLength(2, {
        message: 'Имя пользователя должно содержать не менее 2 символов.',
    })
    @Matches(/^[\p{L}\p{N}_ ]+$/u, {
        message:
            'Имя может содержать только буквы, цифры, подчеркивания и пробелы.',
    })
    name?: string;

    @Field({ nullable: true })
    @IsOptional()
    @IsBoolean({
        message: 'Двухфакторная аутентификации является булевым значением',
    })
    isTwoFactorEnabled?: boolean;
}
