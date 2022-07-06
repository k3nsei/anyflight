describe('ui: Story01 component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=story01--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to Story01!');
  });
});
