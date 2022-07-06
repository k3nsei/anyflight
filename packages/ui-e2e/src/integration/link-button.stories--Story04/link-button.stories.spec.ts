describe('ui: Story04 component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=story04--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to Story04!');
  });
});
