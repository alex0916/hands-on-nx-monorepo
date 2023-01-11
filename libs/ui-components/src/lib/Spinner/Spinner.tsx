export type SpinnerSize = 'small' | 'medium' | 'large';
export type SpinnerColor = 'teal' | 'slate';

export const spinnerSizeClasses: Record<SpinnerSize, string> = {
	small: 'h-8 w-8',
	medium: 'h-12 w-12',
	large: 'h-16 w-16',
};

export const spinnerColorClasses: Record<SpinnerColor, string> = {
	teal: 'border-teal-600',
	slate: 'border-slate-600',
};

export interface SpinnerProps {
	size?: SpinnerSize;
	color?: SpinnerColor;
	testId?: string;
}

export const Spinner = ({ size = 'small', color = 'teal', testId }: SpinnerProps) => (
	<div
		data-testid={testId}
		className={`border-t-gray-300 border-solid animate-spin rounded-full border-4 ${spinnerColorClasses[color]} ${spinnerSizeClasses[size]}`}
	></div>
);
