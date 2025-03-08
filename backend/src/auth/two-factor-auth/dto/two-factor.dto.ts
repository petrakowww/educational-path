import { IsNumberString, Length, Matches } from 'class-validator';

export class TwoFactorDto {
    @IsNumberString()
    @Length(6, 6, { message: 'Код должен состоять ровно из 6 символов' })
    @Matches(/^\d{6}$/, { message: 'Код должен быть цифровым' })
    code: string;
}
