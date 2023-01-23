const data = {
	userById: {
		id: '2',
		name: 'Ervin Howell',
		username: '@Antonette',
		email: 'Shanna@melissa.tv',
		address: { city: 'Wisokyburgh', __typename: 'Address' },
		company: { name: 'Deckow-Crist', __typename: 'Company' },
		avatar: 'https://api.dicebear.com/5.x/avataaars/svg?seed=2',
		posts: {
			edges: [
				{
					cursor: '11',
					node: {
						id: '11',
						title: 'Post 1 title',
						body: 'delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi',
						totalComments: 5,
						__typename: 'Post',
					},
					__typename: 'PostEdge',
				},
			],
			pageInfo: {
				hasNextPage: true,
				hasPreviousPage: false,
				startCursor: '11',
				endCursor: '11',
				__typename: 'PageInfo',
			},
			__typename: 'PostConnection',
		},
		__typename: 'User',
	},
};

const dataLoadMore = {
	userById: {
		id: '2',
		name: 'Ervin Howell',
		username: '@Antonette',
		email: 'Shanna@melissa.tv',
		address: { city: 'Wisokyburgh', __typename: 'Address' },
		company: { name: 'Deckow-Crist', __typename: 'Company' },
		avatar: 'https://api.dicebear.com/5.x/avataaars/svg?seed=2',
		posts: {
			edges: [
				{
					cursor: '12',
					node: {
						id: '12',
						title: 'Post 2 title',
						body: 'itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio',
						totalComments: 5,
						__typename: 'Post',
					},
					__typename: 'PostEdge',
				},
			],
			pageInfo: {
				hasNextPage: false,
				hasPreviousPage: true,
				startCursor: '12',
				endCursor: '12',
				__typename: 'PageInfo',
			},
			__typename: 'PostConnection',
		},
		__typename: 'User',
	},
};

export const userFixture = { data, dataLoadMore };
