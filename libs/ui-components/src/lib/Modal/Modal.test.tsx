import { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { Button, Modal } from '..';

const TestModal = () => {
	const [isDisplayed, setIsDisplayed] = useState(false);

	const openModal = () => setIsDisplayed(true);
	const hideModal = () => setIsDisplayed(false);

	return (
		<>
			<Button onClick={openModal}>Open Modal</Button>
			<Modal
				isDisplayed={isDisplayed}
				hideModal={hideModal}
				header="Title"
				footer={<Button onClick={hideModal}>Close Modal</Button>}
			>
				Content
			</Modal>
		</>
	);
};

const subject = () => render(<TestModal />);

describe('Modal', () => {
	it('Should open and close the modal', async () => {
		subject();
        // Open modal
		fireEvent.click(screen.getByRole('button', { name: 'Open Modal' }));
		await screen.findByRole('dialog');
        // Close modal
        fireEvent.click(screen.getByRole('button', { name: 'Close Modal' }));
		const modal = screen.queryByRole('dialog');
		expect(modal).toBe(null);
	});
});
