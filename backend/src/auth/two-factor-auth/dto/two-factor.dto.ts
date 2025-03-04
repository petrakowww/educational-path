import { IsNumberString, Length, Matches } from 'class-validator';

export class TwoFactorDto {
    @IsNumberString()
    @Length(6, 6, { message: 'Code must be exactly 6 characters' })
    @Matches(/^\d{6}$/, { message: 'Code must be numeric' })
    code: string;
}
