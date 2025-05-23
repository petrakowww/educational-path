import { Module } from '@nestjs/common';
import { MapsSearchResolver } from './maps-search.resolver';
import { MapsSearchService } from './maps-search.service';

@Module({
  providers: [MapsSearchResolver, MapsSearchService],
})
export class MapsSearchModule {}
