import {
    IsNotEmpty,
    IsOptional,
    IsString,
    Matches,
    MinLength,
} from 'class-validator';

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateExternalUserDto {
    @Field()
    @IsString({ message: 'Имя пользователя должно быть строкой.' })
    @MinLength(2, {
        message: 'Имя пользователя должно содержать не менее 2 символов.',
    })
    @Matches(/^[\p{L}\p{N}_ ]+$/u, {
        message:
            'Имя может содержать только буквы, цифры, подчеркивания и пробелы.',
    })
    @IsNotEmpty({ message: 'Имя пользователя является обязательным полем.' })
    name: string;

    @Field({ nullable: true })
    @IsString()
    @Matches(/\.(jpeg|jpg|png|gif|webp)$/i, {
        message:
            'Аватар должен быть ссылкой на изображение (jpeg, jpg, png, gif, webp).',
    })
    @IsOptional()
    avatar?: string;
}
