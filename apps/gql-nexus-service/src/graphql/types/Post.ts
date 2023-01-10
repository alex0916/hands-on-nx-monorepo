import { inputObjectType, objectType } from 'nexus';
import { ConnectionResponse } from '../../lib/ConnectionResponse';
import { Comment } from './Comment';

export const Post = objectType({
	name: 'Post',
	definition(t) {
		t.nonNull.id('id');
		t.string('title');
		t.string('body');
		t.connectionField('comments', {
			type: Comment,
			resolve: async ({ id }, args, { dataSources }) => {
				const posts = await dataSources.commentService.getCommentsByPostId(id);
				return ConnectionResponse.fromResolver(args, posts).getResponse();
			},
		});
	},
});

export const PostInput = inputObjectType({
	name: 'PostInput',
	definition(t) {
		t.nonNull.string('title');
		t.nonNull.string('body');
	},
});

export const PostPayload = objectType({
	name: 'PostPayload',
	definition(t) {
		t.nonNull.field('post', { type: Post });
	},
});
