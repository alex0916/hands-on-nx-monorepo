const data = {
	users: {
		edges: [
			{
				cursor: '1',
				node: {
					id: '1',
					avatar: 'https://api.dicebear.com/5.x/avataaars/svg?seed=1',
					email: 'Sincere@april.biz',
					name: 'Leanne Graham',
					stats: { totalComments: 50, totalPosts: 10, __typename: 'UserStats' },
				},
				__typename: 'UserEdge',
			},
		],
		pageInfo: {
			hasNextPage: true,
			hasPreviousPage: false,
			startCursor: '1',
			endCursor: '1',
			__typename: 'PageInfo',
		},
		__typename: 'UserConnection',
	},
};

const dataLoadMore = {
	users: {
		edges: [
			{
				cursor: '2',
				node: {
					id: '2',
					avatar: 'https://api.dicebear.com/5.x/avataaars/svg?seed=2',
					email: 'Shanna@melissa.tv',
					name: 'Ervin Howell',
					stats: { totalComments: 50, totalPosts: 10, __typename: 'UserStats' },
					__typename: 'User',
				},
				__typename: 'UserEdge',
			},
		],
		pageInfo: {
			hasNextPage: false,
			hasPreviousPage: true,
			startCursor: '2',
			endCursor: '2',
			__typename: 'PageInfo',
		},
		__typename: 'UserConnection',
	},
};

export const usersFixture = { data, dataLoadMore };
