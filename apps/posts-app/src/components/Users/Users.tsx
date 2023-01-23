import { Button, Spinner } from '@nx-monorepo/ui-components';
import { useGetUsersQuery } from '../../generated/graphql';
import { UsersCard } from './UsersCard';
import { Error } from '..';

export const Users = ({ pageSize }: { pageSize: number }) => {
	const { loading, data, error, fetchMore } = useGetUsersQuery({
		variables: { first: pageSize },
		notifyOnNetworkStatusChange: true,
	});

	const { edges: users, pageInfo } = data?.users ?? {
		edges: [],
		pageInfo: { hasNextPage: false, hasPreviousPage: false },
	};

	const fetchMoreUsers = () => {
		fetchMore({ variables: { first: pageSize, after: pageInfo.endCursor } });
	};

	return (
		<>
			{error ? <Error message={error.message} /> : null}
			{users.length > 0 && (
				<ul data-testid="users" className="grid grid-cols-1 lg:grid-cols-3 gap-4">
					{users.map(({ node }) => (
						<li key={node.id}>
							<UsersCard {...node} />
						</li>
					))}
				</ul>
			)}
			{loading && (
				<div className="flex justify-center items-center my-4">
					<Spinner dataTestId="users-spinner" size="medium" />
				</div>
			)}
			{pageInfo.hasNextPage && (
				<div className="flex justify-center items-center mt-8">
					<Button variant="outlined" onClick={fetchMoreUsers}>
						Load more
					</Button>
				</div>
			)}
		</>
	);
};
