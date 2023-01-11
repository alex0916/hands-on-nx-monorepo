import { ButtonHTMLAttributes } from 'react';

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonVariant = 'outlined' | 'contained';

export type ButtonColor = 'teal' | 'slate';

export const buttonSizeClasses: Record<ButtonSize, string> = {
	small: 'px-4 py-2',
	medium: 'px-6 py-3',
	large: 'px-8 py-4',
};

export const buttonVariantClasses: Record<ButtonVariant, Record<ButtonColor, string>> = {
	contained: {
		teal: 'text-white bg-teal-600',
		slate: 'text-white bg-slate-600',
	},
	outlined: {
		teal: 'border border-teal-600 text-teal-600',
		slate: 'border border-slate-600 text-slate-600',
	},
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	size?: ButtonSize;
	variant?: ButtonVariant;
	color?: ButtonColor;
}

export const Button = ({
	className,
	color = 'teal',
	size = 'medium',
	variant = 'contained',
	children,
	...props
}: ButtonProps) => {
	return (
		<button
			{...props}
			className={`inline-block rounded shadow-md text-white font-medium text-lg tracking-wide ${className} ${buttonVariantClasses[variant][color]} ${buttonSizeClasses[size]}`}
		>
			{children}
		</button>
	);
};
