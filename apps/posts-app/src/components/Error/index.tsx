import { ErrorIcon } from '@nx-monorepo/ui-components';

export const Error = ({ message }: { message: string }) => (
	<div className="flex flex-wrap items-center space-x-4 border border-red-400 rounded p-4 my-4">
		<ErrorIcon className="text-red-400 h-8 w-8" />
		<p>{message}</p>
	</div>
);
