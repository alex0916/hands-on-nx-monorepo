import { useState } from 'react';
import { ApolloError } from '@apollo/client';
import { Spinner, Button } from '@nx-monorepo/ui-components';
import { PageInfo, Post, PostEdge, User } from '../../generated/graphql';
import { useModal } from '../../hooks';
import { Error, PostsCard, PostModal } from '..';

interface PostsSectionProps {
	loading: boolean;
	fetchMore: () => void;
	pageInfo?: PageInfo;
	posts?: PostEdge[];
	user?: User;
	error?: ApolloError;
}

export const PostsSection = ({
	loading,
	fetchMore,
	posts = [],
	pageInfo = { hasNextPage: false, hasPreviousPage: false },
	user,
	error,
}: PostsSectionProps) => {
	const [selectedPost, setSelectedPost] = useState<Post>(null);
	const { isDisplayed, hideModal, showModal } = useModal();

	const handlePostClick = (post: Post) => {
		setSelectedPost({ ...(user && { user }), ...post });
		showModal();
	};

	return (
		<>
			<PostModal isDisplayed={isDisplayed} hideModal={hideModal} post={selectedPost} />
			{error ? <Error message={error.message} /> : null}
			{posts.length > 0 && (
				<ul data-testid="posts" className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-gray-600 dark:text-white">
					{posts.map(({ node }) => (
						<li key={node.id}>
							<PostsCard onPostClick={() => handlePostClick(node)} user={user} {...node} />
						</li>
					))}
				</ul>
			)}
			{loading && (
				<div className="flex justify-center items-center my-4">
					<Spinner dataTestId='posts-spinner' size="medium" />
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
