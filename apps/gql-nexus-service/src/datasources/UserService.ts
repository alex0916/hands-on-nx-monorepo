import { RESTDataSource } from '@apollo/datasource-rest';
import { NexusGenObjects } from '../generated/nexus-typegen';

type User = NexusGenObjects['User'];

export class UserService extends RESTDataSource {
	override baseURL = 'https://jsonplaceholder.typicode.com';

	getUsers(): Promise<User[]> {
		return this.get('/users');
	}

	getUserById(userId: string): Promise<User> {
		return this.get(`/users/${userId}`);
	}
}
