import { Card } from '@nx-monorepo/ui-components';
import { Post } from '../../generated/graphql';

export const PostCard = ({ title, body, totalComments, user, onPostClick }: Post & { onPostClick: () => void }) => (
	<Card className="flex flex-col h-full bg-gray-200 dark:bg-slate-900 cursor-pointer" onClick={onPostClick}>
		<div className="flex flex-wrap flex-row items-center">
			<img
				className="w-10 h-10 p-1 rounded-full ring-2 ring-slate-300 dark:ring-slate-500"
				src={user.avatar}
				alt="avatar"
			/>
			<div className="flex flex-wrap flex-col items-start ml-4">
				<p className="font-semibold text-sm">{user.name}</p>
				<p className="font-extralight text-xs">{user.email}</p>
			</div>
		</div>
		<div className="flex flex-wrap flex-col mt-3 mb-5">
			<p className="font-bold text-xl mb-2">{title}</p>
			<p className="text-sm">{body}</p>
		</div>
		<div className="flex flex-col mt-auto border border-transparent border-t-slate-500">
			<p className="self-end text-xs pt-2">{totalComments} comments</p>
		</div>
	</Card>
);
