import { fireEvent, render, screen } from '@posts-app/test-utils';
import { Page, Home, PageProps } from '../..';

const subject = (props?: PageProps) =>
	render(
		<Page {...props}>
			<Home />
		</Page>
	);

describe('Page', () => {
	it('should display the content without header', async () => {
		subject();
		await screen.findByText('Posts');
		await screen.findByText('Users');
		await screen.findByRole('button', { name: 'Get started' });
	});

	it('should display the content with header', async () => {
		subject({ header: 'Header' });
		await screen.findByText('Header');
	});

	it('should toggle the theme', async () => {
		subject();
		fireEvent.click(screen.getByTitle('Ligh Mode Icon'));
		await screen.findByTitle('Dark Mode Icon');
	});
});
