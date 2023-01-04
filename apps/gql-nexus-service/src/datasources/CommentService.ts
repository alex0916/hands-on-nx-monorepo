import { RESTDataSource } from '@apollo/datasource-rest';

export type Comment = {
	id: string;
	postId: string;
	name: string;
	email: string;
	body: string;
};

export class CommentService extends RESTDataSource {
	override baseURL = 'https://jsonplaceholder.typicode.com';

	async getComments(): Promise<Comment[]> {
		return this.get('/comments');
	}

	async getCommentsByPostId(postId: string): Promise<Comment[]> {
		return this.get('/comments', { params: { postId } });
	}
}
