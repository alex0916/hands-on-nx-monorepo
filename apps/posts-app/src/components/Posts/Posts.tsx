import { useGetPostsQuery } from '../../generated/graphql';
import { PostsSection } from './PostsSection.';

export const Posts = ({ pageSize }: { pageSize: number }) => {
	const { loading, data, error, fetchMore } = useGetPostsQuery({
		variables: { first: pageSize },
		notifyOnNetworkStatusChange: true,
	});

	const { pageInfo, edges } = data?.posts ?? {};

	const fetchMorePosts = () => {
		fetchMore({ variables: { first: pageSize, after: pageInfo.endCursor } });
	};

	return (
		<PostsSection loading={loading} fetchMore={fetchMorePosts} posts={edges} pageInfo={pageInfo} error={error} />
	);
};
