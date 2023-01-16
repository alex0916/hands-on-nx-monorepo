import Link from 'next/link';
import { Card } from '@nx-monorepo/ui-components';
import { User } from '../../generated/graphql';

const CardDetails = ({ label, value }: { label: string; value: number }) => (
	<div className="flex flex-col items-center">
		<p className="text-sm font-semibold">{value}</p>
		<p className="text-xs font-extralight">{label}</p>
	</div>
);

export const UsersCard = ({ id, avatar, name, stats: { totalComments, totalPosts } }: User) => (
	<Link href={`users/${id}`}>
		<Card className="bg-slate-900">
			<div className="flex flex-wrap flex-col items-center">
				<img
					className="w-16 h-16 p-1 rounded-full ring-2 ring-slate-300 dark:ring-slate-500"
					src={avatar}
					alt="avatar"
				/>
				<p className="font-bold text-lg text-center pt-2">{name}</p>
				<div className="flex flex-row space-x-4 text-center pt-2">
					<CardDetails label="Posts" value={totalPosts} />
					<CardDetails label="Comments" value={totalComments} />
				</div>
			</div>
		</Card>
	</Link>
);
