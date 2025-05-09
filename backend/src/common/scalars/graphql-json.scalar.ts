import { GraphQLJSON } from 'graphql-type-json';
import { Scalar } from '@nestjs/graphql';

@Scalar('JSON', () => GraphQLJSON)
export class JSONScalar {}