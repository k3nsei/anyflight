describe('ui: Story03 component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=story03--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to Story03!');
  });
});
