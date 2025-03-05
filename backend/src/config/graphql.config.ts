import { join } from 'path';

import { isDev } from '@/libs/common/utils/is-dev.util';

import { type ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigService } from '@nestjs/config';
import { Request, Response } from 'express';

export const getGraphQLConfig = (
    configService: ConfigService,
): ApolloDriverConfig => {
    return {
        playground: isDev(configService),
        path: configService.getOrThrow<string>('GRAPHQL_PREFIX'),
        autoSchemaFile: join(process.cwd(), 'src/graphql/schema/schema.gql'),
        sortSchema: true,
        context: ({ req, res }: { req: Request, res: Response }) => ({ req, res }),
    };
};
