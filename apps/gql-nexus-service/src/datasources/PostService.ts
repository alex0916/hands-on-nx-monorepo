import { RESTDataSource } from '@apollo/datasource-rest';
import type { NexusGenInputs } from '../generated/nexus-typegen';

export type Post = {
	id: string;
	title: string;
	body: string;
	userId: string;
};

export class PostService extends RESTDataSource {
	override baseURL = 'https://jsonplaceholder.typicode.com';

	async getPosts(): Promise<Post[]> {
		return this.get('/posts');
	}

	async addPost(data: NexusGenInputs['PostInput']): Promise<Post> {
		return this.post('/posts', {
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			// @TODO add user from context
			body: { userId: 1, ...data },
		});
	}
}
