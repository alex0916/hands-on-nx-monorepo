import { Page, Posts } from '../../components';

export default function PostsPage() {
	return (
		<Page header="Posts">
			<Posts pageSize={9} />
		</Page>
	);
}
