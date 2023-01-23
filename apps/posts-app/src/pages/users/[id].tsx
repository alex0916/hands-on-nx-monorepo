import { useRouter } from 'next/router';
import { Page, User } from '../../components';

export default function UserPage() {
	const { query } = useRouter();

	return (
		<Page>
			<User userId={String(query.id)} postsPageSize={3} />
		</Page>
	);
}
