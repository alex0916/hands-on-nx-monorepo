import { render, screen } from '@testing-library/react';

import { Button, ButtonProps, buttonSizeClasses, buttonVariantClasses } from './Button';

const subject = (props?: ButtonProps) => render(<Button {...props}>Title</Button>);

describe('Button', () => {
	it('Should display the button', async () => {
		subject();
		const button = await screen.findByRole('button', { name: 'Title' });
		expect(button).toHaveClass(buttonVariantClasses['contained']['teal'], buttonSizeClasses['medium']);
	});

	it('should change the button props', async () => {
		subject({ color: 'slate', size: 'large', variant: 'outlined' });
		const button = await screen.findByRole('button', { name: 'Title' });
		expect(button).toHaveClass(buttonVariantClasses['outlined']['slate'], buttonSizeClasses['large']);
	});
});
