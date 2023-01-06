import { render, screen } from '@testing-library/react';

import { Button, ButtonProps, ButtonSize, buttonSizeClasses } from './Button';

let props: ButtonProps;

beforeEach(() => {
	props = {
		size: ButtonSize.Medium,
	};
});

const subject = () => render(<Button {...props}>Title</Button>);

describe('Button', () => {
	it('Should display the button', async () => {
		subject();
		const button = await screen.findByText('Title');
		expect(button).toHaveClass('bg-teal-400', buttonSizeClasses[ButtonSize.Medium]);
	});

	it('should change the button props', async () => {
		props.size = ButtonSize.Large;
		props.colorClass = 'bg-blue-300';
		subject();
		const button = await screen.findByText('Title');
		expect(button).toHaveClass(props.colorClass, buttonSizeClasses[props.size])
	});
});
