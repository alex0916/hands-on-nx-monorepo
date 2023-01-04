import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { context } from './context';
import { schema } from './schema';

async function startServer() {
	try {
		const server = new ApolloServer({ schema });

		const { url } = await startStandaloneServer(server, {
			context: async () => Promise.resolve(context),
			listen: { port: 4000 },
		});

		console.log(`🚀  Server ready at: ${url}`);
	} catch (error) {
		console.log(error);
	}
}

startServer();
