import { Button, Spinner } from '@nx-monorepo/ui-components';
import { useGetCommentsByPostIdQuery } from '../../generated/graphql';
import { Error } from '..';

interface CommentsProps {
	postId: string;
}

export const Comments = ({ postId }: CommentsProps) => {
	const { loading, data, error, fetchMore } = useGetCommentsByPostIdQuery({ variables: { postId, first: 5 } });

	const { edges: comments, pageInfo } = data?.commentsByPostId ?? {
		edges: [],
		pageInfo: { hasNextPage: false, hasPreviousPage: false },
	};

	const fetchMoreComments = () => {
		fetchMore({ variables: { postId, first: 5, after: pageInfo.endCursor } });
	};

	return (
		<>
			{error ? <Error message={error.message} /> : null}
			{comments.length > 0 && (
				<div className="grid grid-cols-1 gap-4 text-gray-600 dark:text-white">
					{comments.map(({ node }) => (
						<p className="px-5 py-2 border border-transparent bg-gray-300 dark:bg-slate-800 rounded-full">
							{node.name}
						</p>
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
					<Button variant="outlined" size="small" onClick={fetchMoreComments}>
						Load more
					</Button>
				</div>
			)}
		</>
	);
};
