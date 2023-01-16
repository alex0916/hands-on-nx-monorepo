import { HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
	header?: string;
}

export const Card = ({ header, children, className, ...props }: CardProps) => {
	return (
		<div className={`p-4 block rounded-lg shadow-lg ${className}`} {...props}>
			{header ? <div className="text-left font-bold text-xl pb-4">{header}</div> : null}
			{children}
		</div>
	);
};
