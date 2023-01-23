const data = {
	posts: {
		edges: [
			{
				cursor: '1',
				node: {
					id: '1',
					title: 'Post 1 title',
					body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
					user: {
						id: '1',
						name: 'Leanne Graham',
						email: 'Sincere@april.biz',
						avatar: 'https://api.dicebear.com/5.x/avataaars/svg?seed=1',
						__typename: 'User',
					},
					totalComments: 5,
					__typename: 'Post',
				},
				__typename: 'PostEdge',
			},
		],
		pageInfo: {
			hasNextPage: true,
			hasPreviousPage: false,
			startCursor: '1',
			endCursor: '1',
			__typename: 'PageInfo',
		},
		__typename: 'PostConnection',
	},
};

const dataLoadMore = {
	posts: {
		edges: [
			{
				cursor: '2',
				node: {
					id: '2',
					title: 'Post 2 title',
					body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
					user: {
						id: '2',
						name: 'Adam Snow',
						email: 'adam@april.biz',
						avatar: 'https://api.dicebear.com/5.x/avataaars/svg?seed=2',
						__typename: 'User',
					},
					totalComments: 5,
					__typename: 'Post',
				},
				__typename: 'PostEdge',
			},
		],
		pageInfo: {
			hasNextPage: false,
			hasPreviousPage: true,
			startCursor: '2',
			endCursor: '2',
			__typename: 'PageInfo',
		},
		__typename: 'PostConnection',
	},
};

export const postsFixture = { data, dataLoadMore };
