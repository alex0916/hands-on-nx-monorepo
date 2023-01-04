import { render, screen } from '@testing-library/react';

import { Spinner, SpinnerProps, SpinnerSize, spinnerSizeClasses } from './Spinner';

let props: SpinnerProps;

beforeEach(() => {
	props = {
		size: SpinnerSize.Small,
        testId: 'spinner'
	};
});

const subject = () => render(<Spinner {...props} />);

describe('Button', () => {
	it('Should display the spinner', async () => {
		subject();
		const spinner = await screen.findByTestId(props.testId);
        expect(spinner).toHaveClass(spinnerSizeClasses[SpinnerSize.Small], 'border-teal-400');
	});

	it('should change the spinner props', async () => {
		props.size = SpinnerSize.Large;
		props.borderColorClass = 'border-blue-300';
		subject();
        const spinner = await screen.findByTestId(props.testId);
		expect(spinner).toHaveClass(props.borderColorClass, spinnerSizeClasses[props.size]);
	});
});
