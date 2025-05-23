import { Resolver, Query, Args } from '@nestjs/graphql';
import { MapsSearchService } from './maps-search.service';
import { SearchRoutesInput } from './dto/search-routes.input';
import { Route } from '../route/model/route.model';
import { PaginatedRoutes } from './dto/paginated-routes.input';

@Resolver(() => Route)
export class MapsSearchResolver {
  constructor(private readonly mapsSearchService: MapsSearchService) {}

  @Query(() => PaginatedRoutes)
  async searchRoutes(
    @Args('filters', { type: () => SearchRoutesInput }) filters: SearchRoutesInput
  ): Promise<PaginatedRoutes> {
    const { results, total } = await this.mapsSearchService.searchRoutes(filters);
    return {
      routes: results as unknown as Route[],
      total,
      totalPages: Math.ceil(total / filters.pageSize),
      currentPage: filters.page,
    };
  }
}
