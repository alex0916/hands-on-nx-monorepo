import { makeSchema } from 'nexus';
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
});
