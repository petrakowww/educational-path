import {
    IsEmail,
    IsNotEmpty,
    IsOptional,
    IsString,
    Matches,
    MinLength,
} from 'class-validator';

export class LoginDto {
    @IsString({ message: 'Email must be a string.' })
    @IsEmail({}, { message: 'Invalid email format.' })
    @IsNotEmpty({ message: 'Email is required field.' })
    email: string;

    @IsString({ message: 'Password must be a string.' })
    @IsNotEmpty({ message: 'Password is required.' })
    @MinLength(10, {
        message: 'Password must be at least 10 characters long.',
    })
    @Matches(/^(?=.*[A-Z])(?=.*\d).{10,}$/, {
        message:
            'Password must be at least 10 characters long, contain at least 1 uppercase letter, and 1 number.',
    })
    password: string;

    @IsOptional()
    @IsString()
    code?: string;
}
