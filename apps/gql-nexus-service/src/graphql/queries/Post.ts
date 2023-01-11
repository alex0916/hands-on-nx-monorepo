import { extendType, stringArg, nonNull } from 'nexus';
import { ConnectionResponse } from '../../lib/ConnectionResponse';
import { Post } from '../types';

export const PostQueries = extendType({
	type: 'Query',
	definition(t) {
		t.connectionField('posts', {
			type: Post,
			resolve: async (_, args, { dataSources }) => {
				const posts = await dataSources.postService.getPosts();
				return ConnectionResponse.fromResolver(args, posts).getResponse();
			},
		});
		t.connectionField('postsByUserId', {
			type: Post,
			additionalArgs: {
				userId: nonNull(stringArg({ description: 'User ID to filter the results' })),
			},
			resolve: async (_, { userId, ...args }, { dataSources }) => {
				const posts = await dataSources.postService.getPostsByUserId(userId);
				return ConnectionResponse.fromResolver(args, posts).getResponse();
			},
		});
	},
});
