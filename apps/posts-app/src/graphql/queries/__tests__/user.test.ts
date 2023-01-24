import { DocumentNode } from 'graphql';
import { getTestServer } from '@gql/test-server';
import { USERS, USER_BY_ID } from '@gql/test-operations';
import { usersFixture, postsFixture, commentsFixture } from '@gql/test-fixtures';

const { mockContext, executeOperation } = getTestServer();
let query: DocumentNode;

const subject = (variables: Record<string, unknown>) =>
	executeOperation(
		{
			query,
			variables,
		},
		{ contextValue: mockContext }
	);

afterEach(() => {
	jest.resetAllMocks();
});

describe('User queries', () => {
	beforeEach(() => {
		query = null;
		const { postService } = mockContext.dataSources;
		postService.getPostsByUserId = jest.fn((id: string) =>
			Promise.resolve(postsFixture.filter(({ userId }) => userId === id))
		);
	});

	describe('users', () => {
		beforeEach(() => {
			query = USERS;
			const { userService, commentService } = mockContext.dataSources;

			userService.getUsers = jest.fn().mockResolvedValue(usersFixture);
			commentService.getCommentsByPostIds = jest.fn((postIds: string[]) =>
				Promise.resolve(commentsFixture.filter(({ postId }) => postIds.includes(postId)))
			);
		});

		it('should resolve the users', async () => {
			const { data, errors } = await subject({ first: 1 });
			expect(errors).toBeUndefined();
			expect(data).toMatchSnapshot();
		});

		it('should resolve next page', async () => {
			const { data, errors } = await subject({ first: 1, after: usersFixture[0].id });
			expect(errors).toBeUndefined();
			expect(data).toMatchSnapshot();
		});

		it('should resolve no more results', async () => {
			const { data, errors } = await subject({ first: 1, after: usersFixture[1].id });
			expect(errors).toBeUndefined();
			expect(data).toMatchSnapshot();
		});

		it('should throw with unknown cursor', async () => {
			const { data, errors } = await subject({ first: 1, after: 'unknown' });
			expect(data).toMatchObject({ users: null });
			expect(errors).toMatchSnapshot();
		});
	});

	describe('userById', () => {
		beforeEach(() => {
			query = USER_BY_ID;
			const { userService, commentService } = mockContext.dataSources;

			userService.getUserById = jest.fn((userId: string) =>
				Promise.resolve(usersFixture.find(({ id }) => id === userId))
			);

			commentService.getCommentsByPostId = jest.fn((id: string) =>
				Promise.resolve(commentsFixture.filter(({ postId }) => postId === id))
			);
		});

		it('should resolve a user with posts', async () => {
			const { data, errors } = await subject({ userId: usersFixture[0].id, first: 1 });
			expect(errors).toBeUndefined();
			expect(data).toMatchSnapshot();
		});
	});
});
