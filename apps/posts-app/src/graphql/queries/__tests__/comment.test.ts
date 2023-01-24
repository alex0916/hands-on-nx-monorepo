import { getTestServer } from '@gql/test-server';
import { COMMENTS_BY_POST_ID } from '@gql/test-operations';
import { postsFixture, commentsFixture } from '@gql/test-fixtures';

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
