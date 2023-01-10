import { Button, ButtonSize, WelcomeIcon } from '@nx-monorepo/ui-components';
import Link from 'next/link';

export const Home = () => {
	return (
		<div className="flex flex-col md:flex-row items-center">
			<div>
				<p className="font-bold antialiased text-4xl">A place to explore the magic of posts and comments.</p>
				<Link href={'/users'}>
					<Button size="large" className="my-6">
						Get started
					</Button>
				</Link>
			</div>
			<WelcomeIcon />
		</div>
	);
};
