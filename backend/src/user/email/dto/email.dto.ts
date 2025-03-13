import {
    IsEmail,
    IsNotEmpty,
    IsNumberString,
    IsOptional,
    Length,
    Matches,
} from 'class-validator';

export class EmailDto {
    @IsOptional()
    @IsNumberString()
    @Length(6, 6, { message: 'Код должен состоять ровно из 6 символов' })
    @Matches(/^\d{6}$/, { message: 'Код должен быть цифровым' })
    code?: string;

    @IsEmail({}, { message: 'Некорректный старый email' })
    @IsNotEmpty({ message: 'Старый email обязателен' })
    oldEmail?: string;

    @IsEmail({}, { message: 'Некорректый email' })
    @IsNotEmpty({ message: 'Новый email обязателен' })
    newEmail?: string;
}
