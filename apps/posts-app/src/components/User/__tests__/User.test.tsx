import { GraphQLError } from 'graphql';
import { fireEvent, GqlMock, render, screen } from '@posts-app/test-utils';
import { userFixture } from '@posts-app/fixtures';
import { GetUserByIdDocument } from 'apps/posts-app/src/generated/graphql';
import { User } from '../User';

const PAGE_SIZE = 1;
const USER_ID = '2';

const { data, dataLoadMore } = userFixture;

const fetchErrorMock: GqlMock = {
	request: {
		query: GetUserByIdDocument,
		variables: { userId: USER_ID, first: PAGE_SIZE },
	},
	result: {
		errors: [new GraphQLError('User error')],
	},
};

const fetchMock: GqlMock = {
	request: {
		query: GetUserByIdDocument,
		variables: { userId: USER_ID, first: PAGE_SIZE },
	},
	result: {
		data,
	},
};

const fetchMoreMock: GqlMock = {
	request: {
		query: GetUserByIdDocument,
		variables: { userId: USER_ID, first: PAGE_SIZE, after: data.userById.posts.pageInfo.endCursor },
	},
	result: {
		data: dataLoadMore,
	},
};

let mocks: GqlMock[];

beforeEach(() => {
	mocks = [fetchMock];
});

const subject = () => render(<User userId={USER_ID} postsPageSize={PAGE_SIZE} />, { mocks });

describe('User', () => {
	it('should show an error message', async () => {
		mocks = [fetchErrorMock];
		subject();
		await screen.findByText('User error');
		expect(screen.queryByTestId('user-spinner')).not.toBeInTheDocument();
		expect(screen.queryByTestId('posts')).not.toBeInTheDocument();
		expect(screen.queryByRole('button', { name: 'Load more' })).not.toBeInTheDocument();
	});

	it('should load the user with the posts', async () => {
		subject();
		await screen.findByTestId('user-spinner');
		await screen.findByTestId('posts');
		await screen.findByText('Post 1 title');
		await screen.findByRole('button', { name: 'Load more' });
		expect(await screen.findAllByText('Ervin Howell')).toHaveLength(2);
		expect(screen.queryByTestId('user-spinner')).not.toBeInTheDocument();
	});

	it('should load more posts', async () => {
		mocks.push(fetchMoreMock);
		subject();
		await screen.findByTestId('posts');
		await screen.findByText('Post 1 title');
		fireEvent.click(screen.queryByRole('button', { name: 'Load more' }));
		await screen.findByText('Post 2 title');
		expect(await screen.findAllByText('Ervin Howell')).toHaveLength(3);
		expect(screen.queryByRole('button', { name: 'Load more' })).not.toBeInTheDocument();
	});
});
