import { GraphQLError } from 'graphql';
import { fireEvent, GqlMock, render, screen } from 'apps/posts-app/src/test/test-utils';
import { commentsFixture } from 'apps/posts-app/src/test/fixtures';
import { GetCommentsByPostIdDocument } from 'apps/posts-app/src/generated/graphql';
import { Comments } from '../Comments';

const PAGE_SIZE = 1;
const POST_ID = '1';
const { data, dataLoadMore } = commentsFixture;

const fetchErrorMock: GqlMock = {
	request: {
		query: GetCommentsByPostIdDocument,
		variables: { postId: POST_ID, first: PAGE_SIZE },
	},
	result: {
		errors: [new GraphQLError('Comments error')],
	},
};

const fetchMock: GqlMock = {
	request: {
		query: GetCommentsByPostIdDocument,
		variables: { postId: POST_ID, first: PAGE_SIZE },
	},
	result: {
		data,
	},
};

const fetchMoreMock: GqlMock = {
	request: {
		query: GetCommentsByPostIdDocument,
		variables: { postId: POST_ID, first: PAGE_SIZE, after: data.commentsByPostId.pageInfo.endCursor },
	},
	result: {
		data: dataLoadMore,
	},
};

let mocks: GqlMock[];

beforeEach(() => {
	mocks = [fetchMock];
});

const subject = () => render(<Comments postId={POST_ID} pageSize={PAGE_SIZE} />, { mocks });

describe('Comments', () => {
	it('should show an error message', async () => {
		mocks = [fetchErrorMock];
		subject();
		await screen.findByText('Comments error');
		expect(screen.queryByTestId('comments')).not.toBeInTheDocument();
		expect(screen.queryByTestId('comments-spinner')).not.toBeInTheDocument();
		expect(screen.queryByRole('button', { name: 'Load more' })).not.toBeInTheDocument();
	});

	it('should load the comments', async () => {
		subject();
		await screen.findByTestId('comments-spinner');
		await screen.findByTestId('comments');
		await screen.findByText('Comment 1');
		await screen.findByRole('button', { name: 'Load more' });
		expect(screen.queryByTestId('comments-spinner')).not.toBeInTheDocument();
	});

	it('should load more comments', async () => {
		mocks.push(fetchMoreMock);
		subject();
		await screen.findByTestId('comments');
		fireEvent.click(screen.queryByRole('button', { name: 'Load more' }));
		await screen.findByTestId('comments-spinner');
		await screen.findByText('Comment 1');
		await screen.findByText('Comment 2');
		expect(screen.queryByTestId('comments-spinner')).not.toBeInTheDocument();
		expect(screen.queryByRole('button', { name: 'Load more' })).not.toBeInTheDocument();
	});
});
