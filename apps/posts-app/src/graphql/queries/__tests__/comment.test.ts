import { getTestServer } from 'apps/posts-app/src/graphql/test/server';
import { COMMENTS_BY_POST_ID } from 'apps/posts-app/src/graphql/test/operations';
import { postsFixture, commentsFixture } from 'apps/posts-app/src/graphql/test/fixtures';

const { mockContext, executeOperation } = getTestServer();

const subject = async (variables: Record<string, unknown>) =>
	await executeOperation(
		{
			query: COMMENTS_BY_POST_ID,
			variables,
		},
		{ contextValue: mockContext }
	);

afterEach(() => {
	jest.resetAllMocks();
});

describe('Comments queries', () => {
	it('should resolve the comments', async () => {
		const { commentService } = mockContext.dataSources;

		commentService.getCommentsByPostId = jest.fn((id: string) =>
			Promise.resolve(commentsFixture.filter(({ postId }) => postId === id))
		);

		const { data, errors } = await subject({ postId: postsFixture[0].id, first: 2 });
		expect(errors).toBeUndefined();
		expect(data).toMatchSnapshot();
	});
});
