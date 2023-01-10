import { render, screen } from '@testing-library/react';

import { Button, ButtonProps, buttonSizeClasses, buttonVariantClasses } from './Button';

let props: ButtonProps;

beforeEach(() => {
	props = {
		size: 'medium',
		color: 'teal',
		variant: 'contained',
	};
});

const subject = () => render(<Button {...props}>Title</Button>);

describe('Button', () => {
	it('Should display the button', async () => {
		subject();
		const button = await screen.findByText('Title');
		expect(button).toHaveClass(buttonVariantClasses['contained']['teal'], buttonSizeClasses['medium']);
	});

	it('should change the button props', async () => {
		props.size = 'large';
		props.variant = 'outlined';
		props.color = 'slate';
		subject();
		const button = await screen.findByText('Title');
		expect(button).toHaveClass(buttonVariantClasses['outlined']['slate'], buttonSizeClasses['large']);
	});
});
