import { Button, WelcomeIcon } from '@nx-monorepo/ui-components';
import Link from 'next/link';

export const Home = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2">
            <div className='m-auto'>
    			<p className="font-bold antialiased text-4xl">A place to explore the magic of posts and comments.</p>
                <Link href={'/posts'}>
					<Button className='my-6'>Get started</Button>
				</Link>
            </div>
			<WelcomeIcon className="m-auto" />
		</div>
	);
};
