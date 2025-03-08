import { Request } from 'express';

import { ProviderService } from '../provider/provider.service';
import {
    CanActivate,
    ExecutionContext,
    Injectable,
    NotFoundException,
} from '@nestjs/common';

@Injectable()
export class AuthProviderGuard implements CanActivate {
    public constructor(private readonly providerService: ProviderService) {}

    public canActivate(context: ExecutionContext): boolean {
        const request = context
            .switchToHttp()
            .getRequest<Request<{ provider: string }>>();
        const provider = request.params.provider;

        if (!this.providerService.findByService(provider)) {
            throw new NotFoundException(
                `Поставщик "${provider}" не найден. Проверьте правильность введенных данных.`,
            );
        }

        return true;
    }
}
