import client from '@/shared/lib/apollo/apollo-client';
import { ApolloProvider } from '@apollo/client';

interface ApolloClientProviderProps {
	children: React.ReactNode;
}

export const ApolloClientProvider = (props: ApolloClientProviderProps) => {
	const { children } = props;
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
