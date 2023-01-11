import { makeSchema, connectionPlugin } from 'nexus';
import { join } from 'path';
import * as types from './graphql';

export const schema = makeSchema({
	types,
	outputs: {
		schema: join(process.cwd(), 'apps/gql-nexus-service/src/generated', 'schema.graphql'),
		typegen: join(process.cwd(), 'apps/gql-nexus-service/src/generated', 'nexus-typegen.ts'),
	},
	contextType: {
		module: join(process.cwd(), 'apps/gql-nexus-service/src/context.ts'),
		export: 'Context',
	},
	sourceTypes: {
		modules: [
		  // Automatically finds any interface/type/class named similarly to the and infers it
		  // the "source" type of that resolver.
		  {
			module: join(process.cwd(), 'apps/gql-nexus-service/src/models.ts'),
			alias: 'models',
			typeMatch: name => new RegExp(`(?:interface|type|class)\\s+(${name}Model?)\\W`, 'g'),
		  },
		],
		debug: false,
	  },
	plugins: [
		connectionPlugin(),
	],
});
