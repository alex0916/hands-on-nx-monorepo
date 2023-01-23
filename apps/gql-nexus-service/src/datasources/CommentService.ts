import { RESTDataSource } from '@apollo/datasource-rest';
import { CommentModel } from '../models';


export class CommentService extends RESTDataSource {
	override baseURL = 'https://jsonplaceholder.typicode.com';

	getComments(): Promise<CommentModel[]> {
		return this.get('/comments');
	}

	getCommentsByPostId(postId: string): Promise<CommentModel[]> {
		return this.get(`/comments?postId=${postId}`);
	}

	getCommentsByPostIds(postIds: string[]): Promise<CommentModel[]> {
		const params = postIds.map((id) => `postId=${id}`).join('&');
		return this.get(`/comments?${params}`);
	}
}
