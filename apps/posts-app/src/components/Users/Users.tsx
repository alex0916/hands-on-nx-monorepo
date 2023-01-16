import { Button, Spinner } from '@nx-monorepo/ui-components';
import { useGetUsersQuery } from '../../generated/graphql';
import { UsersCard } from './UsersCard';

export const Users = () => {
	const { loading, data, fetchMore } = useGetUsersQuery({
		variables: { first: 6 },
		notifyOnNetworkStatusChange: true,
	});

	const { edges: users, pageInfo } = data?.users ?? {
		edges: [],
		pageInfo: { hasNextPage: false, hasPreviousPage: false },
	};

	const fetchMoreUsers = () => {
		fetchMore({ variables: { first: 6, after: pageInfo.endCursor } });
	};

	return (
		<>
			<p className="font-bold antialiased text-3xl mb-6">Users</p>
			{users.length > 0 && (
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
					{users.map(({ node }) => (
						<UsersCard key={node.id} {...node} />
					))}
				</div>
			)}
			{loading && (
				<div className="flex justify-center items-center my-4">
					<Spinner size="medium" />
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
