import { extendType } from 'nexus';
import { Comment } from '../types';

export const CommentQuery = extendType({
	type: 'Query',
	definition(t) {
		t.nonNull.list.field('comments', {
			type: Comment,
			resolve: (_root, _args, { dataSources }) => dataSources.commentService.getComments(),
		});
	},
});
