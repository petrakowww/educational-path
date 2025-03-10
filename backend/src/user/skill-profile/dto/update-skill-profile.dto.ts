import {
    IsOptional,
    IsString,
    IsUrl,
    Matches,
    MaxLength,
    MinLength,
} from 'class-validator';

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateSkillProfileDto {
    @Field({ nullable: true })
    @IsString({ message: 'Имя профиля должно быть строкой.' })
    @MinLength(3, {
        message: 'Имя профиля должно содержать не менее 3 символов.',
    })
    @Matches(/^[\p{L}\p{N}_ ]+$/u, {
        message:
            'Имя профиля может содержать только буквы, цифры, подчеркивания и пробелы.',
    })
    @IsOptional()
    profilename?: string;

    @Field({ nullable: true })
    @IsString({ message: 'Заголовок должен быть строкой.' })
    @MaxLength(600, {
        message:
            'Вы превысили максимальную длину краткого описания вашего профиля (600 символов)',
    })
    @IsOptional()
    headline?: string;

    @Field({ nullable: true })
    @IsString({
        message: 'Введите корректный Telegram username (пример: @username).',
    })
    @Matches(/^@[\w\d_]{3,32}$/, {
        message: 'Введите корректный Telegram username (пример: @username).',
    })
    @IsOptional()
    telegramUrl?: string;

    @Field({ nullable: true })
    @IsUrl(
        {},
        {
            message:
                'Введите корректный URL GitHub (пример: https://github.com/username).',
        },
    )
    @Matches(/^https:\/\/github\.com\/[\w\d-]+$/, {
        message:
            'Ссылка должна вести на GitHub профиль (пример: https://github.com/username).',
    })
    @IsOptional()
    githubUrl?: string;

    @Field({ nullable: true })
    @IsUrl(
        {},
        {
            message:
                'Введите корректный URL ВКонтакте (пример: https://vk.com/username).',
        },
    )
    @Matches(/^https:\/\/vk\.com\/[\w\d-]+$/, {
        message:
            'Ссылка должна вести на VK профиль (пример: https://vk.com/username).',
    })
    @IsOptional()
    vkUrl?: string;
}
