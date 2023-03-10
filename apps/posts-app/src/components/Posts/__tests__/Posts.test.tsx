import { GraphQLError } from 'graphql';
import { fireEvent, GqlMock, render, screen } from '@app/test-utils';
import { commentsFixture, postsFixture } from '@app/test-fixtures';
import { GetCommentsByPostIdDocument, GetPostsDocument } from '@app/generated';
import { Posts } from '../Posts';

const PAGE_SIZE = 1;
const { data, dataLoadMore } = postsFixture;

const fetchErrorMock: GqlMock = {
	request: {
		query: GetPostsDocument,
		variables: { first: PAGE_SIZE },
	},
	result: {
		errors: [new GraphQLError('Posts error')],
	},
};

const fetchMock: GqlMock = {
	request: {
		query: GetPostsDocument,
		variables: { first: PAGE_SIZE },
	},
	result: {
		data,
	},
};

const fetchMoreMock: GqlMock = {
	request: {
		query: GetPostsDocument,
		variables: { first: PAGE_SIZE, after: data.posts.pageInfo.endCursor },
	},
	result: {
		data: dataLoadMore,
	},
};

let mocks: GqlMock[];

beforeEach(() => {
	mocks = [fetchMock];
});

const subject = () => render(<Posts pageSize={PAGE_SIZE} />, { mocks });

describe('Posts', () => {
	it('should show an error message', async () => {
		mocks = [fetchErrorMock];
		subject();
		await screen.findByText('Posts error');
		expect(screen.queryByTestId('posts')).not.toBeInTheDocument();
		expect(screen.queryByTestId('posts-spinner')).not.toBeInTheDocument();
		expect(screen.queryByRole('button', { name: 'Load more' })).not.toBeInTheDocument();
	});

	it('should load the posts', async () => {
		subject();
		await screen.findByTestId('posts-spinner');
		await screen.findByTestId('posts');
		await screen.findByText('Leanne Graham');
		await screen.findByText('Post 1 title');
		await screen.findByRole('button', { name: 'Load more' });
		expect(screen.queryByTestId('posts-spinner')).not.toBeInTheDocument();
	});

	it('should extend the selected post', async () => {
		mocks.push({
			request: {
				query: GetCommentsByPostIdDocument,
				variables: { postId: '1', first: 5 },
			},
			result: {
				data: commentsFixture.data,
			},
		});
		subject();
		await screen.findByTestId('posts');
		fireEvent.click(screen.queryByText('Leanne Graham'));
		await screen.findByTestId('comments');
		await screen.findByText('Comment 1');
	});

	it('should load more posts', async () => {
		mocks.push(fetchMoreMock);
		subject();
		await screen.findByTestId('posts');
		fireEvent.click(screen.queryByRole('button', { name: 'Load more' }));
		await screen.findByTestId('posts-spinner');
		await screen.findByText('Leanne Graham');
		await screen.findByText('Post 1 title');
		await screen.findByText('Adam Snow');
		await screen.findByText('Post 2 title');
		expect(screen.queryByTestId('posts-spinner')).not.toBeInTheDocument();
		expect(screen.queryByRole('button', { name: 'Load more' })).not.toBeInTheDocument();
	});
});
