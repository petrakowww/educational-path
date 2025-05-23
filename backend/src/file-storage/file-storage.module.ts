import { Module } from '@nestjs/common';
import { FileStorageService } from './file-storage.service';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [UploadModule],
  providers: [FileStorageService],
  exports: [FileStorageService],
})
export class FileStorageModule {}
