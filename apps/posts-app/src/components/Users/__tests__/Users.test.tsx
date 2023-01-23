import { GraphQLError } from 'graphql';
import { fireEvent, GqlMock, render, screen } from '@posts-app/test-utils';
import { usersFixture } from '@posts-app/fixtures';
import { GetUsersDocument } from 'apps/posts-app/src/generated/graphql';
import { Users } from '../Users';

const PAGE_SIZE = 1;
const { data, dataLoadMore } = usersFixture;

const fetchErrorMock: GqlMock = {
	request: {
		query: GetUsersDocument,
		variables: { first: PAGE_SIZE },
	},
	result: {
		errors: [new GraphQLError('Users error')],
	},
};

const fetchMock: GqlMock = {
	request: {
		query: GetUsersDocument,
		variables: { first: PAGE_SIZE },
	},
	result: {
		data,
	},
};

const fetchMoreMock: GqlMock = {
	request: {
		query: GetUsersDocument,
		variables: { first: PAGE_SIZE, after: data.users.pageInfo.endCursor },
	},
	result: {
		data: dataLoadMore,
	},
};

let mocks: GqlMock[];

beforeEach(() => {
	mocks = [fetchMock];
});

const subject = () => render(<Users pageSize={PAGE_SIZE} />, { mocks });

describe('Users', () => {
	it('should show an error message', async () => {
		mocks = [fetchErrorMock];
		subject();
		await screen.findByText('Users error');
		expect(screen.queryByTestId('users')).not.toBeInTheDocument();
		expect(screen.queryByTestId('users-spinner')).not.toBeInTheDocument();
		expect(screen.queryByRole('button', { name: 'Load more' })).not.toBeInTheDocument();
	});
	
	it('should load the users', async () => {
		subject();
		await screen.findByTestId('users-spinner');
		await screen.findByTestId('users');
		await screen.findByText('Leanne Graham');
		await screen.findByRole('button', { name: 'Load more' });
		expect(screen.queryByTestId('users-spinner')).not.toBeInTheDocument();
	});

	it('should load more users', async () => {
		mocks.push(fetchMoreMock);
		subject();
		await screen.findByTestId('users');
		fireEvent.click(screen.queryByRole('button', { name: 'Load more' }));
		await screen.findByTestId('users-spinner');
		await screen.findByText('Leanne Graham');
		await screen.findByText('Ervin Howell');
		expect(screen.queryByTestId('users-spinner')).not.toBeInTheDocument();
		expect(screen.queryByRole('button', { name: 'Load more' })).not.toBeInTheDocument();
	});
});
