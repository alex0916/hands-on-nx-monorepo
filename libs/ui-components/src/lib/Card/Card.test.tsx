import { render, screen } from '@testing-library/react';

import { Card, CardProps } from './Card';

const subject = (props?: CardProps) =>
	render(
		<Card {...props}>
			<div data-testid="card-content">Content</div>
		</Card>
	);

describe('Card', () => {
	it('Should display the card with the header', async () => {
		subject({header: 'Title'});
		await screen.findByText('Title');
		await screen.findByTestId('card-content');
	});

	it('Should display the card without the header', async () => {
		subject();
		await screen.findByTestId('card-content');
	});
});
