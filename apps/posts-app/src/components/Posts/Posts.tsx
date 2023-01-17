import { useGetPostsQuery } from '../../generated/graphql';
import { PostsSection } from './PostsSection.';

export const Posts = () => {
	const { loading, data, error, fetchMore } = useGetPostsQuery({
		variables: { first: 9 },
		notifyOnNetworkStatusChange: true,
	});

	const { pageInfo, edges } = data?.posts ?? {};

	const fetchMorePosts = () => {
		fetchMore({ variables: { first: 9, after: pageInfo.endCursor } });
	};

	return (
		<PostsSection loading={loading} fetchMore={fetchMorePosts} posts={edges} pageInfo={pageInfo} error={error} />
	);
};
