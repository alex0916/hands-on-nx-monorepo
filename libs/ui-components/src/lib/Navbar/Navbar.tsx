import { ReactNode, useState } from 'react';
import { CloseIcon, MenuIcon } from '../Icons';

interface NavbarProps {
	logo: ReactNode;
	options: ReactNode[];
	className?: string;
}

export function Navbar({ logo, options, className }: NavbarProps) {
	const [navbar, setNavbar] = useState(false);

	return (
		<nav className={`w-full ${className}`}>
			<div className="grid grid-cols-12">
				<div className="col-start-2 col-end-12 md:col-start-3 md:col-end-9">
					<div className="flex items-center justify-between py-3 md:py-5 md:block">
						{logo}
						<div className="md:hidden">
							<button
								className="p-2 rounded-md outline-none text-gray-700 focus:border-gray-400 dark:text-white focus:border"
								onClick={() => setNavbar(!navbar)}
							>
								{navbar ? <CloseIcon /> : <MenuIcon />}
							</button>
						</div>
					</div>
				</div>
				<div className="col-start-2 col-end-12 md:col-start-9 md:col-end-11 my-auto">
					<div role="navigation" className={`flex md:block ${navbar ? 'block' : 'hidden'} pb-3 md:pb-0`}>
						<ul className="justify-end space-y-8 md:flex md:items-center md:space-x-6 md:space-y-0">
							{options.map((option, idx) => (
								<li key={idx}>{option}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}
