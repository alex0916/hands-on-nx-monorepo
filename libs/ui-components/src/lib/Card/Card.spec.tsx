import { render, screen } from '@testing-library/react';

import { Card, CardProps } from './Card';

let props: CardProps;

beforeEach(() => {
	props = {
		header: 'Title',
	};
});

const subject = () =>
	render(
		<Card {...props}>
			<div data-testid="card-content">Content</div>
		</Card>
	);

describe('Card', () => {
	it('Should display the card', async () => {
		subject();
		await screen.findByText('Title');
		await screen.findByTestId('card-content');
	});
});
