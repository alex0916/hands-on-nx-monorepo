import { Spinner, Button } from '@nx-monorepo/ui-components';
import { PageInfo, PostEdge, User } from '../../generated/graphql';
import { PostsCard } from './PostsCard';

interface PostsSectionProps {
	loading: boolean;
	fetchMore: () => void;
	pageInfo?: PageInfo;
	posts?: PostEdge[];
	user?: User;
}

export const PostsSection = ({
	loading,
	fetchMore,
	posts = [],
	pageInfo = { hasNextPage: false, hasPreviousPage: false },
	user,
}: PostsSectionProps) => (
	<>
		<p className="font-bold antialiased text-3xl mb-6">Posts</p>
		{posts.length > 0 && (
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
				{posts.map(({ node }) => (
					<PostsCard key={node.id} user={user} {...node} />
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
				<Button variant="outlined" onClick={fetchMore}>
					Load more
				</Button>
			</div>
		)}
	</>
);
