describe('ui: AnyflightUiThemeProvider component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=anyflightuithemeprovider--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to AnyflightUiThemeProvider!');
  });
});
