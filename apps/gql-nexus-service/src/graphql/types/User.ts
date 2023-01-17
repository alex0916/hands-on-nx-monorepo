import { objectType } from 'nexus';
import { ConnectionResponse } from '../../lib/ConnectionResponse';
import { Post } from './Post';

export const Company = objectType({
	name: 'Company',
	definition(t) {
		t.string('name');
		t.string('catchPhrase');
		t.string('bs');
	},
});

export const Address = objectType({
	name: 'Address',
	definition(t) {
		t.string('street');
		t.string('suite');
		t.string('city');
		t.string('zipcode');
	},
});

export const UserStats = objectType({
	name: 'UserStats',
	definition(t) {
		t.int('totalPosts');
		t.int('totalComments');
	},
});

export const User = objectType({
	name: 'User',
	definition(t) {
		t.nonNull.id('id');
		t.string('name');
		t.field('username', { type: 'String', resolve: ({ username }) => `@${username}` });
		t.string('email');
		t.string('phone');
		t.string('website');
		t.field('address', { type: Address });
		t.field('company', { type: Company });
		t.field('avatar', {
			type: 'String',
			resolve: ({ id }) => `https://api.dicebear.com/5.x/avataaars/svg?seed=${id}`,
		});
		t.field('stats', {
			type: UserStats,
			resolve: async ({ id }, _args, { dataSources }) => {
				const posts = await dataSources.postService.getPostsByUserId(id);
				const comments = await dataSources.commentService.getCommentsByPostIds(posts.map(({ id }) => id));
				return {
					totalPosts: posts.length,
					totalComments: comments.length,
				};
			},
		});
		t.connectionField('posts', {
			type: Post,
			resolve: async ({ id }, args, { dataSources }) => {
				const posts = await dataSources.postService.getPostsByUserId(id);
				return ConnectionResponse.fromResolver(args, posts).getResponse();
			},
		});
	},
});

export const UserPayload = objectType({
	name: 'UserPayload',
	definition(t) {
		t.nonNull.field('user', { type: User });
	},
});
