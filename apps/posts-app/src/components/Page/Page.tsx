import React, { PropsWithChildren, ReactNode } from 'react';
import Link from 'next/link';

import { Navbar } from '@nx-monorepo/ui-components';
import { Theme } from '..';

export interface PageProps extends PropsWithChildren {
	header?: string;
}

const Logo = () => (
	<Link href={'/'}>
		<div className="flex flex-row text-gray-600 dark:text-white text-2xl items-center tracking-wider">
			<p className="font-light">My</p>
			<p className="font-semibold">Post</p>
		</div>
	</Link>
);

export const Page = ({ children, header }: PageProps) => (
	<div className="min-h-screen bg-cover bg-no-repeat bg-fixed bg-[url('../../public/assets/images/blob.svg')] dark:bg-[url('../../public/assets/images/dark-blob.svg')] overflow-y-auto">
		<Navbar
			className="shadow mb-10"
			logo={<Logo />}
			options={[
				<Link href={'/users'} className="text-gray-600 dark:text-white">
					Users
				</Link>,
				<Link href={'/posts'} className="text-gray-600 dark:text-white">
					Posts
				</Link>,
				<Theme />,
			]}
		/>
		<div className="grid grid-cols-12 text-white mb-8">
			<div className="col-start-2 col-end-12 md:col-start-3 md:col-end-11">
				{header ? (
					<p className="font-bold antialiased text-3xl mb-6 text-gray-600 dark:text-white">{header}</p>
				) : null}
				{children}
			</div>
		</div>
	</div>
);
