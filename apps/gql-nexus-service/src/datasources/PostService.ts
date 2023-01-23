import { RESTDataSource } from '@apollo/datasource-rest';
import { PostModel } from '../models';

export class PostService extends RESTDataSource {
	override baseURL = 'https://jsonplaceholder.typicode.com';

	getPosts(): Promise<PostModel[]> {
		return this.get('/posts');
	}

	getPostsByUserId(userId: string): Promise<PostModel[]> {
		return this.get(`/posts?userId=${userId}`);
	}
}
