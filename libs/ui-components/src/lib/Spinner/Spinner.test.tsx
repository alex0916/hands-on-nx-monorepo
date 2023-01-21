import { render, screen } from '@testing-library/react';

import { Spinner, spinnerColorClasses, SpinnerProps, spinnerSizeClasses } from './Spinner';

const subject = (props?: SpinnerProps) => render(<Spinner dataTestId="spinner" {...props} />);

describe('Button', () => {
	it('Should display the spinner', async () => {
		subject();
		const spinner = await screen.findByTestId('spinner');
		expect(spinner).toHaveClass(spinnerSizeClasses['small'], spinnerColorClasses['teal']);
	});

	it('should change the spinner props', async () => {
		subject({ color: 'slate', size: 'large' });
		const spinner = await screen.findByTestId('spinner');
		expect(spinner).toHaveClass(spinnerSizeClasses['large'], spinnerColorClasses['slate']);
	});
});
