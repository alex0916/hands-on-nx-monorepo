import { extendType, stringArg } from 'nexus';
import { ConnectionResponse } from '../../lib/ConnectionResponse';
import { User } from '../types';

export const UserQueries = extendType({
	type: 'Query',
	definition(t) {
		t.connectionField('users', {
			type: User,
			resolve: async (_, args, { dataSources }) => {
				const users = await dataSources.userService.getUsers();
				return ConnectionResponse.fromResolver(args, users).getResponse();
			},
		});
		t.field('userById', {
			type: User,
			args: {
				id: stringArg({ description: 'id of the user' }),
			},
			resolve: (_, { id }, { dataSources }) => {
				return dataSources.userService.getUserById(id);
			},
		});
	},
});
