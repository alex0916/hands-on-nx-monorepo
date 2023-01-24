import { getTestServer } from '@gql/test-server';
import { POSTS } from '@gql/test-operations';
import { postsFixture, commentsFixture, usersFixture } from '@gql/test-fixtures';

const { mockContext, executeOperation } = getTestServer();

const subject = async (variables: Record<string, unknown>) =>
	executeOperation(
		{
			query: POSTS,
			variables,
		},
		{ contextValue: mockContext }
	);

afterEach(() => {
	jest.resetAllMocks();
});

describe('Posts queries', () => {
	it('should resolve the posts', async () => {
		const { postService, commentService, userService } = mockContext.dataSources;
		postService.getPosts = jest.fn().mockResolvedValue(postsFixture);

		commentService.getCommentsByPostId = jest.fn((id: string) =>
			Promise.resolve(commentsFixture.filter(({ postId }) => postId === id))
		);

		userService.getUserById = jest.fn((userId: string) =>
			Promise.resolve(usersFixture.find(({ id }) => id === userId))
		);

		const { data, errors } = await subject({ first: 2 });
		expect(errors).toBeUndefined();
		expect(data).toMatchSnapshot();
	});
});
