import { Module } from '@nestjs/common';
import { AvatarService } from './avatar.service';
import { AvatarController } from './avatar.controller';
import { AuthSharedModule } from '@/auth/auth.module';

@Module({
    imports: [AuthSharedModule], 
    providers: [AvatarService],
    controllers: [AvatarController],
})
export class AvatarModule {}
