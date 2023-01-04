import { useGetPostsQuery } from '../../generated/graphql';
import { Button, Card, Spinner, SpinnerSize } from '@nx-monorepo/ui-components';

export const Posts = () => {
	const { data, loading } = useGetPostsQuery();

	if (loading) {
		return (
			<div className='flex justify-center items-center w-screen h-screen'>
				<Spinner size={SpinnerSize.Large} />
			</div>
		);
	}

	return (
		<div className="flex flex-row flex-wrap justify-between">
			{data.posts.map((post) => (
				<Card key={post.id} className="m-4 flex flex-col justify-between" header={post.title}>
					<div>{post.body}</div>
					<Button className="mt-6">See comments</Button>
				</Card>
			))}
		</div>
	);
};
