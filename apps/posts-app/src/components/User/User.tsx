import Image from 'next/image';
import { CompanyIcon, EmailIcon, LocationIcon, Spinner } from '@nx-monorepo/ui-components';
import { useGetUserByIdQuery } from '../../generated/graphql';
import { PostsSection } from '../Posts/PostsSection.';
import { Error } from '..';

export const User = ({ userId, postsPageSize }: { userId: string; postsPageSize: number }) => {
	const { loading, data, error, fetchMore } = useGetUserByIdQuery({
		variables: { userId, first: postsPageSize },
		notifyOnNetworkStatusChange: true,
	});

	const { userById: user } = data ?? {};

	const fetchMorePosts = () => {
		fetchMore({ variables: { userId: user.id, first: postsPageSize, after: user.posts.pageInfo.endCursor } });
	};

	if (loading && !user) {
		return (
			<div className="flex justify-center items-center my-4">
				<Spinner dataTestId="user-spinner" size="medium" />
			</div>
		);
	}

	return (
		<>
			{error ? <Error message={error.message} /> : null}
			{user ? (
				<div className="flex flex-col md:flex-row flex-wrap space-x-0 md:space-x-8 md:items-center md:justify-center pb-8 text-gray-600 dark:text-white">
					<Image
						className="w-64 h-64 p-1 rounded-full ring-2 ring-slate-300 bg-gray-200 dark:bg-gray-800 m-auto md:m-0"
						src={user.avatar}
						alt="avatar"
						width={50}
						height={50}
					/>
					<div className="flex flex-col space-y-2">
						<div className="flex flex-col space-y-2 text-center md:text-start my-4">
							<p className="text-4xl">{user.name}</p>
							<p className="text-sm">{user.username}</p>
						</div>
						<div className="flex flex-col space-y-4">
							<div className="flex flex-row space-x-2">
								<EmailIcon className="w-6 h-6" />
								<p className="text-base">{user.email}</p>
							</div>
							<div className="flex flex-row space-x-2">
								<LocationIcon className="w-6 h-6" />
								<p className="text-base">{user.address.city}</p>
							</div>
							<div className="flex flex-row space-x-2">
								<CompanyIcon className="w-6 h-6" />
								<p className="text-base">{user.company.name}</p>
							</div>
						</div>
					</div>
				</div>
			) : null}
			<PostsSection
				loading={loading}
				fetchMore={fetchMorePosts}
				posts={user?.posts?.edges}
				pageInfo={user?.posts?.pageInfo}
				user={user}
			/>
		</>
	);
};
