import { extendType, nonNull, stringArg } from 'nexus';
import { ConnectionResponse } from '../lib/ConnectionResponse';
import { Comment } from '../types';

export const CommentsQueries = extendType({
	type: 'Query',
	definition(t) {
		t.connectionField('commentsByPostId', {
			type: Comment,
			additionalArgs: {
				postId: nonNull(stringArg({ description: 'Post ID to filter the results' })),
			},
			resolve: async (_, { postId, ...args }, { dataSources }) => {
				const comments = await dataSources.commentService.getCommentsByPostId(postId);
				return ConnectionResponse.fromResolver(args, comments).getResponse();
			},
		});
	},
});
