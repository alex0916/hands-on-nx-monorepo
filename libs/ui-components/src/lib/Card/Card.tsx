import { HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
	header: string;
}

export const Card = ({ header, children, className, ...props }: CardProps) => {
	return (
		<div className={`border border-2 p-4 block rounded-lg shadow-lg max-w-sm ${className}`} {...props}>
			<div className="text-left font-bold text-xl pb-4">{header}</div>
			{children}
		</div>
	);
};
