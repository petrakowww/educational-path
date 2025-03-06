import { Request, Response } from 'express';

import { ConfirmationDto } from './dto/confirmation.dto';
import {
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    Post,
    Req,
    Res,
} from '@nestjs/common';

import { EmailConfirmationService } from './email-confirmation.service';

@Controller('auth/email-confirmation')
export class EmailConfirmationController {
    constructor(
        private readonly emailConfirmationService: EmailConfirmationService,
    ) {}

    @Post()
    @HttpCode(HttpStatus.OK)
    public async newVerification(
        @Req() req: Request,
        @Res() res: Response,
        @Body() dto: ConfirmationDto,
    ) {
        return this.emailConfirmationService.newVerification(req, res, dto);
    }
}
