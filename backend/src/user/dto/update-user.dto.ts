import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateUserDto {
    @Field()
    @IsString({ message: 'Имя должно быть строкой.' })
    @IsNotEmpty({ message: 'Имя является обязательным полем.' })
    name: string;

    @Field()
    @IsString({ message: 'Email должен быть строкой.' })
    @IsEmail({}, { message: 'Некорректный формат email.' })
    @IsNotEmpty({ message: 'Email является обязательным полем.' })
    email: string;

    @Field()
    @IsBoolean({ message: 'isTwoFactorEnabled должно быть булевым значением.' })
    isTwoFactorEnabled: boolean;
}
