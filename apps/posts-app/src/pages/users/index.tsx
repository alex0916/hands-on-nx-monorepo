import { Page, Users } from '../../components';

export default function UsersPage() {
	return (
		<Page header="Users">
			<Users pageSize={6} />
		</Page>
	);
}
