const data = {
	commentsByPostId: {
		edges: [
			{
				cursor: '1',
				node: { id: '1', name: 'Comment 1', __typename: 'Comment' },
				__typename: 'CommentEdge',
			},
		],
		pageInfo: {
			hasNextPage: true,
			hasPreviousPage: false,
			startCursor: '1',
			endCursor: '1',
			__typename: 'PageInfo',
		},
		__typename: 'CommentConnection',
	},
};
const dataLoadMore = {
	commentsByPostId: {
		edges: [
			{
				cursor: '2',
				node: { id: '2', name: 'Comment 2', __typename: 'Comment' },
				__typename: 'CommentEdge',
			},
		],
		pageInfo: {
			hasNextPage: false,
			hasPreviousPage: true,
			startCursor: '2',
			endCursor: '2',
			__typename: 'PageInfo',
		},
		__typename: 'CommentConnection',
	},
};

export const commentsFixture = { data, dataLoadMore };
