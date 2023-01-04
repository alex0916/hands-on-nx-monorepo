import { extendType } from 'nexus';
import { Post } from '../types';

export const PostQuery = extendType({
	type: 'Query',
	definition(t) {
		t.nonNull.list.field('posts', {
			type: Post,
			resolve: (_root, _args, { dataSources }) => dataSources.postService.getPosts(),
		});
	},
});
