import { Button, Spinner } from '@nx-monorepo/ui-components';
import { useGetCommentsByPostIdQuery } from '../../generated/graphql';
import { Error } from '..';

interface CommentsProps {
	postId: string;
	pageSize: number;
}

export const Comments = ({ postId, pageSize }: CommentsProps) => {
	const { loading, data, error, fetchMore } = useGetCommentsByPostIdQuery({
		variables: { postId, first: pageSize },
		notifyOnNetworkStatusChange: true,
	});

	const { edges: comments, pageInfo } = data?.commentsByPostId ?? {
		edges: [],
		pageInfo: { hasNextPage: false, hasPreviousPage: false },
	};

	const fetchMoreComments = () => {
		fetchMore({ variables: { postId, first: pageSize, after: pageInfo.endCursor } });
	};

	return (
		<>
			{error ? <Error message={error.message} /> : null}
			{comments.length > 0 && (
				<ul data-testid="comments" className="grid grid-cols-1 gap-4 text-gray-600 dark:text-white">
					{comments.map(({ node }) => (
						<li
							key={node.id}
							className="px-5 py-2 border border-transparent bg-gray-300 dark:bg-slate-800 rounded-full"
						>
							{node.name}
						</li>
					))}
				</ul>
			)}
			{loading && (
				<div className="flex justify-center items-center my-4">
					<Spinner dataTestId="comments-spinner" size="medium" />
				</div>
			)}
			{pageInfo.hasNextPage && (
				<div className="flex justify-center items-center mt-8">
					<Button variant="outlined" size="small" onClick={fetchMoreComments}>
						Load more
					</Button>
				</div>
			)}
		</>
	);
};
