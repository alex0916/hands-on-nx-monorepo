export enum SpinnerSize {
	Small = 'Small',
	Medium = 'Medium',
	Large = 'Large',
}

export const spinnerSizeClasses = {
	[SpinnerSize.Small]: 'h-8 w-8',
	[SpinnerSize.Medium]: 'h-12 w-12',
	[SpinnerSize.Large]: 'h-16 w-16',
};

export interface SpinnerProps {
	size?: SpinnerSize;
	borderColorClass?: string;
	testId?: string;
}

export const Spinner = ({ size = SpinnerSize.Small, borderColorClass = 'border-teal-400', testId }: SpinnerProps) => (
	<div
		data-testid={testId}
		className={`border-t-gray-300 border-solid animate-spin rounded-full ${borderColorClass} border-4 ${spinnerSizeClasses[size]}`}
	></div>
);
