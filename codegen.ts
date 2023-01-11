import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema: './apps/gql-nexus-service/src/generated/schema.graphql',
	documents: './apps/posts-app/src/**/*.graphql',
	generates: {
		'./apps/posts-app/src/generated/graphql.ts': {
			plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
		},
	},
};

export default config;
