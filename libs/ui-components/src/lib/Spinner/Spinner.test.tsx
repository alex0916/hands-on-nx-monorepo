import { render, screen } from '@testing-library/react';

import { Spinner, spinnerColorClasses, SpinnerProps, spinnerSizeClasses } from './Spinner';

let props: SpinnerProps;

beforeEach(() => {
	props = {
		size: 'small',
		color: 'teal',
		testId: 'spinner',
	};
});

const subject = () => render(<Spinner {...props} />);

describe('Button', () => {
	it('Should display the spinner', async () => {
		subject();
		const spinner = await screen.findByTestId(String(props.testId));
		expect(spinner).toHaveClass(spinnerSizeClasses['small'], spinnerColorClasses['teal']);
	});

	it('should change the spinner props', async () => {
		props.size = 'large';
		props.color = 'slate';
		subject();
		const spinner = await screen.findByTestId(String(props.testId));
		expect(spinner).toHaveClass(spinnerSizeClasses['large'], spinnerColorClasses['slate']);
	});
});
