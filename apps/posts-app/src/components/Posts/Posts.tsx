import { useState } from 'react';

import { Button, Card, Spinner } from '@nx-monorepo/ui-components';
import { PageInfo, Post, PostEdge, useGetPostsQuery } from '../../generated/graphql';

const PostCard = ({ title, body, totalComments, user }: Post) => (
	<Card className="flex flex-col h-full bg-slate-900">
		<div className="flex flex-wrap flex-row items-center">
			<img
				className="w-10 h-10 p-1 rounded-full ring-2 ring-slate-300 dark:ring-slate-500"
				src={user.avatar}
				alt="avatar"
			/>
			<div className="flex flex-wrap flex-col items-start ml-4">
				<p className="font-semibold text-sm">{user.name}</p>
				<p className="font-extralight text-xs">{user.email}</p>
			</div>
		</div>
		<div className="flex flex-wrap flex-col mt-3 mb-5">
			<p className="font-bold text-xl mb-2">{title}</p>
			<p className="text-sm">{body}</p>
		</div>
		<div className="flex flex-col mt-auto border border-transparent border-t-slate-500">
			<p className="self-end text-xs pt-2">{totalComments} comments</p>
		</div>
	</Card>
);

export const Posts = () => {
	const [cursor, setCursor] = useState<string>(null);
	const [pageInfo, setPageInfo] = useState<PageInfo>({ hasNextPage: false, hasPreviousPage: false });
	const [posts, setPosts] = useState<PostEdge[]>([]);

	const { loading } = useGetPostsQuery({
		variables: { first: 9, after: cursor },
		onCompleted: (data) => {
			const { posts } = data;
			setPageInfo(posts.pageInfo);
			setPosts((prevPosts) => [...prevPosts, ...posts.edges]);
		},
	});

	const loadMorePosts = () => {
		setCursor(pageInfo.endCursor);
	};

	return (
		<>
			<p className="font-bold antialiased text-3xl mb-6">Posts</p>
			{posts.length > 0 && (
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
					{posts.map(({ node }) => (
						<PostCard key={node.id} {...node} />
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
					<Button variant="outlined" onClick={loadMorePosts}>
						Load more
					</Button>
				</div>
			)}
		</>
	);
};
