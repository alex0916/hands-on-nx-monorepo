import { ReactNode } from 'react';
import Link from 'next/link';

import { Navbar } from '@nx-monorepo/ui-components';
import { Home } from '../Home';

interface PageProps {
	children: ReactNode;
}

const Logo = () => (
	<Link href={'/'}>
		<div className="text-xl font-bold text-white">@TODO</div>
	</Link>
);

export const Page = ({ children }: PageProps) => {
	return (
		<div className="min-h-screen w-screen bg-cover bg-no-repeat bg-fixed bg-center bg-[url('../public/assets/images/wave-haikei.svg')] overflow-y-auto">
			{/**
			 * @TODO update navbar props
			 */}
			<Navbar
				className="shadow mb-10"
				logo={<Logo />}
				options={[<div className="text-white">Version</div>]}
			/>
			<div className="grid grid-cols-12 text-white mb-8">
				<div className="col-start-2 col-end-12 md:col-start-3 md:col-end-11">{children}</div>
			</div>
		</div>
	);
};
