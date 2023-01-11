import { RESTDataSource } from '@apollo/datasource-rest';
import type { NexusGenArgTypes, NexusGenObjects } from '../generated/nexus-typegen';
import { ConnectionResponse } from '../lib/ConnectionResponse';

type Post = NexusGenObjects['Post'];

export class PostService extends RESTDataSource {
	override baseURL = 'https://jsonplaceholder.typicode.com';

	getPosts(): Promise<Post[]> {
		return this.get('/posts');
	}

	getPostsByUserId(userId: string): Promise<Post[]> {
		return this.get(`/posts?userId=${userId}`);
	}
}
