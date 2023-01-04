import { ButtonHTMLAttributes } from 'react';

export enum ButtonSize {
	Small = 'Small',
	Medium = 'Medium',
	Large = 'Large',
}

export const buttonSizeClasses = {
	[ButtonSize.Small]: 'px-4 py-2',
	[ButtonSize.Medium]: 'px-6 py-3',
	[ButtonSize.Large]: 'px-8 py-4',
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	size?: ButtonSize;
	colorClass?: string;
}

export const Button = ({
	size = ButtonSize.Medium,
	colorClass = 'bg-teal-400',
	className,
	children,
	...props
}: ButtonProps) => {
	return (
		<button
			{...props}
			className={`inline-block rounded shadow-md text-white font-semibold text-lg tracking-wide ${className} ${colorClass} ${buttonSizeClasses[size]}`}
		>
			{children}
		</button>
	);
};
