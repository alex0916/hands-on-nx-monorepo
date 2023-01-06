import { useGetPostsQuery } from '../../generated/graphql';
import { Button, Card, Spinner, SpinnerSize } from '@nx-monorepo/ui-components';

export const Posts = () => {
	const { data, loading } = useGetPostsQuery();

	if (loading) {
		return (
			<div className="flex justify-center items-center">
				<Spinner size={SpinnerSize.Large} />
			</div>
		);
	}

	return (
		<div>
			<p className="font-bold antialiased text-3xl pb-6">Posts</p>
			<div className="grid grid-cols-3 gap-4">
				{data.posts.map((post) => (
					<Card key={post.id} className="flex flex-col justify-between" header={post.title}>
						<div>{post.body}</div>
						<Button className="mt-6">See comments</Button>
					</Card>
				))}
			</div>
		</div>
	);
};
