import { ReactNode } from 'react';
import Link from 'next/link';

import { Navbar } from '@nx-monorepo/ui-components';

interface PageProps {
	children: ReactNode;
}

const Logo = () => (
	<Link href={'/'}>
		<div className="flex flex-row text-white text-2xl items-center tracking-wider">
			<p className="font-light">My</p>
			<p className="font-semibold">Post</p>
		</div>
	</Link>
);

export const Page = ({ children }: PageProps) => {
	return (
		<div className="min-h-screen bg-cover bg-no-repeat bg-fixed bg-[url('../public/assets/images/blob-scene-haikei.svg')] overflow-y-auto">
			{/**
			 * @TODO update navbar props
			 */}
			<Navbar
				className="shadow mb-10"
				logo={<Logo />}
				options={[
					<Link href={'users'} className="text-white">
						Users
					</Link>,
					<Link href={'posts'} className="text-white">
						Posts
					</Link>,
				]}
			/>
			<div className="grid grid-cols-12 text-white mb-8">
				<div className="col-start-2 col-end-12 md:col-start-3 md:col-end-11">{children}</div>
			</div>
		</div>
	);
};
