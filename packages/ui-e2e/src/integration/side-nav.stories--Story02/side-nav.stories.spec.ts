describe('ui: Story02 component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=story02--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to Story02!');
  });
});
