describe('Posts app', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('should navigate to /posts, load more posts and extend one', () => {
		// Navigate to /posts
		cy.contains('a', 'Posts').should('be.visible').click();
		cy.url().should('include', '/posts');
		// Make sure the list is loaded
		cy.getByTestId('posts').as('posts').should('be.visible');
		cy.get('@posts').children().should('have.length', 9);
		// Load more posts
		cy.contains('button', 'Load more').should('be.visible').click();
		cy.get('@posts').children().should('have.length', 18);
		// Extend one post
		cy.get('@posts').children().last().click();
		cy.getByTestId('comments').as('comments').should('be.visible');
		cy.get('@comments').children().should('have.length', 5);
		cy.get('body').click(0, 0);
	});

	it('should navigate to /users and load more users', () => {
		// Navigate to /users
		cy.contains('a', 'Users').should('be.visible').click();
		cy.url().should('include', '/users');
		// Make sure the list is loaded
		cy.getByTestId('users').as('users').should('be.visible');
		cy.get('@users').children().should('have.length', 6);
		// Load more users
		cy.contains('button', 'Load more').should('be.visible').click();
		cy.get('@users').children().should('have.length.above', 8);
	});

	it('should navigate to /users, extend one and load more posts', () => {
		// Navigate to /users
		cy.contains('button', 'Get started').should('be.visible').click();
		cy.url().should('include', '/users');
		// Make sure the list is loaded
		cy.getByTestId('users').as('users').should('be.visible');
		// Extend one user
		cy.get('@users').children().first().click();
		cy.url().should('match', /users\/[0-9]/);
		// Load more posts
		cy.getByTestId('posts').as('posts').should('be.visible');
		cy.get('@posts').children().should('have.length', 3);
		cy.contains('button', 'Load more').should('be.visible').click();
		cy.get('@posts').children().should('have.length.above', 5);
	});
});
