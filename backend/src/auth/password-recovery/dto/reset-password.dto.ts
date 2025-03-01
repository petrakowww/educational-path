import { IsEmail, IsNotEmpty } from 'class-validator';

export class ResetPasswordDto {
    @IsEmail({}, { message: 'Enter the correct email address.' })
    @IsNotEmpty({ message: 'The email field cannot be empty.' })
    email: string;
}
