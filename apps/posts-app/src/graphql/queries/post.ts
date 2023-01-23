import { extendType } from 'nexus';
import { ConnectionResponse } from '../lib/ConnectionResponse';
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
	},
});
