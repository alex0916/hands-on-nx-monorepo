import { makeSchema, connectionPlugin } from 'nexus';
import { join } from 'path';
import * as types from './types';
import * as queries from './queries';

export const schema = makeSchema({
	types: { ...types, ...queries },
	outputs: {
		schema: join(process.cwd(), 'apps/posts-app/src/graphql/generated', 'schema.graphql'),
		typegen: join(process.cwd(), 'apps/posts-app/src/graphql/generated', 'nexus-typegen.ts'),
	},
	contextType: {
		module: join(process.cwd(), 'apps/posts-app/src/graphql/context.ts'),
		export: 'Context',
	},
	sourceTypes: {
		modules: [
			// Automatically finds any interface/type/class named similarly to the and infers it
			// the "source" type of that resolver.
			{
				module: join(process.cwd(), 'apps/posts-app/src/graphql/models.ts'),
				alias: 'models',
				typeMatch: (name) => new RegExp(`(?:interface|type|class)\\s+(${name}Model?)\\W`, 'g'),
			},
		],
		debug: false,
	},
	plugins: [connectionPlugin()],
});
