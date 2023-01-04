import { mutationField, nonNull } from 'nexus';
import { PostInput, PostPayload } from '../types';

export const createPost = mutationField('createPost', {
	type: nonNull(PostPayload),
	args: { input: nonNull(PostInput) },
	resolve: async (_root, { input }, { dataSources }) => {
		const response = await dataSources.postService.addPost(input);
		return { post: { ...response } };
	},
});
