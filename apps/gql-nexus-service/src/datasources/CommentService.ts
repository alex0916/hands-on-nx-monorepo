import { RESTDataSource } from '@apollo/datasource-rest';
import { NexusGenObjects } from '../generated/nexus-typegen';

type Comment = NexusGenObjects['Comment'];

export class CommentService extends RESTDataSource {
	override baseURL = 'https://jsonplaceholder.typicode.com';

	getComments(): Promise<Comment[]> {
		return this.get('/comments');
	}

	getCommentsByPostId(postId: string): Promise<Comment[]> {
		return this.get(`/comments?postId=${postId}`);
	}

	getCommentsByPostIds(postIds: string[]): Promise<Comment[]> {
		const params = postIds.map((id) => `postId=${id}`).join('&');
		return this.get(`/comments?${params}`);
	}
}
