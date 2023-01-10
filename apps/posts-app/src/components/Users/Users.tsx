import { Button, Card, Spinner, SpinnerSize } from '@nx-monorepo/ui-components';
import Link from 'next/link';
import { useState } from 'react';
import { PageInfo, useGetUsersQuery, User, UserEdge } from '../../generated/graphql';

const CardDetails = ({ label, value }: { label: string; value: number }) => (
	<div className="flex flex-col items-center">
		<p className="text-sm font-semibold">{value}</p>
		<p className="text-xs font-extralight">{label}</p>
	</div>
);

const UserCard = ({ id, avatar, name, stats: { totalComments, totalPosts } }: User) => (
	<Link href={`users/${id}`}>
		<Card className="bg-slate-900">
			<div className="flex flex-wrap flex-col items-center">
				<img
					className="w-16 h-16 p-1 rounded-full ring-2 ring-slate-300 dark:ring-slate-500"
					src={avatar}
					alt="avatar"
				/>
				<p className="pt-2 font-bold text-lg text-center">{name}</p>
				<div className="pt-2 flex flex-row space-x-4 text-center">
					<CardDetails label="Posts" value={totalPosts} />
					<CardDetails label="Comments" value={totalComments} />
				</div>
			</div>
		</Card>
	</Link>
);

export const Users = () => {
	const [cursor, setCursor] = useState<string>(null);
	const [pageInfo, setPageInfo] = useState<PageInfo>({ hasNextPage: false, hasPreviousPage: false });
	const [users, setUsers] = useState<UserEdge[]>([]);

	const { loading } = useGetUsersQuery({
		variables: { first: 6, after: cursor },
		onCompleted: (data) => {
			const { users } = data;
			setPageInfo(users.pageInfo);
			setUsers((prevUsers) => [...prevUsers, ...users.edges]);
		},
	});

	const loadMoreUsers = () => {
		setCursor(pageInfo.endCursor);
	};

	return (
		<>
			<p className="font-bold antialiased text-3xl mb-6">Users</p>
			{users.length > 0 && (
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{users.map(({ node }) => (
						<UserCard key={node.id} {...node} />
					))}
				</div>
			)}
			{loading && (
				<div className="flex justify-center items-center my-4">
					<Spinner size="medium" />
				</div>
			)}
			{pageInfo.hasNextPage && (
				<div className="mt-8 flex justify-center items-center">
					<Button variant="outlined" onClick={loadMoreUsers}>
						Load more
					</Button>
				</div>
			)}
		</>
	);
};
