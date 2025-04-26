import { Authorization } from '@/auth/decorators/auth.decorator';
import { CurrentUser } from '@/auth/decorators/user.decorator';

import { FindRouteArgs } from './args/route-args';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { RouteModel } from './model/route.model';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { RouteService } from './route.service';

@Resolver(() => RouteModel)
export class RouteResolver {
    constructor(private readonly routeService: RouteService) {}

    @Query(() => RouteModel)
    async findRoute(@Args() args: FindRouteArgs) {
        return this.routeService.findById(args.id);
    }

    @Authorization()
    @Query(() => [RouteModel])
    async findRoutesByUser(@CurrentUser('id') userId: string) {
        return this.routeService.findByUserId(userId);
    }

    @Authorization()
    @Mutation(() => RouteModel)
    async createRoute(
        @CurrentUser('id') userId: string,
        @Args('data') data: CreateRouteDto,
    ) {
        return this.routeService.create(userId, data);
    }

    @Authorization()
    @Mutation(() => RouteModel)
    async updateRoute(
        @Args() args: FindRouteArgs,
        @Args('data') data: UpdateRouteDto,
        @CurrentUser('id') userId: string,
    ) {
        return this.routeService.update(args.id, userId, data);
    }

    @Authorization()
    @Mutation(() => Boolean)
    async deleteRoute(
        @Args() args: FindRouteArgs,
        @CurrentUser('id') userId: string,
    ) {
        return this.routeService.delete(args.id, userId);
    }
}
