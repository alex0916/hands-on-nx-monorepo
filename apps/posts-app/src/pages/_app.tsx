import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import { useApollo } from '../apollo-client';
import { ThemeContextProvider } from '../contexts';
import './styles.css';

function PostsApp({ Component, pageProps }: AppProps) {
	const apolloClient = useApollo(pageProps);

	return (
		<ApolloProvider client={apolloClient}>
			<ThemeContextProvider>
				<Component {...pageProps} />
			</ThemeContextProvider>
		</ApolloProvider>
	);
}

export default PostsApp;
