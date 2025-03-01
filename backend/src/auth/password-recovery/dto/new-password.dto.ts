import { IsNotEmpty, IsString, Matches, MinLength, Validate } from 'class-validator';

import { IsPasswordsMatchingConstraint } from '@/libs/common/decorators/is-passwords-matching-constraint.decorator';

export class NewPasswordDto {
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
    
    @IsString({ message: 'Password confirmation must be a string.' })
    @IsNotEmpty({ message: 'Password confirmation is required.' })
    @MinLength(10, {
        message: 'Password confirmation must be at least 10 characters long.',
    })
    @Validate(IsPasswordsMatchingConstraint, {
        message: 'Passwords do not match.',
    })
    passwordRepeat: string;
}
