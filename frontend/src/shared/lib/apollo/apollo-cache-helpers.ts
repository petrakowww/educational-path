import { CreateRouteMutation } from '@/shared/graphql/generated/output';
import { ApolloCache } from '@apollo/client';
import { StoreObject } from '@apollo/client/utilities';

export const removeRouteFromUserRoutes = (
	cache: ApolloCache<unknown>,
	deletedRouteId: string
) => {
	cache.modify({
		fields: {
			findRoutesByUser(existingRoutesRefs = [], { readField }) {
				return existingRoutesRefs.filter(
					(routeRef: StoreObject) =>
						readField('id', routeRef) !== deletedRouteId
				);
			},
		},
	});
};

export const addRouteToUserRoutes = (
  cache: ApolloCache<unknown>,
  newRoute: CreateRouteMutation['createRoute']
) => {
  if (!newRoute) return;

  cache.modify({
    fields: {
      findRoutesByUser(existingRoutesRefs = [], { readField, toReference }) {
        const newRouteRef = toReference({
          __typename: 'RouteModel',
          id: newRoute.id,
        });

        if (
          existingRoutesRefs.some(
            (ref: StoreObject) => readField('id', ref) === newRoute.id
          )
        ) {
          return existingRoutesRefs;
        }

        return [...existingRoutesRefs, newRouteRef];
      },
    },
  });
};

