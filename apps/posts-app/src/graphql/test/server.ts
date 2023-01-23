import assert from 'node:assert';
import { DocumentNode, TypedQueryDocumentNode } from 'graphql';
import { ApolloServer, BaseContext, GraphQLRequest } from '@apollo/server';
import { VariableValues, ExecuteOperationOptions } from '@apollo/server/dist/esm/externalTypes/graphql';

import { schema } from '../schema';
import { Context } from '../context';
import { CommentService, PostService, UserService } from '../datasources';

const testServer = new ApolloServer({ schema });

const executeOperation = async (
	test: Omit<GraphQLRequest<VariableValues>, 'query'> & {
		query?: string | DocumentNode | TypedQueryDocumentNode<Record<string, unknown>, VariableValues>;
	},
	options: ExecuteOperationOptions<BaseContext>
) => {
	const response = await testServer.executeOperation(test, options);
	assert(response.body.kind === 'single');
	return response.body.singleResult;
};

export const getTestServer = () => {
	const mockContext: Context = {
		dataSources: {
			userService: new UserService(),
			postService: new PostService(),
			commentService: new CommentService(),
		},
	};

	return {
		mockContext,
		executeOperation,
	};
};
