describe('ui: EventLogContent component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=eventlogcontent--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to EventLogContent!');
  });
});
