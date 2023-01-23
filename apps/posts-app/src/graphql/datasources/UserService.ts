import { RESTDataSource } from '@apollo/datasource-rest';
import { UserModel } from '../models';

export class UserService extends RESTDataSource {
	override baseURL = 'https://jsonplaceholder.typicode.com';

	getUsers(): Promise<UserModel[]> {
		return this.get('/users');
	}

	getUserById(userId: string): Promise<UserModel> {
		return this.get(`/users/${userId}`);
	}
}
