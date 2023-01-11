import { inputObjectType, objectType } from 'nexus';
import { User } from './User';

export const Post = objectType({
	name: 'Post',
	definition(t) {
		t.nonNull.id('id');
		t.string('title');
		t.string('body');
		t.field('user', {
			type: User,
			resolve: async ({ userId }, _args, { dataSources }) => dataSources.userService.getUserById(userId),
		});
		t.field('totalComments', {
			type: 'Int',
			resolve: async ({ id }, _args, { dataSources }) => {
				const comments = await dataSources.commentService.getCommentsByPostId(id);
				return comments.length;
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
