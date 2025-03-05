import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateUserDto {
    @Field()
    @IsString({ message: 'The name must be a string.' })
    @IsNotEmpty({ message: 'The name is required.' })
    name: string;

    @Field()
    @IsString({ message: 'The email must be a string.' })
    @IsEmail({}, { message: 'Incorrect email format.' })
    @IsNotEmpty({ message: 'Email is required to fill in.' })
    email: string;

    @Field()
    @IsBoolean({ message: 'isTwoFactorEnabled must be a Boolean value.' })
    isTwoFactorEnabled: boolean;
}
