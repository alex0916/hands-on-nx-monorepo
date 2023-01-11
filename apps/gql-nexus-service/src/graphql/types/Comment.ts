import { inputObjectType, objectType } from 'nexus';

export const Comment = objectType({
	name: 'Comment',
	definition(t) {
		t.nonNull.id('id');
		t.string('name');
		t.string('email');
		t.string('body');
	},
});

export const CommentInput = inputObjectType({
	name: 'CommentInput',
	definition(t) {
		t.nonNull.id('postId');
		t.nonNull.string('name');
		t.nonNull.string('email');
		t.nonNull.string('body');
	},
});

export const CommentPayload = objectType({
	name: 'CommentPayload',
	definition(t) {
		t.nonNull.field('comment', { type: Comment });
	},
});
