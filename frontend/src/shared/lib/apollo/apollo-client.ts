import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
	link: new HttpLink({
		uri: process.env.GRAPHQL_URL,
		credentials: 'include',
	}),
	cache: new InMemoryCache({
		typePolicies: {
			UserModel: {
				keyFields: ['id'],
			},
			RouteModel: {
				keyFields: ['id'],
			},
		},
	}),
});

export default client;
