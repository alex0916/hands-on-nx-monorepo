import { inputObjectType, objectType } from 'nexus';
import { Comment } from './Comment';

export const Post = objectType({
	name: 'Post',
	definition(t) {
		t.nonNull.id('id');
		t.string('title');
		t.string('body');
		t.nonNull.list.field('comments', {
			type: Comment,
			resolve: ({ id }, _args, { dataSources }) => dataSources.commentService.getCommentsByPostId(id),
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
