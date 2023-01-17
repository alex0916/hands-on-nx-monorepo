import { Spinner, Button } from '@nx-monorepo/ui-components';
import { useState } from 'react';
import { PageInfo, Post, PostEdge, User } from '../../generated/graphql';
import { useModal } from '../../hooks';
import { PostCard, PostModal } from '..';

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
}: PostsSectionProps) => {
	const [selectedPost, setSelectedPost] = useState<Post>(null);
	const { isDisplayed, hideModal, showModal } = useModal();

	const handlePostClick = (post: Post) => {
		setSelectedPost({ ...(user && { user }), ...post });
		showModal();
	};

	return (
		<>
			<p className="font-bold antialiased text-3xl mb-6 text-gray-600 dark:text-white">Posts</p>
			<PostModal isDisplayed={isDisplayed} hideModal={hideModal} post={selectedPost} />
			{posts.length > 0 && (
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-gray-600 dark:text-white">
					{posts.map(({ node }) => (
						<PostCard key={node.id} onPostClick={() => handlePostClick(node)} user={user} {...node} />
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
};
